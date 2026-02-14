import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsHeader from "../components/ProjectsHeader";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

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

  // 🎯 Filtrage
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTech =
        !selectedTechnology ||
        project.technologies.includes(selectedTechnology);

      const matchesType =
        !selectedType ||
        project.type === selectedType;

      return matchesTech && matchesType;
    });
  }, [selectedTechnology, selectedType]);

  // 📊 Compteur par techno
  const technologiesCount = useMemo(() => {
    const count: Record<string, number> = {};

    allTechnologies.forEach((tech) => {
      count[tech] = projectsData.filter((project) => {
        const matchesType =
          !selectedType || project.type === selectedType;

        return (
          matchesType &&
          project.technologies.includes(tech)
        );
      }).length;
    });

    return count;
  }, [allTechnologies, selectedType]);

  return (
    <section className="projects-section">
      <ProjectsHeader
        technologies={allTechnologies}
        types={allTypes}
        activeTech={selectedTechnology}
        activeType={selectedType}
        projectsCount={filteredProjects.length}
        technologiesCount={technologiesCount}
        onTechSelect={(tech) =>
          setSelectedTechnology((prev) =>
            prev === tech ? null : tech
          )
        }
        onResetTech={() => setSelectedTechnology(null)}
        onTypeChange={setSelectedType}
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
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}