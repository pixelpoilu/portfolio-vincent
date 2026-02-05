export default function Navbar() {
  return (
    <header className="navbar">
      <h2>Vincent Lepretre</h2>

      <nav className="nav-links">
        <a href="/">Accueil</a>
        <a href="/projects">Projets</a>
        <a href="/contact">Contact</a>

        <a className="nav-btn" href="/contact">
          Contactez-moi
        </a>
      </nav>
    </header>
  );
}
