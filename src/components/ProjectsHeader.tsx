import { AnimatePresence, motion } from "framer-motion";
import TechnologyFilter from "./TechnologyFilter";
import TypeFilter from "./TypeFilter";
import SectorFilter from "./SectorFilter"; // ✅ NEW

interface ProjectsHeaderProps {
  technologies: string[];
  types: string[];
  sectors: string[]; // ✅ NEW

  activeTech: string | null;
  activeType: string | null;
  activeSector: string | null; // ✅ NEW

  projectsCount: number;
  technologiesCount: Record<string, number>;

  onTechSelect: (tech: string) => void;
  onResetTech: () => void;
  onTypeChange: (type: string | null) => void;
  onSectorChange: (sector: string | null) => void; // ✅ NEW
}

export default function ProjectsHeader({
  technologies,
  types,
  sectors, // ✅ NEW
  activeTech,
  activeType,
  activeSector, // ✅ NEW
  projectsCount,
  technologiesCount,
  onTechSelect,
  onResetTech,
  onTypeChange,
  onSectorChange, // ✅ NEW
}: ProjectsHeaderProps) {

  const hasActiveFilters =
    activeTech !== null ||
    activeType !== null ||
    activeSector !== null; // ✅ NEW

  const resetFilters = () => {
    onResetTech();
    onTypeChange(null);
    onSectorChange(null); // ✅ NEW
  };

  return (
    <header className="projects-header">
      <div className="filters-wrapper">
        <TypeFilter
          types={types}
          activeType={activeType}
          onChange={onTypeChange}
        />

        {/* ✅ NEW */}
        <SectorFilter
          sectors={sectors}
          activeSector={activeSector}
          onChange={onSectorChange}
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