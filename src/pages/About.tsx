import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

export default function About() {
  return (
    <PageTransition>
      <div className="site-page about-page">
        <section className="about-section">
          <h1>A propos.</h1>
          <p className="about-intro">
            Designer & developpeur web, je cree des experiences digitales claires,
            elegantes et utiles pour les marques ambitieuses.
          </p>

          <p>
            Mon travail melange direction artistique, UX et developpement afin de
            construire des identites coherentes, des interfaces sur-mesure et des
            sites rapides.
          </p>

          <p>
            J aime collaborer avec des equipes exigeantes, explorer les details,
            et livrer des solutions qui tiennent dans le temps.
          </p>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
}
