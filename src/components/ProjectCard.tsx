import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
};
export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h2>{project.title}</h2>
        <p className="meta">
          {project.client} • {project.year}
        </p>

        <p>{project.description}</p>

        <div className="badges">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <Link to={`/projects/${project.id}`} className="btn">
          Voir le projet →
        </Link>
      </div>
    </article>
  );
}
