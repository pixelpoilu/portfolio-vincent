import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import projectsData from "../data/project-prod.json";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import { selectedCaseStudies, type CaseStudyHighlight } from "../config/selectedCaseStudies";
import type { Project } from "../types/Project";
import { formatProjectTypes } from "../utils/projectType";
import { lazyImageProps, priorityImageProps } from "../utils/imageLoading";
import dilitrustCaseStudyImage from "../assets/images/projects/rea_web_dilitrust/manson_1_dilitrust.webp";
import docbikerCaseStudyImage from "../assets/images/projects/rea_web_docbiker/manson_1_docbiker.webp";
import locaboatCaseStudyImage from "../assets/images/projects/rea_web_locaboat/manson_1_locaboat.webp";

const caseStudyImageByProjectId = new Map<number, string>([
  [68, dilitrustCaseStudyImage],
  [60, docbikerCaseStudyImage],
  [50, locaboatCaseStudyImage],
]);

type ResolvedCaseStudy = CaseStudyHighlight & {
  project: Project;
  image: string | undefined;
  path: string;
};

function useResolvedCaseStudies() {
  return useMemo(() => {
    const projects = projectsData as Project[];

    return selectedCaseStudies
      .map((caseStudy) => {
        const project = projects.find((item) => item.id === caseStudy.id);
        if (!project) {
          return undefined;
        }

        return {
          ...caseStudy,
          project,
          image: caseStudyImageByProjectId.get(project.id),
          path: getDedicatedCaseStudyPathByProjectId(project.id) ?? "/etudes-de-cas",
        };
      })
      .filter((item): item is ResolvedCaseStudy => Boolean(item));
  }, []);
}

function RoundArrow() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-neutral-950 text-white transition group-hover:scale-105 group-hover:bg-neutral-800">
      <FaAngleRight aria-hidden="true" />
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,0.7fr)_minmax(280px,0.3fr)] md:items-end">
      <div className="grid gap-3">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-neutral-500">
          {eyebrow}
        </p>
        <h2
          className="max-w-4xl text-[clamp(2.35rem,5.4vw,5rem)] leading-[0.92] tracking-[-0.05em] text-neutral-950"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
        {copy}
      </p>
    </div>
  );
}

