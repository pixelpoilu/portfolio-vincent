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
const activeType = searchParams.get("type");

  // ------------------------------
  // Liste unique des technologies
  // ------------------------------
const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();
  // ------------------------------
  // Liste unique des types
  // ------------------------------
const allTypes = Array.from(
  new Set(projects.map((p) => p.type))
).sort();


  // ------------------------------
  // Filtrage des projets
  // ------------------------------
const filteredProjects = projects.filter((project) => {
  const techMatch = activeTech
    ? project.technologies.includes(activeTech)
    : true;

  const typeMatch = activeType
    ? project.type === activeType
    : true;

  return techMatch && typeMatch;
});


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
const updateFilters = (tech: string | null, type: string | null) => {
  const params: Record<string, string> = {};
  if (tech) params.tech = tech;
  if (type) params.type = type;
  setSearchParams(params);
};
  // ------------------------------
  // Rendu
  // ------------------------------
  return (
    <section className="section">
      {/* Header : filtres + compteur */}
<ProjectsHeader
  technologies={allTechnologies}
  types={allTypes}
  activeTech={activeTech}
  activeType={activeType}
  projectsCount={filteredProjects.length}
  onTechChange={(tech) => updateFilters(tech, activeType)}
  onTypeChange={(type) => updateFilters(activeTech, type)}
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
