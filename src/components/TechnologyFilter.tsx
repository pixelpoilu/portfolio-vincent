import { useState } from "react";

type Props = {
  technologies: string[];
  activeTech: string | null;
  onChange: (tech: string | null) => void;
};

export default function TechnologyFilter({
  technologies,
  activeTech,
  onChange,
}: Props) {
  return (
    <div className="filter-bar">
      
      <button
        className={`filter-btn ${activeTech === null ? "active" : ""}`}
        onClick={() => onChange(null)}
      >
        Tous
      </button>

      {technologies.map((tech) => (
        <button
          key={tech}
          className={`filter-btn ${activeTech === tech ? "active" : ""}`}
          onClick={() => onChange(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