export default function CaseStudiesConcepts() {
  const caseStudies = useResolvedCaseStudies();

  return (
    <PageTransition>
      <div className="site-page bg-[#f5f2ec] text-neutral-950">
        <main className="mx-auto grid w-full max-w-[1440px] gap-20 px-4 pb-24 pt-28 sm:px-6 lg:px-10">
          <header className="grid gap-5 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,0.75fr)_minmax(260px,0.25fr)] md:items-end">
            <div className="grid gap-4">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.34em] text-neutral-500">
                Propositions de mise en page
              </p>
              <h1
                className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.055em]"
                style={{ fontFamily: "var(--font-hero)" }}
              >
                Plus court, plus calme, plus premium.
              </h1>
            </div>
            <p className="text-base leading-7 text-neutral-600">
              Trois directions possibles pour remplacer les grandes fiches actuelles
              par une lecture plus directe, visuelle et elegante.
            </p>
          </header>

          <section className="grid gap-8">
            <SectionTitle
              eyebrow="Proposition 01"
              title="Rail visuel premium."
              copy="Inspiree des exemples 01 et 03 : grandes images, tres peu de texte, un acces rapide au cas et une respiration plus luxe."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {caseStudies.map((caseStudy, index) => (
                <Link
                  key={caseStudy.project.id}
                  to={caseStudy.path}
                  className="group grid gap-4 text-neutral-950 no-underline visited:text-neutral-950"
                >
                  <span className="relative block aspect-[1.28] overflow-hidden rounded-lg bg-neutral-900">
                    {caseStudy.image ? (
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.project.title}
                        className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                        {...(index === 0 ? priorityImageProps : lazyImageProps)}
                      />
                    ) : null}
                    <span className="absolute inset-0 bg-linear-to-t from-black/42 via-black/0 to-black/0" />
                    <span className="absolute right-5 top-5">
                      <RoundArrow />
                    </span>
                    <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 text-white">
                      <span>
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/72">
                          {caseStudy.label}
                        </span>
                        <span
                          className="mt-2 block text-4xl leading-none tracking-[-0.045em]"
                          style={{ fontFamily: "var(--font-hero)" }}
                        >
                          {caseStudy.project.client}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="flex items-start justify-between gap-5">
                    <span className="grid gap-1">
                      <span className="text-xl tracking-[-0.04em]">
                        {caseStudy.project.title}
                      </span>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        {formatProjectTypes(caseStudy.project)}
                      </span>
                    </span>
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                      0{index + 1}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-8">
            <SectionTitle
              eyebrow="Proposition 02"
              title="Bande editoriale compacte."
              copy="Inspiree de l'exemple 02 : chaque cas devient une ligne tres tenue, avec un groupe d'images et un resume court."
            />

            <div className="divide-y divide-black/10 border-y border-black/10">
              {caseStudies.map((caseStudy, index) => (
                <Link
                  key={caseStudy.project.id}
                  to={caseStudy.path}
                  className="group grid gap-6 py-7 text-neutral-950 no-underline visited:text-neutral-950 md:grid-cols-[minmax(260px,0.44fr)_minmax(0,0.42fr)_auto] md:items-center"
                >
                  <span className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((offset) => (
                      <span
                        key={offset}
                        className="relative block aspect-[1.38] overflow-hidden rounded-lg bg-neutral-900"
                      >
                        {caseStudy.image ? (
                          <img
                            src={caseStudy.image}
                            alt=""
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : null}
                        <span
                          className={`absolute inset-0 bg-linear-to-br ${caseStudy.accent} opacity-${offset === 1 ? "30" : "15"}`}
                        />
                      </span>
                    ))}
                  </span>

                  <span className="grid gap-2">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-neutral-500">
                      0{index + 1} / {caseStudy.label}
                    </span>
                    <span
                      className="text-3xl leading-tight tracking-[-0.045em]"
                      style={{ fontFamily: "var(--font-hero)" }}
                    >
                      {caseStudy.project.client}
                    </span>
                    <span className="text-base leading-7 text-neutral-600">
                      {caseStudy.summary}
                    </span>
                  </span>

                  <span className="justify-self-start md:justify-self-end">
                    <RoundArrow />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-8">
            <SectionTitle
              eyebrow="Proposition 03"
              title="Grille magazine selective."
              copy="Une piste plus composee : un cas principal tres marque, deux cas secondaires plus silencieux, et les points forts reduits a une seule ligne."
            />

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)]">
              {caseStudies[0] ? (
                <Link
                  to={caseStudies[0].path}
                  className="group relative min-h-[520px] overflow-hidden rounded-lg bg-neutral-950 text-white no-underline visited:text-white"
                >
                  {caseStudies[0].image ? (
                    <img
                      src={caseStudies[0].image}
                      alt={caseStudies[0].project.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                      {...priorityImageProps}
                    />
                  ) : null}
                  <span className="absolute inset-0 bg-linear-to-t from-black/82 via-black/24 to-transparent" />
                  <span className="absolute right-6 top-6">
                    <RoundArrow />
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 grid gap-5 p-7 md:p-10">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/70">
                      Etude signature
                    </span>
                    <span
                      className="max-w-2xl text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.06em]"
                      style={{ fontFamily: "var(--font-hero)" }}
                    >
                      {caseStudies[0].project.client}
                    </span>
                    <span className="max-w-xl text-lg leading-7 text-white/78">
                      {caseStudies[0].summary}
                    </span>
                  </span>
                </Link>
              ) : null}

              <div className="grid gap-5">
                {caseStudies.slice(1).map((caseStudy, index) => (
                  <Link
                    key={caseStudy.project.id}
                    to={caseStudy.path}
                    className="group grid min-h-[250px] grid-cols-[130px_minmax(0,1fr)] overflow-hidden rounded-lg border border-black/8 bg-white text-neutral-950 no-underline shadow-[0_18px_48px_rgba(18,22,29,0.08)] visited:text-neutral-950 sm:grid-cols-[190px_minmax(0,1fr)]"
                  >
                    <span className="relative block overflow-hidden bg-neutral-900">
                      {caseStudy.image ? (
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.project.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          {...lazyImageProps}
                        />
                      ) : null}
                    </span>
                    <span className="grid content-between gap-5 p-5 md:p-7">
                      <span className="grid gap-3">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                          0{index + 2} / {caseStudy.label}
                        </span>
                        <span
                          className="text-4xl leading-none tracking-[-0.05em]"
                          style={{ fontFamily: "var(--font-hero)" }}
                        >
                          {caseStudy.project.client}
                        </span>
                        <span className="text-sm leading-6 text-neutral-600">
                          {caseStudy.strengths[0]}
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-4">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                          Voir le cas
                        </span>
                        <RoundArrow />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
