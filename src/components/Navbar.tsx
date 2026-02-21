
import { useEffect, useState, type CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      rafId = window.requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 120, 1);
        setScrollProgress((prev) =>
          Math.abs(prev - progress) < 0.01 ? prev : progress
        );
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const navStyle = {
    "--nav-shadow-opacity": (scrollProgress * 0.12).toFixed(3),
    "--nav-inset-opacity": (scrollProgress * 0.6).toFixed(3),
    "--nav-bg-alpha": (scrollProgress * 0.5).toFixed(3),
  } as CSSProperties;

  return (
    <header className="navbar" style={navStyle}>
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo Vincent Lepretre" />
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/portfolio">
            Projets
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="nav-cta">
          Contactez-moi
        </NavLink>
      </div>
    </header>
  );
}
