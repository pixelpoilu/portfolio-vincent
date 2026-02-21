import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsHeader from "../components/ProjectsHeader";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

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
            !selectedTechnology || project.technologies.includes(selectedTechnology);
          const matchesSector = !selectedSector || project.secteur === selectedSector;
          return matchesTech && matchesSector && project.type === type;
        })
      ),
    [allTypes, publishedProjects, selectedTechnology, selectedSector]
  );

  const availableSectors = useMemo(
    () =>
      allSectors.filter((sector) =>
        publishedProjects.some((project) => {
          const matchesTech =
            !selectedTechnology || project.technologies.includes(selectedTechnology);
          const matchesType = !selectedType || project.type === selectedType;
          return matchesTech && matchesType && project.secteur === sector;
        })
      ),
    [allSectors, publishedProjects, selectedTechnology, selectedType]
  );

  useEffect(() => {
    if (selectedType && !availableTypes.includes(selectedType)) {
      setSelectedType(null);
    }
  }, [selectedType, availableTypes]);

  useEffect(() => {
    if (selectedSector && !availableSectors.includes(selectedSector)) {
      setSelectedSector(null);
    }
  }, [selectedSector, availableSectors]);

  const filteredProjects = useMemo(() => {
    return publishedProjects.filter((project) => {
      const matchesTech =
        !selectedTechnology ||
        project.technologies.includes(selectedTechnology);

      const matchesType =
        !selectedType ||
        project.type === selectedType;

      const matchesSector =
        !selectedSector ||
        project.secteur === selectedSector;

      return matchesTech && matchesType && matchesSector;
    });
  }, [publishedProjects, selectedTechnology, selectedType, selectedSector]);

  const technologiesCount = useMemo(() => {
    const count: Record<string, number> = {};

    allTechnologies.forEach((tech) => {
      count[tech] = publishedProjects.filter((project) => {
        const matchesType = !selectedType || project.type === selectedType;
        const matchesSector = !selectedSector || project.secteur === selectedSector;

        return matchesType && matchesSector && project.technologies.includes(tech);
      }).length;
    });

    return count;
  }, [allTechnologies, publishedProjects, selectedType, selectedSector]);

  return (
    <PageTransition>
      <section className="projects-section">
        <ProjectsHeader
          technologies={allTechnologies}
          types={availableTypes}
          sectors={availableSectors}
          activeTech={selectedTechnology}
          activeType={selectedType}
          activeSector={selectedSector}
          projectsCount={filteredProjects.length}
          technologiesCount={technologiesCount}
          onTechSelect={(tech) =>
            setSelectedTechnology((prev) =>
              prev === tech ? null : tech
            )
          }
          onResetTech={() => setSelectedTechnology(null)}
          onTypeChange={setSelectedType}
          onSectorChange={setSelectedSector}
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
    </PageTransition>
  );
}
