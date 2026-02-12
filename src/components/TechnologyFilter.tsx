import { motion, AnimatePresence } from "framer-motion";

interface TechnologyFilterProps {
  technologies: string[];
  activeTechs: string[];
  onChange: (techs: string[]) => void;
}

export default function TechnologyFilter({
  technologies,
  activeTechs = [],
  onChange,
}: TechnologyFilterProps) {
  const toggleTech = (tech: string) => {
    if (activeTechs.includes(tech)) {
      onChange(activeTechs.filter((t) => t !== tech));
    } else {
      onChange([...activeTechs, tech]);
    }
  };

  const removeTech = (tech: string) => {
    onChange(activeTechs.filter((t) => t !== tech));
  };

  return (
    <div className="filter-bar">
      {technologies.map((tech) => {
        const isActive = activeTechs.includes(tech);

        return (
          <button
            key={tech}
            className={`chip ${isActive ? "active" : ""}`}
            onClick={() => toggleTech(tech)}
          >
            <span className="chip-label">{tech}</span>

<AnimatePresence>
  {isActive && (
    <motion.span
      className="chip-remove"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.15 }}
      onClick={(e) => {
        e.stopPropagation();
        removeTech(tech);
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Retirer ${tech}`}
    >
      ✕
    </motion.span>
  )}
</AnimatePresence>

          </button>
        );
      })}
    </div>
  );
}
