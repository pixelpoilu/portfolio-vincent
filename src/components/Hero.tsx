import portrait from "../assets/images/hero/portrait-bw.png";
import Footer from "./Footer";
import logo from "../assets/logo.svg";
import { ArrowRight } from "./icons";

export default function Home() {
  return (
    <main className="home">
      {/* Header minimal */}
      <div className="home-top">
        <div className="logo">
          <img src={logo} alt="Logo Vincent Lepretre" />
        </div>
        <div className="home-year">2026</div>
      </div>

      {/* Hero principal */}
      <section className="home-hero">
        {/* Colonne gauche */}
        <div className="hero-left">
          <h1>Vincent Lepretre</h1>
          <span className="hero-role">WEBMASTER</span>
          <div className="hero-divider" />

          <p className="hero-description">
            Developpeur frontend oriente UX/UI
            Je concois des interfaces claires, structurees et pensees comme des produits.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" className="btn primary">
              Telecharger mon CV
            </a>

            <a href="/portfolio" className="btn secondary">
              <ArrowRight width={14} height={14} />
              Voir les projets
            </a>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="hero-right">
          <img src={portrait} alt="Vincent Lepretre" />
        </div>
        <Footer />
      </section>
    </main>
  );
}
