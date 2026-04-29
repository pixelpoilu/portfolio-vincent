import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

export default function About() {
  return (
    <PageTransition>
      <div className="site-page">
        <section className="mx-auto grid w-full max-w-[1100px] gap-6 px-6 py-12 md:gap-8 md:px-8 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            A propos
          </p>
          <h1 className="max-w-3xl text-[clamp(2.4rem,6vw,4.75rem)] leading-[0.92] tracking-[-0.05em] text-neutral-950">
            Designer et developpeur web, entre clart&eacute;, execution et details.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-neutral-700 md:text-xl">
            Designer & developpeur web, je cree des experiences digitales claires,
            elegantes et utiles pour les marques ambitieuses.
          </p>

          <p className="max-w-3xl text-base leading-8 text-neutral-700 md:text-lg">
            Mon travail melange direction artistique, UX et developpement afin de
            construire des identites coherentes, des interfaces sur-mesure et des
            sites rapides.
          </p>

          <p className="max-w-3xl text-base leading-8 text-neutral-700 md:text-lg">
            J aime collaborer avec des equipes exigeantes, explorer les details,
            et livrer des solutions qui tiennent dans le temps.
          </p>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
}
