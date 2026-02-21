import { AnimatePresence, motion } from "framer-motion";
import SectorFilter from "./SectorFilter";
import TypeFilter from "./TypeFilter";
import TechnologyFilter from "./TechnologyFilter";

interface ProjectsHeaderProps {
  technologies: string[];
  types: string[];
  sectors: string[];
  activeTech: string | null;
  activeType: string | null;
  activeSector: string | null;
  projectsCount: number;
  technologiesCount: Record<string, number>;
  onTechSelect: (tech: string) => void;
  onResetTech: () => void;
  onTypeChange: (type: string | null) => void;
  onSectorChange: (sector: string | null) => void;
}

export default function ProjectsHeader({
  technologies,
  types,
  sectors,
  activeTech,
  activeType,
  activeSector,
  projectsCount,
  technologiesCount,
  onTechSelect,
  onResetTech,
  onTypeChange,
  onSectorChange,
}: ProjectsHeaderProps) {
  const hasActiveFilters =
    activeTech !== null || activeType !== null || activeSector !== null;

  const resetFilters = () => {
    onResetTech();
    onTypeChange(null);
    onSectorChange(null);
  };

  return (
    <header className="projects-header">
      <div className="filters-wrapper">
        <SectorFilter
          sectors={sectors}
          activeSector={activeSector}
          onChange={onSectorChange}
        />

        <TypeFilter
          types={types}
          activeType={activeType}
          onChange={onTypeChange}
        />

        <TechnologyFilter
          technologies={technologies}
          activeTech={activeTech}
          onSelect={onTechSelect}
          technologiesCount={technologiesCount}
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
