import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/images/hero/portrait-bw.png";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import Footer from "./Footer";
import Logo from "./Logo";
import Loader from "./Loader";

const heroRoles = [
  "WEBMASTER FRONT UX/UI",
  "VISUAL PRODUCT DESIGNER",
  "DESIGNER D'INTERFACES",
];

const dilitrustCaseStudyPath =
  getDedicatedCaseStudyPathByProjectId(180) ?? "/etudes-de-cas";

export default function Home() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const year = new Date().getFullYear();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="home">
      <div className="home-top">
        <div className="logo">
          <Logo className="home-logo" />
        </div>
        <div className="home-year">{year}</div>
      </div>

      <section className="home-hero">
        <div className="hero-left">
          <h1>Vincent Leprêtre</h1>
          <span className="hero-role" aria-live="polite">
            <span className="hero-role-track">
              <AnimatePresence initial={false} mode="sync">
                <motion.span
                  key={heroRoles[activeRoleIndex]}
                  className="hero-role-text"
                  initial={{ clipPath: "inset(0 100% 0 0)", x: -18 }}
                  animate={{ clipPath: "inset(0 0 0 0)", x: 0 }}
                  exit={{ clipPath: "inset(0 0 0 100%)", x: 18 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {heroRoles[activeRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <div className="hero-divider" />
          <div className="hero-description">
            <p>
              Product Designer orienté UI, je conçois des interfaces claires, cohérentes et performantes, où vision, usage et exécution avancent ensemble.
            </p>
            <div className="recruiter-projects">
              <Link to={dilitrustCaseStudyPath}>DiliTrust</Link>
              <Link to="/portfolio/site-internet-doc-biker">DOC-BIKER</Link>
              <Link to="/etudes-de-cas/site-internet-locaboat">LOCABOAT</Link>
            </div>
          </div>
          <div className="hero-buttons">
            <a
              href="/cv.pdf"
              className="btn-flipB"
              data-back="Telecharger mon CV"
              data-front="Telecharger mon CV"
            />
            <a
              href="/portfolio"
              className="btn-flip"
              data-back="Voir mes projets"
              data-front="Voir mes projets"
            />
          </div>
        </div>

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
