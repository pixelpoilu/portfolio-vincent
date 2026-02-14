import { motion } from "framer-motion";

interface TechnologyFilterProps {
  technologies: string[];
  activeTech: string | null;
  onSelect: (tech: string) => void;
  technologiesCount: Record<string, number>;
}

export default function TechnologyFilter({
  technologies,
  activeTech,
  onSelect,
  technologiesCount,
}: TechnologyFilterProps) {
  return (
    <div className="tech-filter">
      {technologies.map((tech) => {
        const count = technologiesCount?.[tech] ?? 0;
        const isActive = activeTech === tech;
        const isDisabled = count === 0;

        return (
          <motion.button
            key={tech}
            type="button"
            onClick={() => onSelect(tech)}
            disabled={isDisabled}
            className={`tech-button ${isActive ? "active" : ""}`}
            whileTap={!isDisabled ? { scale: 0.94 } : {}}
            whileHover={!isDisabled ? { scale: 1.05 } : {}}
            layout
            transition={{ duration: 0.2 }}
          >
            {/* Highlight animé */}
            {isActive && (
              <motion.div
                layoutId="activeTechHighlight"
                className="active-highlight"
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 28,
                }}
              />
            )}

            <span className="tech-label">{tech}</span>

            <motion.span
              className="tech-count"
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {count}
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
}