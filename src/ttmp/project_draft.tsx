import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import TechnologyFilter from "../components/TechnologyFilter";
import TypeFilter from "../components/TypeFilter";
import ProjectsHeader from "../components/ProjectsHeader";

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
 const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
const [selectedType, setSelectedType] = useState<string | null>(null);




const resetFilters = () => {
  setSelectedTechnologies([]);
  setSelectedType(null);
};

  // Liste unique des technologies
const allTechnologies = Array.from(
  new Set(
    projects.flatMap((p) => p.technologies ?? [])
  )
).sort();

  // Liste unique des types
  const allTypes = Array.from(
    new Set(projects.map((p) => p.type))
  ).sort();

  // Filtrage croisé
  const filteredProjects = projects.filter((project) => {
    const techMatch =
      selectedTechnologies.length > 0
        ? selectedTechnologies.every((tech) =>
            (project.technologies ?? []).includes(tech)
          )
        : true;

const typeMatch =
  selectedType !== null
    ? project.type === selectedType
    : true;
/*
const typeMatch =
  selectedType !== null
    ? project.type === selectedType
    : true;


*/
    return techMatch && typeMatch;
  });
  return (
    <section className="section">

<ProjectsHeader
  technologies={allTechnologies}
  types={allTypes}
  activeTechs={selectedTechnologies}
  activeType={Array.isArray(selectedTypes) ? selectedTypes[0] ?? null : null}
  projectsCount={filteredProjects.length}
  onTechChange={setSelectedTechnologies}
  onTypeChange={(type) =>
    setSelectedTypes(type ? [type] : [])
  }
/>
{/*  */}

      <div className="filters-container">
        <TechnologyFilter
          technologies={allTechnologies}
          activeTechs={selectedTechnologies}
          onChange={setSelectedTechnologies}
        />

<TypeFilter
  types={allTypes}
  activeType={selectedType}
  onChange={setSelectedType}
/>
      <AnimatePresence>
        {(selectedTechnologies.length > 0 || selectedTypes.length > 0) && (
          <motion.button
            className="reset-button"
            onClick={resetFilters}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset filters
          </motion.button>
        )}
      </AnimatePresence>

      </div>


      <hr className="separator" />

      <div className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
----------------------------------------
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects.json";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

export default function Projects() {




  // 🔹 State
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);


// 🔹 Compteur dynamique par technologie
const technologiesCount: Record<string, number> = {};

// 🔹 Projets filtrés uniquement par type (pour recalculer les technos visibles)
const projectsFilteredByType =
  selectedType !== null
    ? projects.filter((p) => p.type === selectedType)
    : projects;

// 🔹 Technologies dynamiques basées sur le type sélectionné
const allTechnologies = Array.from(
  new Set(
    projectsFilteredByType.flatMap((p) => p.technologies ?? [])
  )
).sort();
// 🔹 Compteur dynamique par technologie


projectsFilteredByType.forEach((project) => {
  (project.technologies ?? []).forEach((tech) => {
    technologiesCount[tech] =
      (technologiesCount[tech] || 0) + 1;
  });
});

  // 🔹 Liste unique des types
  const allTypes = Array.from(
    new Set(projects.map((p) => p.type))
  ).sort();

useEffect(() => {
  if (selectedType !== null) {
    setSelectedTechnologies((prev) =>
      prev.filter((tech) =>
        allTechnologies.includes(tech)
      )
    );
  }
}, [selectedType]);

  // 🔹 Filtrage croisé
  const filteredProjects = projects.filter((project) => {
    const techMatch =
      selectedTechnologies.length > 0
        ? selectedTechnologies.every((tech) =>
            (project.technologies ?? []).includes(tech)
          )
        : true;

    const typeMatch =
      selectedType !== null
        ? project.type === selectedType
        : true;

    return techMatch && typeMatch;
  });

  return (
    <section className="section">
      {/* Header avec filtres */}
      <ProjectsHeader
        technologies={allTechnologies}
        types={allTypes}
        activeTechs={selectedTechnologies}
        activeType={selectedType}
        projectsCount={filteredProjects.length}
        onTechChange={setSelectedTechnologies}
        onTypeChange={setSelectedType}
        technologiesCount={technologiesCount}
      />

      <hr className="separator" />

      {/* Grille projets */}
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
