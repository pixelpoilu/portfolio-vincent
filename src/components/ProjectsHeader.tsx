import { motion, AnimatePresence } from "framer-motion";
import TechnologyFilter from "./TechnologyFilter";
import TypeFilter from "./TypeFilter";

interface ProjectsHeaderProps {
  technologies: string[];
  types: string[];
  activeTechs: string[];
  activeType: string | null;
  projectsCount: number;
  onTechChange: (techs: string[]) => void;
  onTypeChange: (type: string | null) => void;
}

export default function ProjectsHeader({
  technologies,
  types,
  activeTechs,
  activeType,
  projectsCount,
  onTechChange,
  onTypeChange,
}: ProjectsHeaderProps) {
  const hasActiveFilters =
    activeTechs.length > 0 || activeType !== null;

  const resetFilters = () => {
    onTechChange([]);
    onTypeChange(null);
  };

  return (
    <header className="projects-header">
      {/* Filtres */}
      <div className="filters-wrapper">
      <p className="projects-count" style={{ textAlign: "left", marginBottom: 8 }}>
        Types de projets:
      </p>
        <TypeFilter
          types={types}
          activeType={activeType}
          onChange={onTypeChange}
        />
      <p className="projects-count" style={{ textAlign: "left", marginBottom: 8 }}>
        Technologies utilisées :
      </p>
        <TechnologyFilter
          technologies={technologies}
          activeTechs={activeTechs}
          onChange={onTechChange}
        />
      </div>

      {/* Reset animé */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.button
            className="reset-button"
            onClick={resetFilters}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset filters
          </motion.button>
        )}
      </AnimatePresence>

      {/* Compteur */}
      <p className="projects-count">
        {projectsCount} projet{projectsCount > 1 ? "s" : ""}
      </p>
    </header>
  );
}
