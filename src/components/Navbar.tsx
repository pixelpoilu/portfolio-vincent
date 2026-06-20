import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
//import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import Logo from "./Logo";
/*
const dilitrustCaseStudyPath =
  getDedicatedCaseStudyPathByProjectId(180) ?? "/etudes-de-cas";
*/
export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuRequestedOpen, setMenuRequestedOpen] = useState(false);
  const [menuOpenedPath, setMenuOpenedPath] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuOpen =
    menuRequestedOpen && menuOpenedPath === location.pathname;

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
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuRequestedOpen(false);
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
    { to: "/etudes-de-cas", label: "Études de cas", end: true },
  ];

  const closeMenu = () => setMenuRequestedOpen(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuRequestedOpen(false);
      return;
    }

    setMenuOpenedPath(location.pathname);
    setMenuRequestedOpen(true);
  };

  return (
    <header
      className={`navbar${isHome ? " is-home" : ""}${menuOpen ? " is-menu-open" : ""}`}
      style={navStyle}
    >
      <button
        type="button"
        className={`menu-icon ${menuOpen ? "is-opened" : "is-closed"}`}
        onClick={toggleMenu}
        aria-pressed={menuOpen}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <div className="icon_span"></div>
        <span className="menu-ring" aria-hidden="true" />
      </button>

      <div className="nav-container">
        <NavLink to="/" className="logo">
          <Logo className="nav-logo-mark" />
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
      {menuOpen && (
        <div
          className="mobile-nav-overlay"
          id="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeMenu}
        >
          <div
            className="mobile-nav-panel"
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <div className="mobile-nav-header">
              <NavLink to="/" className="mobile-nav-logo">
                <Logo size={96} />
              </NavLink>
            </div>
            <nav
              className="mobile-nav-links"
            >
              {navItems.map((item, index) => (
                <div
                  key={item.to}
                  className="mobile-nav-link-item"
                  style={{ "--mobile-nav-link-index": index } as CSSProperties}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mobile-nav-link${isActive ? " active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <NavLink
                to="/contact"
                className="mobile-nav-cta"
                onClick={closeMenu}
              >
                Contactez-moi
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
