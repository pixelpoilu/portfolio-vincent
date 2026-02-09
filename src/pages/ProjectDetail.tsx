import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../services/projectService";

export default function ProjectDetail() {
  const { id } = useParams();
const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <main className="page">
        <h1>Projet introuvable</h1>
        <Link to="/projects">← Retour</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/projects">← Retour aux projets</Link>

      <h1>{project.title}</h1>
      <p className="meta">
        {project.client} • {project.year}
      </p>

      <img src={project.image} alt={project.title} className="detail-image" />

      <h2>Description</h2>
      <p>{project.description}</p>

      <h2>Missions</h2>
      <ul>
        {project.missions.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <h2>Technologies</h2>
      <p>{project.technologies.join(", ")}</p>
    </main>
  );
}
