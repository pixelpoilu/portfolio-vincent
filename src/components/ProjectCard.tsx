import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
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

      <Link className="card-btn" to={`/projects/${project.id}`}>
        Voir le projet →
      </Link>
    </article>
  );
}