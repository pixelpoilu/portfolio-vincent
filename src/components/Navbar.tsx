import { useEffect, useState, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const reduceMotion = useReducedMotion();
  const easingCurve: NonNullable<Transition["ease"]> = [0.22, 1, 0.36, 1];

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const navStyle = {
    "--nav-shadow-opacity": (scrollProgress * 0.12).toFixed(3),
    "--nav-inset-opacity": (scrollProgress * 0.6).toFixed(3),
    "--nav-bg-alpha": (scrollProgress * 0.8).toFixed(3),
  } as CSSProperties;

  const navItems = [
    { to: "/", label: "Accueil", end: true },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/etudes-de-cas", label: "Etude de cas" },
    { to: "/a-propos", label: "A propos" },
    { to: "/contact", label: "Contact" },
  ];

  const overlayTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: easingCurve };

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: easingCurve };

  return (
    <header className={`navbar${isHome ? " is-home" : ""}`} style={navStyle}>
      <div
        className={`menu-icon ${menuOpen ? "is-opened" : "is-closed"}`}
        onClick={() => setMenuOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setMenuOpen((open) => !open);
          }
        }}
        role="button"
        tabIndex={0}
        aria-pressed={menuOpen}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <div className="icon_span"></div>
        <svg x="0" y="0" width="54px" height="54px" viewBox="0 0 54 54">
          <path d="M16.500,27.000 C16.500,27.000 24.939,27.000 38.500,27.000 C52.061,27.000 49.945,15.648 46.510,11.367 C41.928,5.656 34.891,2.000 27.000,2.000 C13.193,2.000 2.000,13.193 2.000,27.000 C2.000,40.807 13.193,52.000 27.000,52.000 C40.807,52.000 52.000,40.807 52.000,27.000 C52.000,13.000 40.837,2.000 27.000,2.000"></path>
        </svg>
      </div>

      <div className="nav-container">
        <NavLink to="/" className="logo">
          <Logo className="home-logo" />
        </NavLink>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}

        </nav>
        <NavLink to="/contact" className="nav-cta">Contactez-moi</NavLink>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: overlayTransition }}
            exit={{ opacity: 0, transition: overlayTransition }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: panelTransition }}
              exit={{ y: 20, opacity: 0, transition: panelTransition }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mobile-nav-header">
                <NavLink to="/" className="mobile-nav-logo">
                  <Logo size={96} />
                </NavLink>
              </div>
              <motion.nav
                className="mobile-nav-links"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: reduceMotion
                      ? { duration: 0 }
                      : { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `mobile-nav-link${isActive ? " active" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

              <div className="mobile-nav-footer">
                <NavLink
                  to="/contact"
                  className="mobile-nav-cta"
                  onClick={() => setMenuOpen(false)}
                >
                  Contactez-moi
                </NavLink>
                <span className="mobile-nav-meta">Disponibilite 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
