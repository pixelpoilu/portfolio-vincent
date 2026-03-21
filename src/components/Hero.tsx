import { useState } from "react";
import portrait from "../assets/images/hero/portrait-bw.png";
import Footer from "./Footer";
import { ArrowRight } from "./icons";
import Logo from "./Logo";
import Loader from "./Loader";

export default function Home() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);

  return (
    <main className="home">
      {/* Header minimal */}
      <div className="home-top">
        <div className="logo">
          <Logo className="home-logo" />
        </div>
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
            Développeur frontend orienté UX/UI, je conçois des interfaces claires, structurées et pensées comme des produits.
          </p>

          <div className="hero-buttons">
            {/* anciens boutons 
            <a href="/cv.pdf" className="btn primary">
              Telecharger mon CV
            </a>
            <a href="#" class="btn-flip" data-back="Back" data-front="Front"></a>
            <a href="/portfolio" className="btn secondary" >
              <ArrowRight width={14} height={14} /> Voir mes projets
              
            </a>
  anciens boutons */}
            <a href="/cv.pdf" className="btn-flipB" data-back="Telecharger mon CV" data-front="Telecharger mon CV"></a>
            <a href="/portfolio" className="btn-flip" data-back="Voir mes projets" data-front="Voir mes projets"></a>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="hero-right">
          {!isPortraitLoaded && (
            <div className="image-loader-overlay" aria-hidden="true">
              <Loader />
            </div>
          )}
          <img
            src={portrait}
            alt="Vincent Lepretre"
            className={isPortraitLoaded ? "is-loaded" : "is-loading"}
            onLoad={() => setIsPortraitLoaded(true)}
            onError={() => setIsPortraitLoaded(true)}
          />
        </div>
        <Footer />
      </section>
    </main>
  );
}
