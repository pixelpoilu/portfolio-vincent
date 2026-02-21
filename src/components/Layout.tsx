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
          <Link to="/portfolio">Projets</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <small>© Portfolio – React</small>
      </footer>
    </>
  );
}
