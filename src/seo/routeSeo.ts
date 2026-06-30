import projectsData from "../data/project-prod.json";
import type { Project } from "../types/Project";

export const SITE_URL = "https://portfolio.vincent-lepretre.fr";
export const SITE_NAME = "Portfolio de Vincent Leprêtre";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  imageAssetPath?: string;
  openGraphType: "website" | "article";
};

const dedicatedCaseStudySlugs = new Map<number, string>([
  [68, "refonte-du-site-web-dilitrust"],
  [60, "site-internet-doc-biker"],
  [50, "site-internet-locaboat"],
]);

const staticSeoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Vincent Leprêtre — UX/UI design & web expertise",
    description:
      "Portfolio de Vincent Leprêtre, Senior UX/UI designer & web expert : études de cas, interfaces et projets digitaux.",
    openGraphType: "website",
  },
  {
    path: "/portfolio",
    title: "Portfolio UX/UI et projets web | Vincent Leprêtre",
    description:
      "Découvrez les projets UX/UI, sites web, interfaces, campagnes digitales et expériences interactives réalisés par Vincent Leprêtre.",
    openGraphType: "website",
  },
  {
    path: "/etudes-de-cas",
    title: "Études de cas UX/UI et web | Vincent Leprêtre",
    description:
      "Explorez des études de cas détaillées : problématiques, démarche UX/UI, choix de conception, réalisation et résultats.",
    openGraphType: "website",
  },
  {
    path: "/etudes-de-cas-propositions",
    title: "Concepts d’études de cas | Vincent Leprêtre",
    description:
      "Découvrez plusieurs propositions de présentation pour les études de cas UX/UI et les projets digitaux de Vincent Leprêtre.",
    openGraphType: "website",
  },
  {
    path: "/contact",
    title: "Contact — Vincent Leprêtre, Senior UX/UI designer & web expert",
    description:
      "Contactez Vincent Leprêtre pour une opportunité en Product Design, UX/UI, webmastering ou développement front-end.",
    openGraphType: "website",
  },
];

export const slugifyTitle = (title: string) =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const belongsTo = (project: Project, collection: string) =>
  Array.isArray(project.collection)
    ? project.collection.includes(collection)
    : project.collection === collection;

const cleanText = (value?: string) =>
  value
    ?.replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim() ?? "";

const truncateDescription = (value: string, maximumLength = 160) => {
  if (value.length <= maximumLength) {
    return value;
  }

  const shortened = value.slice(0, maximumLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 100 ? lastSpace : shortened.length)}…`;
};

const getProjectImageAssetPath = (project: Project, preferCaseImage: boolean) => {
  const caseImage = Array.isArray(project.case_image)
    ? project.case_image[0]
    : project.case_image;
  const filename =
    (preferCaseImage ? caseImage : project.portfolio_image) ??
    project.portfolio_image ??
    caseImage ??
    project.image ??
    project.masonry_0;

  return filename
    ? `./assets/images/projects/${project.mediapath}/${filename.trim()}`
    : undefined;
};

const getProjectDescription = (project: Project, context: "portfolio" | "case-study") => {
  const projectDescription = cleanText(project.description);
  const prefix =
    context === "case-study"
      ? `Étude de cas ${project.title} pour ${project.client}.`
      : `Projet ${project.title} pour ${project.client}.`;
  const details = projectDescription
    ? projectDescription
    : `Conception digitale dans le secteur ${project.secteur}.`;

  return truncateDescription(`${prefix} ${details}`);
};

const publishedProjects = (projectsData as Project[]).filter(
  (project) => project.status === "published",
);

const portfolioSeoRoutes: SeoRoute[] = publishedProjects
  .filter((project) => belongsTo(project, "portfolio"))
  .map((project) => ({
    path: `/portfolio/${slugifyTitle(project.title)}`,
    title: `${project.title} — ${project.client} | Vincent Leprêtre`,
    description: getProjectDescription(project, "portfolio"),
    imageAssetPath: getProjectImageAssetPath(project, false),
    openGraphType: "article",
  }));

const caseStudySeoRoutes: SeoRoute[] = publishedProjects
  .filter((project) => belongsTo(project, "case-study"))
  .map((project) => ({
    path: `/etudes-de-cas/${
      dedicatedCaseStudySlugs.get(project.id) ?? slugifyTitle(project.title)
    }`,
    title: `${project.title} — Étude de cas | Vincent Leprêtre`,
    description: getProjectDescription(project, "case-study"),
    imageAssetPath: getProjectImageAssetPath(project, true),
    openGraphType: "article",
  }));

export const seoRoutes = [
  ...staticSeoRoutes,
  ...portfolioSeoRoutes,
  ...caseStudySeoRoutes,
];

const seoByPath = new Map(seoRoutes.map((route) => [route.path, route]));

export const normalizePathname = (pathname: string) => {
  const withoutTrailingSlashes = pathname.replace(/\/+$/, "");
  return withoutTrailingSlashes || "/";
};

export const getSeoRoute = (pathname: string) =>
  seoByPath.get(normalizePathname(pathname));

export const getCanonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

export const getPrerenderPaths = () => seoRoutes.map((route) => route.path);
