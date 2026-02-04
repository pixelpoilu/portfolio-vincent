import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <h1>Portfolio Vincent Lepretre</h1>
      <p>
        Développeur Web / Chef de projet digital — spécialisé en interfaces
        sobres et efficaces.
      </p>

      <Link to="/projects" className="btn">
        Voir mes projets →
      </Link>
    </main>
  );
}
