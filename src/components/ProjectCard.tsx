import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
 <Link to={`/projects/${project.id}`} className="project-link">
    <article className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-year">{project.year}</span>
      </div>

<p className="project-description">{project.description}</p>
      <div className="project-meta">
        <strong>{project.role}</strong> · {project.type}
      </div>
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <button className="card-btn" to={`/projects/${project.id}`}>
        Voir le projet →
      </button>
    </article>
</Link>
  );
}
