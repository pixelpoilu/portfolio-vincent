import "../styles/Hero.css";
import portrait from "../assets/images/hero/portrait-bw.png"; // ton image HD
import Footer from "./Footer";
import logo from "../assets/logo.svg";
export default function Home() {
    return (
        <main className="home">

            {/* Header minimal */}
            <div className="home-top">
                <div className="logo"><img src={logo} alt="Logo Vincent Lepretre" /></div>
                <div className="home-year">2026</div>
            </div>

            {/* Hero principal */}
            <section className="home-hero">

                {/* Colonne gauche */}
                <div className="hero-left">
                    <h1>Vincent Leprêtre</h1>
                    <span className="hero-role">WEBMASTER</span>
                    <div className="hero-divider" />

                    <p className="hero-description">
                        Développeur frontend orienté UX/UI
                        Je conçois des interfaces claires, structurées et pensées comme des produits.
                    </p>

                    <div className="hero-buttons">
                        <a href="/cv.pdf" className="btn primary">
                            Télécharger mon CV
                        </a>

                        <a href="/portfolio" className="btn secondary">
                            Voir les projets
                        </a>
                    </div>
                </div>

                {/* Colonne droite */}
                <div className="hero-right">
                    <img src={portrait} alt="Vincent Leprêtre" />
                </div>
                <Footer />
            </section>

        </main>
    );
}
