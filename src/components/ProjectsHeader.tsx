import { AnimatePresence, motion } from "framer-motion";
import TechnologyFilter from "./TechnologyFilter";
import TypeFilter from "./TypeFilter";

interface ProjectsHeaderProps {
  technologies: string[];
  types: string[];
  activeTech: string | null;     // 👈 plus un array
  activeType: string | null;
  projectsCount: number;
  technologiesCount: Record<string, number>;
  onTechSelect: (tech: string) => void;
  onResetTech: () => void;
  onTypeChange: (type: string | null) => void;
}

export default function ProjectsHeader({
  technologies,
  types,
  activeTech,
  activeType,
  projectsCount,
  technologiesCount,
  onTechSelect,
  onResetTech,
  onTypeChange,
}: ProjectsHeaderProps) {

const hasActiveFilters =
  activeTech !== null || activeType !== null;

const resetFilters = () => {
  onResetTech();
  onTypeChange(null);
};


  return (
    <header className="projects-header">
      <div className="filters-wrapper">

<TechnologyFilter
  technologies={technologies}
  activeTech={activeTech}
  onSelect={onTechSelect}
  technologiesCount={technologiesCount}
/>

        <TypeFilter
          types={types}
          activeType={activeType}
          onChange={onTypeChange}
        />

      </div>

      <div className="projects-meta">
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              className="reset-button"
              onClick={resetFilters}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset filters
            </motion.button>
          )}
        </AnimatePresence>

        <p className="projects-count">
          {projectsCount} projet{projectsCount > 1 ? "s" : ""}
        </p>
      </div>
    </header>
  );
}