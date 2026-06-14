import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import type { Project } from "../types/Project";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import { formatProjectTypes } from "../utils/projectType";

const projectImageModules = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

const projectImageByFilename = new Map(
  Object.entries(projectImageModules).map(([path, image]) => [
    path.split("/").pop()?.trim() ?? "",
    image.default,
  ])
);

const resolveProjectImageSrc = (project: Project) => {
  const imageFilenames = [
    project.case_image,
    project.portfolio_image,
    project.masonry_0,
    project.image,
  ]
    .map((filename) => filename?.trim())
    .filter((filename): filename is string => Boolean(filename));

  const mediaPath = project.mediapath?.trim();
  for (const imageFilename of imageFilenames) {
    if (mediaPath) {
      const projectImagePath = `../assets/images/projects/${mediaPath}/${imageFilename}`;
      const projectImage = projectImageModules[projectImagePath]?.default;
      if (projectImage) {
        return projectImage;
      }
    }

    const directImage = projectImageByFilename.get(imageFilename);
    if (directImage) {
      return directImage;
    }

    const vignettePath = `../assets/images/projects/vignettes/${imageFilename}`;
    const vignetteImage = projectImageModules[vignettePath]?.default;
    if (vignetteImage) {
      return vignetteImage;
    }
  }

  return undefined;
};

type CaseStudyHighlight = {
  id: number;
  label: string;
  summary: string;
  strengths: string[];
  accent: string;
};

type ResolvedCaseStudy = CaseStudyHighlight & {
  project: Project;
  image: string | undefined;
  path: string;
};

const selectedCaseStudies: CaseStudyHighlight[] = [
  {
    id: 68,
    label: "Refonte SaaS",
    summary:
      "Une refonte pensée pour moderniser la perception de marque, clarifier l'offre et préserver le SEO.",
    strengths: [
      "Nouvelle direction UX/UI plus lisible et premium",
      "Template WordPress custom, contenus et trackers conservés",
      "Performance, SEO et expérience mobile intégrés au projet",
    ],
    accent: "from-[#0c1d43] via-[#174f8f] to-[#f0a51e]",
  },
  {
    id: 60,
    label: "Parcours e-commerce",
    summary:
      "Un site réorganisé autour de l'expérience client, la prise de rendez-vous et des contenus plus faciles à administrer.",
    strengths: [
      "Refonte UX centrée sur les services moto",
      "Back-office enrichi pour piloter les contenus",
      "SEO, catalogue et parcours client harmonisés",
    ],
    accent: "from-[#1b1715] via-[#b45f13] to-[#ffd23c]",
  },
  {
    id: 50,
    label: "Écosystème tourisme",
    summary:
      "Une collaboration longue pour faire évoluer le site, les contenus, le SEO et la réservation en ligne autour du voyage fluvial.",
    strengths: [
      "Refontes successives et stratégie éditoriale multilingue",
      "Passerelle de disponibilité reliée au système interne",
      "Brochures, modules et contenus touristiques connectés",
    ],
    accent: "from-[#2f7dbd] via-[#8dcf81] to-[#f2df80]",
  },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

export default function CaseStudies() {
  const caseStudies = useMemo(() => {
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
          image: resolveProjectImageSrc(project),
          path: getDedicatedCaseStudyPathByProjectId(project.id) ?? "/etudes-de-cas",
        };
      })
      .filter((item): item is ResolvedCaseStudy => Boolean(item));
  }, []);

  return (
    <PageTransition>
      <div className="site-page case-studies-page">
        <main className="bg-[#f6f3ee] text-neutral-950">
          <section className="mx-auto grid w-full max-w-295 gap-10 px-4 pb-20 pt-28 sm:px-6 md:pt-34">
            <motion.div
              {...reveal}
              className="grid gap-7 md:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.36fr)] md:items-end"
            >
              <div className="grid gap-5">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-neutral-500">
                  Études de cas
                </p>
                <h1
                  className="max-w-4xl text-[clamp(3.4rem,8vw,6.8rem)] leading-[0.9] tracking-[-0.05em]"
                  style={{ fontFamily: "var(--font-hero)" }}
                >
                  Trois projets, trois enjeux digitaux.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
                  Une sélection resserrée pour comprendre la démarche, les choix
                  de conception et les résultats : refonte SaaS, parcours client
                  et écosystème tourisme.
                </p>
              </div>

              <div className="rounded-lg border border-black/8 bg-white/70 p-5 shadow-[0_16px_44px_rgba(18,22,29,0.08)]">
                <span className="text-[3.4rem] font-semibold leading-none tracking-[-0.07em]">
                  {caseStudies.length}
                </span>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-neutral-500">
                  projets sélectionnés
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {caseStudies.map((caseStudy, index) => {
                const { project } = caseStudy;
                const isFeatured = index === 150;

                return (
                  <motion.article
                    key={project.id}
                    {...reveal}
                    transition={{
                      ...reveal.transition,
                      delay: index * 0.08,
                    }}
                    className={`group overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_18px_54px_rgba(18,22,29,0.08)] 
                      } grid lg:grid-cols-2 `}
                    style={{
                      "grid-template-columns": "236px auto",
                    }}
                  >
                    <Link
                      to={caseStudy.path}
                      className={`case-study-media-link relative block min-h-75 overflow-hidden bg-neutral-900 text-white visited:text-white ${isFeatured ? "lg:min-h-130" : "lg:min-h-95"
                        }  2xl:maxw-[236px]`}
                      aria-label={`Voir l'étude de cas ${project.client}`}
                    >
                      {caseStudy.image ? (
                        <img
                          src={caseStudy.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      ) : null}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${caseStudy.accent} opacity-35 mix-blend-screen`}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/78 via-black/28 to-transparent p-6 text-white md:p-8">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/72">
                          {caseStudy.label}
                        </p>
                        <h2
                          className="mt-3 text-4xl leading-[0.95] tracking-[-0.045em] md:text-6xl"
                          style={{ fontFamily: "var(--font-hero)" }}
                        >
                          {project.client}
                        </h2>
                      </div>
                    </Link>

                    <div className="grid content-between gap-8 p-6 md:p-8 lg:p-10">
                      <div className="grid gap-5">
                        <div className="flex flex-wrap gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                          <span>{formatProjectTypes(project)}</span>
                          <span>{project.secteur}</span>
                        </div>

                        <h3
                          className="text-3xl leading-tight tracking-[-0.04em] md:text-5xl"
                          style={{ fontFamily: "var(--font-hero)" }}
                        >
                          {project.title}
                        </h3>

                        <p className="text-base leading-8 text-neutral-600 md:text-lg">
                          {caseStudy.summary}
                        </p>

                        <div className="grid gap-3">
                          {caseStudy.strengths.map((strength, strengthIndex) => (
                            <div
                              key={strength}
                              className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-4 rounded-lg border border-black/6 bg-[#f8f7f4] p-4"
                            >
                              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
                                {String(strengthIndex + 1).padStart(2, "0")}
                              </span>
                              <p className="text-[0.98rem] leading-7 text-neutral-700">
                                {strength}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={caseStudy.path}
                        className="case-study-cta-link inline-flex w-fit 
                        items-center gap-3 rounded-full
                        ml-auto
                         bg-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em]

                         text-white transition
                         visited:text-white hover:bg-neutral-800 hover:text-white focus-visible:text-white"
                      >
                        Voir le cas
                        <FaAngleRight aria-hidden="true" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
