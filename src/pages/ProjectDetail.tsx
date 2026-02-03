import { useParams } from "react-router-dom";
import { Projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return <p>Projet introuvable.</p>;
  }

  return (
    <section>
      <h1>{project.title}</h1>
      <p><strong>Client :</strong> {project.client}</p>
      <p><strong>Année :</strong> {project.year}</p>
      <p><strong>Description :</strong> {project.description}</p>
    </section>
  );
}
