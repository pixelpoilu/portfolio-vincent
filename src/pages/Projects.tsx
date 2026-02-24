import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "../components/FilterBar";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const publishedProjects = useMemo(
    () => projectsData.filter((project) => project.status === "published"),
    []
  );

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    publishedProjects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet);
  }, [publishedProjects]);

  const allTypes = useMemo(() => {
    const typeSet = new Set<string>();
    publishedProjects.forEach((project) => {
      typeSet.add(project.type);
    });
    return Array.from(typeSet);
  }, [publishedProjects]);

  const allSectors = useMemo(() => {
    const sectorSet = new Set<string>();
    publishedProjects.forEach((project) => {
      sectorSet.add(project.secteur);
    });
    return Array.from(sectorSet);
  }, [publishedProjects]);

  const availableTypes = useMemo(
    () =>
      allTypes.filter((type) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesSector && project.type === type;
        })
      ),
    [allTypes, publishedProjects, selectedTechnologies, selectedSectors]
  );

  const availableSectors = useMemo(
    () =>
      allSectors.filter((sector) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(project.type);
          return matchesTech && matchesType && project.secteur === sector;
        })
      ),
    [allSectors, publishedProjects, selectedTechnologies, selectedTypes]
  );

  const availableTechnologies = useMemo(
    () =>
      allTechnologies.filter((technology) =>
        publishedProjects.some((project) => {
          const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(project.type);
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return (
            matchesType &&
            matchesSector &&
            project.technologies.includes(technology)
          );
        })
      ),
    [allTechnologies, publishedProjects, selectedTypes, selectedSectors]
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

  const filteredProjects = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);

    return publishedProjects.filter((project) => {
      const matchesTech =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.some((tech) => project.technologies.includes(tech));

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(project.type);

      const matchesSector =
        selectedSectors.length === 0 || selectedSectors.includes(project.secteur);

      if (!matchesTech || !matchesType || !matchesSector) {
        return false;
      }

      if (normalizedQuery === "") {
        return true;
      }

      const searchableContent = [
        project.title,
        project.client,
        project.type,
        project.secteur,
        project.description,
        String(project.year),
        project.technologies.join(" "),
      ]
        .filter(Boolean)
        .join(" ");

      return normalizeText(searchableContent).includes(normalizedQuery);
    });
  }, [
    publishedProjects,
    selectedTechnologies,
    selectedTypes,
    selectedSectors,
    searchQuery,
  ]);

  return (
    <PageTransition>
      <div className="site-page">
        <section className="projects-section">
          <FilterBar
            sectors={availableSectors}
            types={availableTypes}
            technologies={availableTechnologies}
            activeSectors={selectedSectors}
            activeTypes={selectedTypes}
            activeTechs={selectedTechnologies}
            searchQuery={searchQuery}
            onSectorChange={setSelectedSectors}
            onTypeChange={setSelectedTypes}
            onTechChange={setSelectedTechnologies}
            onSearchChange={setSearchQuery}
            projectsCount={filteredProjects.length}
          />

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
                  <ProjectCard project={project} />
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
