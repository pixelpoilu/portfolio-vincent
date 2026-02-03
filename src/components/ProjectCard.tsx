import type { Project } from "../types/Project";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="card">
      <h2>{project.title}</h2>
      <p>
        <strong>Client :</strong> {project.client}
      </p>
      <p>
        <strong>Année :</strong> {project.year}
      </p>
      <p>{project.description}</p>
      <p>
        <strong>Technologies :</strong>{" "}
        {project.technologies.join(", ")}
      </p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          Voir le site →
        </a>
      )}
    </div>
  );
}
