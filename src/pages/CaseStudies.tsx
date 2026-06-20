import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import projectsData from "../data/project-prod.json";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import {
  selectedCaseStudies,
  type CaseStudyHighlight,
} from "../config/selectedCaseStudies";
import type { Project } from "../types/Project";
import { formatProjectTypes } from "../utils/projectType";
import { priorityImageProps } from "../utils/imageLoading";

const caseStudyImageModules = import.meta.glob(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
) as Record<string, string>;

const caseStudyImageByFilename = new Map(
  Object.entries(caseStudyImageModules).map(([path, imageSrc]) => [
    path.split("/").pop()?.trim() ?? "",
    imageSrc,
  ]),
);

const getCaseImageFilenames = (project: Project) => {
  if (Array.isArray(project.case_image)) {
    return project.case_image;
  }

  return project.case_image ? [project.case_image] : [];
};

const resolveCaseImages = (project: Project) =>
  getCaseImageFilenames(project)
    .map((filename) => caseStudyImageByFilename.get(filename.trim()))
    .filter((imageSrc): imageSrc is string => Boolean(imageSrc));

type ResolvedCaseStudy = CaseStudyHighlight & {
  project: Project;
  images: string[];
  path: string;
};

function RoundArrow() {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-neutral-950 text-white transition duration-300 group-hover:scale-105 group-hover:bg-neutral-800">
      <FaAngleRight aria-hidden="true" />
    </span>
  );
}

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
          images: resolveCaseImages(project),
          path:
            getDedicatedCaseStudyPathByProjectId(project.id) ??
            "/etudes-de-cas",
        };
      })
      .filter((item): item is ResolvedCaseStudy => Boolean(item));
  }, []);

  return (
    <PageTransition>
      <div className="site-page case-studies-page bg-[#f5f2ec] text-neutral-950">
        <main className="mx-auto grid w-full max-w-[1440px] gap-12 px-4 pb-24 pt-28 sm:px-6 lg:px-10">
          <header className="case-study-reveal grid gap-5 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] md:items-end">
            <div className="grid gap-4">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.34em] text-neutral-500">
                Etudes de cas
              </p>
              <h1
                className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.055em]"
                style={{ fontFamily: "var(--font-hero)" }}
              >
                Trois projets, trois enjeux digitaux.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Une sélection courte pour comprendre la démarche, les choix de
              conception et les résultats sans alourdir la lecture.
            </p>
          </header>

          <section
            className="case-study-reveal divide-y divide-black/10 "
            style={{ animationDelay: "80ms" }}
          >
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
                      {caseStudy.images.length > 0 ? (
                        <img
                          src={
                            caseStudy.images[offset] ?? caseStudy.images[0]
                          }
                          alt={
                            offset === 0
                              ? caseStudy.project.title
                              : ""
                          }
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          {...(index === 0 && offset === 0
                            ? priorityImageProps
                            : { loading: "lazy" as const })}
                        />
                      ) : null}
                      <span
                        className={`absolute inset-0 bg-linear-to-br ${caseStudy.accent} ${offset === 1 ? "opacity-30" : "opacity-[0.15]"
                          }`}
                      />
                    </span>
                  ))}
                </span>

                <span className="grid gap-2">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-neutral-500">
                    0{index + 1} / {caseStudy.label}
                  </span>
                  <span
                    className="text-3xl leading-tight tracking-[-0.045em] md:text-4xl"
                    style={{ fontFamily: "var(--font-hero)" }}
                  >
                    {caseStudy.project.client}
                  </span>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    {formatProjectTypes(caseStudy.project)} /{" "}
                    {caseStudy.project.secteur}
                  </span>
                  <span className="max-w-2xl text-base leading-7 text-neutral-600">
                    {caseStudy.summary}
                  </span>
                </span>

                <span className="flex items-center justify-between gap-4 md:justify-self-end">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-400 md:hidden">
                    Voir le cas
                  </span>
                  <RoundArrow />
                </span>
              </Link>
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
