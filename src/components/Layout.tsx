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
        <small>&copy; Portfolio - React</small>
      </footer>
    </>
  );
}

