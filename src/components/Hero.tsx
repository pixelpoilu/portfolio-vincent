import "../styles/Hero.css";
import portrait from "../assets/images/hero/portrait-bw.png"; // ton image HD

export default function Home() {
    return (
        <main className="home">

            {/* Header minimal */}
            <div className="home-top">
                <div className="home-logo">V</div>
                <div className="home-year">2024</div>
            </div>

            {/* Hero principal */}
            <section className="home-hero">

                {/* Colonne gauche */}
                <div className="hero-left">
                    <h1>Vincent Leprêtre</h1>

                    <span className="hero-role">WEBMASTER</span>

                    <div className="hero-divider" />

                    <p className="hero-description">
                        Je conçois des expériences digitales performantes
                        depuis plus de 15 ans.
                    </p>

                    <div className="hero-buttons">
                        <a href="/cv.pdf" className="btn primary">
                            Télécharger mon CV
                        </a>

                        <a href="/projects" className="btn secondary">
                            Voir les projets
                        </a>
                    </div>
                </div>

                {/* Colonne droite */}
                <div className="hero-right">
                    <img src={portrait} alt="Vincent Leprêtre" />
                </div>

            </section>
        </main>
    );
}