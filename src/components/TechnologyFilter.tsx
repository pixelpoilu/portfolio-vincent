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
        if (count === 0) return null;

        return (
          <button
            key={tech}
            type="button"
            onClick={() => onSelect(tech)}
            className={`tech-button chip ${isActive ? "active" : ""}`}
          >
            {isActive && (
              <span
                className="active-highlight"
                aria-hidden="true"
              />
            )}

            <span className="tech-label">{tech}</span>

            <span
              className="tech-count"
              key={count}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

