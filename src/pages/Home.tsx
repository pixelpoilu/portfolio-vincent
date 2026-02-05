import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        {/* Texte */}
        <div>
          <h1>
            Bienvenue sur mon <br /> Portfolio
          </h1>

          <p>Développeur Web & Chef de projet digital</p>

          <Link to="/projects" className="hero-btn">
            Voir mes projets
          </Link>
        </div>

        {/* Illustration */}
        <div>
          <img
            src="/images/hero.png"
            alt="Illustration développeur"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>
      </section>
    </main>
  );
}
