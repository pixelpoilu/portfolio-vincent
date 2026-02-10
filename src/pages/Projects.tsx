import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//import { projects } from "../data/projects.json";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectsHeader from "../components/ProjectsHeader";

export default function Projects() {
  // ------------------------------
  // Gestion du filtre via l’URL
  // ------------------------------
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTech = searchParams.get("tech");

  // ------------------------------
  // Liste unique des technologies
  // ------------------------------
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // ------------------------------
  // Filtrage des projets
  // ------------------------------
  const filteredProjects = activeTech
    ? projects.filter((project) =>
        project.technologies.includes(activeTech)
      )
    : projects;

  // ------------------------------
  // Changement de filtre
  // ------------------------------
  const handleFilterChange = (tech: string | null) => {
    if (tech) {
      setSearchParams({ tech });
    } else {
      setSearchParams({});
    }
  };

  // ------------------------------
  // Rendu
  // ------------------------------
  return (
    <section className="section">
      {/* Header : filtres + compteur */}
      <ProjectsHeader
        technologies={allTechnologies}
        activeTech={activeTech}
        projectsCount={filteredProjects.length}
        onFilterChange={handleFilterChange}
      />

      {/* Grille de projets animée */}
      <div className="projects-grid">
        <AnimatePresence>
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
      </div>
    </section>
  );
}
