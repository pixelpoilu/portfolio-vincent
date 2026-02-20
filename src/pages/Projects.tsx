import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsHeader from "../components/ProjectsHeader";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null); // ✅ NEW

  // 🔎 Liste unique des technos
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet);
  }, []);

  // 🔎 Liste unique des types
  const allTypes = useMemo(() => {
    const typeSet = new Set<string>();
    projectsData.forEach((project) => {
      typeSet.add(project.type);
    });
    return Array.from(typeSet);
  }, []);

  // 🔎 Liste unique des secteurs ✅ NEW
  const allSectors = useMemo(() => {
    const sectorSet = new Set<string>();
    projectsData.forEach((project) => {
      sectorSet.add(project.secteur);
    });
    return Array.from(sectorSet);
  }, []);

  // 🎯 Filtrage
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTech =
        !selectedTechnology ||
        project.technologies.includes(selectedTechnology);

      const matchesType =
        !selectedType ||
        project.type === selectedType;

      const matchesSector =
        !selectedSector ||
        project.secteur === selectedSector;

      const isPublished =
        project.status === "published";

      return matchesTech && matchesType && matchesSector && isPublished;
    });
  }, [selectedTechnology, selectedType, selectedSector]);

  // 📊 Compteur par techno
  const technologiesCount = useMemo(() => {
    const count: Record<string, number> = {};

    allTechnologies.forEach((tech) => {
      count[tech] = projectsData.filter((project) => {
        const matchesType =
          !selectedType || project.type === selectedType;

        const matchesSector =
          !selectedSector || project.secteur === selectedSector;

        return (
          project.status === "published" &&
          matchesType &&
          matchesSector &&
          project.technologies.includes(tech)
        );
      }).length;
    });

    return count;
  }, [allTechnologies, selectedType, selectedSector]);

  return (
    <PageTransition>
      <section className="projects-section">
        <ProjectsHeader
          technologies={allTechnologies}
          types={allTypes}
          sectors={allSectors} // ✅ NEW
          activeTech={selectedTechnology}
          activeType={selectedType}
          activeSector={selectedSector} // ✅ NEW
          projectsCount={filteredProjects.length}
          technologiesCount={technologiesCount}
          onTechSelect={(tech) =>
            setSelectedTechnology((prev) =>
              prev === tech ? null : tech
            )
          }
          onResetTech={() => setSelectedTechnology(null)}
          onTypeChange={setSelectedType}
          onSectorChange={setSelectedSector} // ✅ NEW
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
    </PageTransition>
  );
}