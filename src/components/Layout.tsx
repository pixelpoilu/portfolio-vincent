import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Accueil</Link> |{" "}
          <Link to="/portfolio">Portfolio</Link> |{" "}
          <Link to="/etudes-de-cas">Etude de cas</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <small>\u00c2\u00a9 Portfolio \u00e2\u20ac\u201c React</small>
      </footer>
    </>
  );
}

