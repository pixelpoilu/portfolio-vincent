import TechnologyFilter from "./TechnologyFilter";

interface ProjectsHeaderProps {
  technologies: string[];
  activeTech: string | null;
  projectsCount: number;
  onFilterChange: (tech: string | null) => void;
}

export default function ProjectsHeader({
  technologies,
  activeTech,
  projectsCount,
  onFilterChange,
}: ProjectsHeaderProps) {
  return (
    <header className="projects-header">
      <TechnologyFilter
        technologies={technologies}
        activeTech={activeTech}
        onChange={onFilterChange}
      />

      <p className="projects-count">
        {projectsCount} projet{projectsCount > 1 ? "s" : ""}
      </p>
    </header>
  );
}
