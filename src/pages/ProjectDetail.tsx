import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { memo } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";
import projectsData from "../data/project-prod.json";
import type { Project, ProjectMedia } from "../types/Project";
import { slugifyTitle } from "../utils/slug";
import { hasCollection, type ProjectCollectionKey } from "../utils/projectCollection";
import { lazyImageProps, priorityImageProps } from "../utils/imageLoading";

const images = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,png,webp}",
  { eager: true }
);

const ProjectLongtext = memo(function ProjectLongtext({ html }: { html: string }) {
  return (
    <section
      className="project-longtext mx-auto mt-12 w-full max-w-295"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

function GalleryImage({
  src,
  alt,
  isPriority = false,
}: {
  src: string;
  alt: string;
  isPriority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="image-loader-overlay" aria-hidden="true">
          <Loader />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`block w-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        {...(isPriority ? priorityImageProps : lazyImageProps)}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const collectionKey: ProjectCollectionKey = location.pathname.startsWith("/etudes-de-cas")
    ? "case-study"
    : "portfolio";
  const isCaseStudy = collectionKey === "case-study";
  const listingBasePath = collectionKey === "case-study" ? "/etudes-de-cas" : "/portfolio";
  const backLabel = collectionKey === "case-study" ? "Retour aux etudes de cas" : "Retour aux projets";
  const projects = (projectsData as Project[]).filter(
    (project) => project.status === "published" && hasCollection(project, collectionKey)
  );

  const projectBySlug = projects.find((p) => slugifyTitle(p.title) === slug);
  const legacyId = Number(slug);
  const projectByLegacyId =
    Number.isInteger(legacyId) && legacyId > 0
      ? projects.find((p) => p.id === legacyId)
      : undefined;
  const project = projectBySlug ?? projectByLegacyId;

  if (!project) {
    return <Navigate to={listingBasePath} replace />;
  }

  return (
    <ProjectDetailContent
      key={`${collectionKey}-${project.id}`}
      project={project}
      isCaseStudy={isCaseStudy}
      listingBasePath={listingBasePath}
      backLabel={backLabel}
    />
  );
}

type ProjectDetailContentProps = {
  project: Project;
  isCaseStudy: boolean;
  listingBasePath: string;
  backLabel: string;
};

function ProjectDetailContent({
  project,
  isCaseStudy,
  listingBasePath,
  backLabel,
}: ProjectDetailContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!isCaseStudy);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const client = project.client?.trim();
  const description = project.description?.trim();
  const longtext = project.longtext?.trim();
  const contexte = project.Contexte?.trim();
  const reponse = project.Reponse?.trim();
  const missions = project.missions.filter((mission) => mission.trim() !== "");
  const technologies = project.technologies.filter(
    (technology) => technology.trim() !== ""
  );

  const galleryImages = project.medias
    .map((media) => {
      const mediaFile = typeof media === "string" ? media : media.file;
      const caption =
        typeof media === "string"
          ? undefined
          : (media as ProjectMedia).caption?.trim() || undefined;

      const path = `../assets/images/projects/${project.mediapath}/${mediaFile}`;
      const src = images[path]?.default;

      return src ? { src, caption } : null;
    })
    .filter(
      (media): media is { src: string; caption: string | undefined } => Boolean(media?.src)
    );

  const getProjectAsset = (file?: string) => {
    if (!file) {
      return "";
    }

    const normalizedFile = file.trim();
    if (!normalizedFile) {
      return "";
    }

    return (
      images[`../assets/images/projects/${normalizedFile}`]?.default ??
      images[`../assets/images/projects/${project.mediapath}/${normalizedFile}`]?.default ??
      ""
    );
  };

  const getProjectMediaAsset = (index: number) => {
    const media = project.medias[index];
    if (!media) {
      return "";
    }

    const mediaFile = typeof media === "string" ? media : media.file;
    if (!mediaFile) {
      return "";
    }

    return images[`../assets/images/projects/${project.mediapath}/${mediaFile}`]?.default ?? "";
  };

  const resolvedImage = getProjectAsset(project.image) || getProjectMediaAsset(0);
  const resolvedThumb = getProjectAsset(project.thumb) || resolvedImage;
  const resolvedMasonry0 = getProjectAsset(project.masonry_0) || resolvedImage;
  const resolvedMasonry1 = getProjectAsset(project.masonry_1) || resolvedMasonry0;

  const resolvedLongtext = longtext
    ?.replaceAll("{{image}}", resolvedImage)
    .replaceAll("{{thumb}}", resolvedThumb)
    .replaceAll("{{masonry_0}}", resolvedMasonry0)
    .replaceAll("{{masonry_1}}", resolvedMasonry1)
    .replace(/\{\{media:(\d+)\}\}/g, (_, index) => getProjectMediaAsset(Number(index)));

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isCaseStudy || !isPlaying || isHovered || galleryImages.length <= 1) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, isHovered, galleryImages.length, isCaseStudy]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const backButtonClassName =
    "inline-flex items-center justify-center gap-2 border border-[#222] px-4 py-3 text-xs uppercase tracking-[0.08em] text-[var(--mycolor-dark)] transition duration-300 hover:bg-[var(--mycolor-dark)] hover:text-[var(--mycolor-clear)]";
  const sliderButtonClassName =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-[30px] leading-none text-white backdrop-blur-xl transition hover:bg-black/70";
  const sliderControlClassName =
    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-lg leading-none text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-45";

  return (
    <PageTransition>
      <div className="site-page bg-(--bg)">
        <div className="sticky z-900 mt-2.5 mb-5 w-full border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,var(--nav-shadow-opacity,0)),inset_0_1px_0_rgba(255,255,255,var(--nav-inset-opacity,0))] top-18 max-[640px]:top-28">
          <div className="mx-auto flex w-[96%] max-w-287.5 justify-end py-2">
            <Link to={listingBasePath} className={backButtonClassName}>
              <span aria-hidden="true">‹‹</span>
              {backLabel}
            </Link>
          </div>
        </div>
        <main className="mx-auto w-full max-w-295 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mt-12">
            <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.04em] text-neutral-950">
              {project.title}
            </h1>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {galleryImages.length > 0 && (
                <>
                  <GalleryImage
                    key={`${project.id}-${currentIndex}-${galleryImages[currentIndex].src}`}
                    src={galleryImages[currentIndex].src}
                    alt={project.title}
                    isPriority={currentIndex === 0}
                  />
                  {galleryImages[currentIndex].caption && (
                    <p className="mt-2.5 text-center text-sm text-(--muted)">
                      {galleryImages[currentIndex].caption}
                    </p>
                  )}

                  <button
                    type="button"
                    className={`${sliderButtonClassName} left-5`}
                    onClick={prevSlide}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className={`${sliderButtonClassName} right-5`}
                    onClick={nextSlide}
                    aria-label="Image suivante"
                  >
                    ›
                  </button>

                  <div
                    className="mt-3.5 flex items-center justify-center gap-3"
                    role="group"
                    aria-label="Navigation du diaporama"
                  >
                    <button
                      type="button"
                      className={sliderControlClassName}
                      onClick={prevSlide}
                      disabled={galleryImages.length <= 1}
                      aria-label="Image précédente"
                    >
                      ‹
                    </button>
                    {!isCaseStudy && (
                      <button
                        type="button"
                        className={sliderControlClassName}
                        onClick={togglePlay}
                        disabled={galleryImages.length <= 1}
                        aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                      >
                        {isPlaying ? "\u275a\u275a" : "\u25b6"}
                      </button>
                    )}
                    <button
                      type="button"
                      className={sliderControlClassName}
                      onClick={nextSlide}
                      disabled={galleryImages.length <= 1}
                      aria-label="Image suivante"
                    >
                      ›
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="lg:sticky lg:top-30">
              <h2 className="text-[32px] leading-tight tracking-[-0.03em] text-neutral-950">
                {project.title}
              </h2>

              {client && <p className="mt-2 mb-8 text-[0.95rem] text-(--muted)">{client}</p>}

              {description && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.2rem] text-[#808080]">
                    Description
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-black">{description}</p>
                </>
              )}

              {contexte && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.2rem] text-[#808080]">
                    Contexte
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-black">{contexte}</p>
                </>
              )}

              {reponse && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.2rem] text-[#808080]">
                    Reponse
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-black">{reponse}</p>
                </>
              )}

              {missions.length > 0 && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.2rem] text-[#808080]">
                    Missions
                  </h3>
                  <ul className="mt-2 list-disc pl-4.5">
                    {missions.map((mission, index) => (
                      <li key={index} className="mb-2 text-[15px] text-black">
                        {mission}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {technologies.length > 0 && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-[0.2rem] text-[#808080]">
                    Technologies
                  </h3>
                  <ul
                    className="mt-3 flex flex-wrap gap-2.5"
                    aria-label="Technologies utilisees"
                  >
                    {technologies.map((technology) => (
                      <li
                        key={technology}
                        className="inline-flex items-center rounded-full border border-[#c8c8c8] bg-[#e6e6e6] px-4 py-1.5 text-[0.85rem] font-medium leading-none text-[#2f2f2f] transition duration-200 hover:-translate-y-px hover:border-[#b8b8b8] hover:bg-[#f0f0f0] hover:shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {resolvedLongtext && <ProjectLongtext html={resolvedLongtext} />}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
