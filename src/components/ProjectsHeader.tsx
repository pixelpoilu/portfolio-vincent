import TechnologyFilter from "./TechnologyFilter";
import TypeFilter from "./TypeFilter";

interface ProjectsHeaderProps {
  technologies: string[];
  types: string[];
  activeTech: string | null;
  activeType: string | null;
  projectsCount: number;
  onTechChange: (tech: string | null) => void;
  onTypeChange: (type: string | null) => void;
}

export default function ProjectsHeader({
  technologies,
  types,
  activeTech,
  activeType,
  projectsCount,
  onTechChange,
  onTypeChange,
}: ProjectsHeaderProps) {
  return (
    <header className="projects-header">
      {/* Filtre par technologies */}
      <TechnologyFilter
        technologies={technologies}
        activeTech={activeTech}
        onChange={onTechChange}
      />

      {/* Filtre par type */}
      <TypeFilter
        types={types}
        activeType={activeType}
        onChange={onTypeChange}
      />

      {/* Compteur */}
      <p className="projects-count">
        {projectsCount} projet{projectsCount > 1 ? "s" : ""}
      </p>
    </header>
  );
}
