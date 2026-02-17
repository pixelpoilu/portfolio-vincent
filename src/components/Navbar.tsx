
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo Vincent Lepret" />
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/projects">
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