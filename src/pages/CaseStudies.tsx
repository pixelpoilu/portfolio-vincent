import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "../components/FilterBar";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import type { Project } from "../types/Project";
import { hasCollection } from "../utils/projectCollection";
import { getProjectTypes, projectHasType } from "../utils/projectType";

const projectImageModules = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);
const projectImageByFilename = new Map(
  Object.entries(projectImageModules).map(([path, image]) => [
    path.split("/").pop()?.trim() ?? "",
    image.default,
  ])
);

const resolveProjectImageSrc = (project: Project) => {
  const imageFilename = project.image?.trim();
  if (!imageFilename) {
    return undefined;
  }

  const mediaPath = project.mediapath?.trim();
  if (mediaPath) {
    const projectImagePath = `../assets/images/projects/${mediaPath}/${imageFilename}`;
    const projectImage = projectImageModules[projectImagePath]?.default;
    if (projectImage) {
      return projectImage;
    }
  }

  const directImage = projectImageByFilename.get(imageFilename);
  if (directImage) {
    return directImage;
  }

  const vignettePath = `../assets/images/projects/vignettes/${imageFilename}`;
  return projectImageModules[vignettePath]?.default;
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const sortAlphabetically = (values: string[]) =>
  [...values].sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

const toSortableOrder = (value?: number) =>
  typeof value === "number" && Number.isFinite(value)
    ? value
    : Number.NEGATIVE_INFINITY;

export default function CaseStudies() {
  const detailBasePath = "/etudes-de-cas";
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const introText =
    "Plongez dans les études de cas pour comprendre la démarche, les choix et les résultats.";

  const publishedProjects = useMemo(() => {
    const projects = projectsData as Project[];
    return projects.filter(
      (project) => project.status === "published" && hasCollection(project, "case-study")
    );
  }, []);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    publishedProjects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return sortAlphabetically(Array.from(techSet));
  }, [publishedProjects]);

  const allTools = useMemo(() => {
    const toolSet = new Set<string>();
    publishedProjects.forEach((project) => {
      project.outils.forEach((tool) => toolSet.add(tool));
    });
    return sortAlphabetically(Array.from(toolSet));
  }, [publishedProjects]);

  const allTypes = useMemo(() => {
    const typeSet = new Set<string>();
    publishedProjects.forEach((project) => {
      getProjectTypes(project).forEach((type) => typeSet.add(type));
    });
    return sortAlphabetically(Array.from(typeSet));
  }, [publishedProjects]);

  const allSectors = useMemo(() => {
    const sectorSet = new Set<string>();
    publishedProjects.forEach((project) => {
      sectorSet.add(project.secteur);
    });
    return sortAlphabetically(Array.from(sectorSet));
  }, [publishedProjects]);

  const availableTypes = useMemo(
    () =>
      allTypes.filter((type) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesTool && matchesSector && projectHasType(project, type);
        })
      ),
    [allTypes, publishedProjects, selectedTechnologies, selectedTools, selectedSectors]
  );

  const availableSectors = useMemo(
    () =>
      allSectors.filter((sector) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesType =
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
          return matchesTech && matchesTool && matchesType && project.secteur === sector;
        })
      ),
    [allSectors, publishedProjects, selectedTechnologies, selectedTools, selectedTypes]
  );

  const availableTechnologies = useMemo(
    () =>
      allTechnologies.filter((technology) =>
        publishedProjects.some((project) => {
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesType =
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return (
            matchesTool &&
            matchesType &&
            matchesSector &&
            project.technologies.includes(technology)
          );
        })
      ),
    [allTechnologies, publishedProjects, selectedTools, selectedTypes, selectedSectors]
  );

  const availableTools = useMemo(
    () =>
      allTools.filter((tool) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesType =
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesType && matchesSector && project.outils.includes(tool);
        })
      ),
    [allTools, publishedProjects, selectedTechnologies, selectedTypes, selectedSectors]
  );

  useEffect(() => {
    setSelectedTypes((current) => {
      const next = current.filter((type) => availableTypes.includes(type));
      return next.length === current.length ? current : next;
    });
  }, [availableTypes]);

  useEffect(() => {
    setSelectedSectors((current) => {
      const next = current.filter((sector) => availableSectors.includes(sector));
      return next.length === current.length ? current : next;
    });
  }, [availableSectors]);

  useEffect(() => {
    setSelectedTechnologies((current) => {
      const next = current.filter((technology) =>
        availableTechnologies.includes(technology)
      );
      return next.length === current.length ? current : next;
    });
  }, [availableTechnologies]);

  useEffect(() => {
    setSelectedTools((current) => {
      const next = current.filter((tool) => availableTools.includes(tool));
      return next.length === current.length ? current : next;
    });
  }, [availableTools]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);

    return publishedProjects
      .filter((project) => {
        const matchesTech =
          selectedTechnologies.length === 0 ||
          selectedTechnologies.some((tech) => project.technologies.includes(tech));

        const matchesTool =
          selectedTools.length === 0 ||
          selectedTools.some((tool) => project.outils.includes(tool));

        const matchesType =
          selectedTypes.length === 0 ||
          selectedTypes.some((type) => projectHasType(project, type));

        const matchesSector =
          selectedSectors.length === 0 || selectedSectors.includes(project.secteur);

        if (!matchesTech || !matchesTool || !matchesType || !matchesSector) {
          return false;
        }

        if (normalizedQuery === "") {
          return true;
        }

        const searchableContent = [
          project.title,
          project.client,
          getProjectTypes(project).join(" "),
          project.secteur,
          project.description,
          project.outils.join(" "),
          project.technologies.join(" "),
        ]
          .filter(Boolean)
          .join(" ");

        return normalizeText(searchableContent).includes(normalizedQuery);
      })
      .sort((a, b) => {
        const caseOrderA = toSortableOrder(a.caseorder);
        const caseOrderB = toSortableOrder(b.caseorder);

        if (caseOrderA !== caseOrderB) {
          return caseOrderB - caseOrderA;
        }

        const orderA = toSortableOrder(a.order);
        const orderB = toSortableOrder(b.order);
        return orderB - orderA;
      });
  }, [
    publishedProjects,
    selectedTechnologies,
    selectedTools,
    selectedTypes,
    selectedSectors,
    searchQuery,
  ]);

  return (
    <PageTransition>
      <div className="site-page case-studies-page">
        <FilterBar
          sectors={availableSectors}
          types={availableTypes}
          tools={availableTools}
          technologies={availableTechnologies}
          activeSectors={selectedSectors}
          activeTypes={selectedTypes}
          activeTools={selectedTools}
          activeTechs={selectedTechnologies}
          searchQuery={searchQuery}
          onSectorChange={setSelectedSectors}
          onTypeChange={setSelectedTypes}
          onToolChange={setSelectedTools}
          onTechChange={setSelectedTechnologies}
          onSearchChange={setSearchQuery}
          projectsCount={filteredProjects.length}
          introText={introText}
        />

        <section className="projects-section">
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ProjectCard
                    project={project}
                    detailBasePath={detailBasePath}
                    thumbnailOverride={resolveProjectImageSrc(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
}


