import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import FilterBar from "../components/FilterBar";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import type { Project, ProjectMedia } from "../types/Project";
import { hasCollection, type ProjectCollectionKey } from "../utils/projectCollection";
import { slugifyTitle } from "../utils/slug";
import {
  IoMdClose,
  IoIosPlay,
  IoIosPause,
  IoIosVolumeHigh,
  IoIosVolumeOff,
} from "react-icons/io";
const masonryTestImageModules = import.meta.glob<{ default: string }>(
  "../assets/images/mansonery_test/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);
const masonryTestImages = Object.entries(masonryTestImageModules)
  .sort(([a], [b]) => a.localeCompare(b, "fr", { sensitivity: "base" }))
  .map(([, image]) => image.default);

const projectImageModules = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

const projectVideoModules = import.meta.glob<string>(
  "../assets/images/projects/**/*.mp4",
  { eager: true, import: "default" }
);
const resolveMediaSrc = (moduleEntry: unknown) => {
  if (typeof moduleEntry === "string") {
    return moduleEntry;
  }

  return (moduleEntry as { default?: string } | undefined)?.default;
};
const masonryImageByFilename = new Map(
  Object.entries(projectImageModules).map(([path, image]) => [
    path.split("/").pop()?.trim() ?? "",
    image.default,
  ])
);

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const sortAlphabetically = (values: string[]) =>
  [...values].sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

type SlideshowSlide = {
  src: string;
  caption?: string;
  kind: "image" | "video";
};

interface ProjectsProps {
  collectionKey?: ProjectCollectionKey;
  detailBasePath?: "/portfolio" | "/etudes-de-cas";
}

export default function Projects({
  collectionKey = "portfolio",
  detailBasePath = "/portfolio",
}: ProjectsProps) {
  const navigate = useNavigate();
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [slideshowProject, setSlideshowProject] = useState<Project | null>(null);
  const [slideshowSlides, setSlideshowSlides] = useState<SlideshowSlide[]>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSlideshowThumbLoaded, setIsSlideshowThumbLoaded] = useState(false);
  const [isSlideImageLoaded, setIsSlideImageLoaded] = useState(false);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<1 | -1>(1);
  const isSlideshowOpen = slideshowProject !== null;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const publishedProjects = useMemo(() => {
    const projects = projectsData as Project[];
    return projects.filter(
      (project) =>
        project.status === "published" && hasCollection(project, collectionKey)
    );
  }, [collectionKey]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    publishedProjects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return sortAlphabetically(Array.from(techSet));
  }, [publishedProjects]);

  const allTools = useMemo(() => {
    const toolSet = new Set<string>();
    publishedProjects.forEach((project) => {
      project.outils.forEach((tool) => toolSet.add(tool));
    });
    return sortAlphabetically(Array.from(toolSet));
  }, [publishedProjects]);

  const allTypes = useMemo(() => {
    const typeSet = new Set<string>();
    publishedProjects.forEach((project) => {
      typeSet.add(project.type);
    });
    return sortAlphabetically(Array.from(typeSet));
  }, [publishedProjects]);

  const allSectors = useMemo(() => {
    const sectorSet = new Set<string>();
    publishedProjects.forEach((project) => {
      sectorSet.add(project.secteur);
    });
    return sortAlphabetically(Array.from(sectorSet));
  }, [publishedProjects]);

  const availableTypes = useMemo(
    () =>
      allTypes.filter((type) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesTool && matchesSector && project.type === type;
        })
      ),
    [allTypes, publishedProjects, selectedTechnologies, selectedTools, selectedSectors]
  );

  const availableSectors = useMemo(
    () =>
      allSectors.filter((sector) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(project.type);
          return matchesTech && matchesTool && matchesType && project.secteur === sector;
        })
      ),
    [allSectors, publishedProjects, selectedTechnologies, selectedTools, selectedTypes]
  );

  const availableTechnologies = useMemo(
    () =>
      allTechnologies.filter((technology) =>
        publishedProjects.some((project) => {
          const matchesTool =
            selectedTools.length === 0 ||
            selectedTools.some((tool) => project.outils.includes(tool));
          const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(project.type);
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return (
            matchesTool &&
            matchesType &&
            matchesSector &&
            project.technologies.includes(technology)
          );
        })
      ),
    [allTechnologies, publishedProjects, selectedTools, selectedTypes, selectedSectors]
  );

  const availableTools = useMemo(
    () =>
      allTools.filter((tool) =>
        publishedProjects.some((project) => {
          const matchesTech =
            selectedTechnologies.length === 0 ||
            selectedTechnologies.some((tech) => project.technologies.includes(tech));
          const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(project.type);
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesType && matchesSector && project.outils.includes(tool);
        })
      ),
    [allTools, publishedProjects, selectedTechnologies, selectedTypes, selectedSectors]
  );

  useEffect(() => {
    setSelectedTypes((current) => {
      const next = current.filter((type) => availableTypes.includes(type));
      return next.length === current.length ? current : next;
    });
  }, [availableTypes]);

  useEffect(() => {
    setSelectedSectors((current) => {
      const next = current.filter((sector) => availableSectors.includes(sector));
      return next.length === current.length ? current : next;
    });
  }, [availableSectors]);

  useEffect(() => {
    setSelectedTechnologies((current) => {
      const next = current.filter((technology) =>
        availableTechnologies.includes(technology)
      );
      return next.length === current.length ? current : next;
    });
  }, [availableTechnologies]);

  useEffect(() => {
    setSelectedTools((current) => {
      const next = current.filter((tool) => availableTools.includes(tool));
      return next.length === current.length ? current : next;
    });
  }, [availableTools]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);

    return publishedProjects
      .filter((project) => {
        const matchesTech =
          selectedTechnologies.length === 0 ||
          selectedTechnologies.some((tech) => project.technologies.includes(tech));

        const matchesTool =
          selectedTools.length === 0 ||
          selectedTools.some((tool) => project.outils.includes(tool));

        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(project.type);

        const matchesSector =
          selectedSectors.length === 0 || selectedSectors.includes(project.secteur);

        if (!matchesTech || !matchesTool || !matchesType || !matchesSector) {
          return false;
        }

        if (normalizedQuery === "") {
          return true;
        }

        const searchableContent = [
          project.title,
          project.client,
          project.type,
          project.secteur,
          project.description,
          project.outils.join(" "),
          project.technologies.join(" "),
        ]
          .filter(Boolean)
          .join(" ");

        return normalizeText(searchableContent).includes(normalizedQuery);
      })
      .sort((a, b) => {
        const orderA = Number.isFinite(a.order) ? a.order : Number.NEGATIVE_INFINITY;
        const orderB = Number.isFinite(b.order) ? b.order : Number.NEGATIVE_INFINITY;
        return orderB - orderA;
      });
  }, [
    publishedProjects,
    selectedTechnologies,
    selectedTools,
    selectedTypes,
    selectedSectors,
    searchQuery,
  ]);

  const resolveProjectSlides = useCallback((project: Project): SlideshowSlide[] => {
    return project.medias.reduce<SlideshowSlide[]>((slides, media) => {
      const mediaFile = (typeof media === "string" ? media : media.file).trim();
      if (!mediaFile) {
        return slides;
      }
      const mediaPath = `../assets/images/projects/medias/${project.mediapath}/${mediaFile}`;
      const isVideo = mediaFile.toLowerCase().endsWith(".mp4");
      const mediaModules = isVideo ? projectVideoModules : projectImageModules;
      const src = resolveMediaSrc(mediaModules[mediaPath]);

      if (!src) {
        return slides;
      }

      const slide: SlideshowSlide = {
        src,
        kind: isVideo ? "video" : "image",
      };

      if (typeof media === "string") {
        slides.push(slide);
        return slides;
      }

      const caption = (media as ProjectMedia).caption?.trim();
      slides.push(caption ? { ...slide, caption } : slide);
      return slides;
    }, []);
  }, []);

  const goToNextSlide = useCallback(() => {
    setTransitionDirection(1);
    setActiveSlideIndex((current) =>
      current >= slideshowSlides.length - 1 ? 0 : current + 1
    );
  }, [slideshowSlides.length]);

  const goToPreviousSlide = useCallback(() => {
    setTransitionDirection(-1);
    setActiveSlideIndex((current) =>
      current <= 0 ? slideshowSlides.length - 1 : current - 1
    );
  }, [slideshowSlides.length]);

  const toggleVideoMute = useCallback(() => {
    setIsVideoMuted((current) => {
      const next = !current;
      const video = videoRef.current;
      if (video) {
        video.muted = next;
        if (!next) {
          video.volume = 1;
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => { });
          }
        }
      }
      return next;
    });
  }, []);

  const closeSlideshow = useCallback(() => {
    setSlideshowProject(null);
    setSlideshowSlides([]);
    setActiveSlideIndex(0);
    setIsSlideshowPlaying(false);
    setIsVideoMuted(false);
  }, []);

  const openProjectSlideshow = useCallback(
    (project: Project) => {
      const slides = resolveProjectSlides(project);

      if (slides.length === 0) {
        navigate(`${detailBasePath}/${slugifyTitle(project.title)}`);
        return;
      }

      setSlideshowProject(project);
      setSlideshowSlides(slides);
      setActiveSlideIndex(0);
      setIsSlideshowPlaying(false);
      setIsVideoMuted(false);
      setTransitionDirection(1);
    },
    [detailBasePath, navigate, resolveProjectSlides]
  );
  const requestVideoPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = isVideoMuted;
    if (!isVideoMuted) {
      video.volume = 1;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch((error) => {
        const errorName =
          typeof error === "object" && error !== null && "name" in error
            ? (error as { name?: string }).name
            : "";
        if (errorName !== "NotAllowedError") {
          return;
        }
        if (video.muted) {
          return;
        }
        video.muted = true;
        setIsVideoMuted(true);
        const fallbackPromise = video.play();
        if (fallbackPromise && typeof fallbackPromise.catch === "function") {
          fallbackPromise.catch(() => { });
        }
      });
    }
  }, [isVideoMuted]);

  useEffect(() => {
    if (!isSlideshowOpen || !isSlideshowPlaying || slideshowSlides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setTransitionDirection(1);
      setActiveSlideIndex((current) =>
        current >= slideshowSlides.length - 1 ? 0 : current + 1
      );
    }, 4200);

    return () => clearInterval(timer);
  }, [isSlideshowOpen, isSlideshowPlaying, slideshowSlides.length]);

  useEffect(() => {
    if (!isSlideshowOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSlideshowOpen]);

  useEffect(() => {
    if (!isSlideshowOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSlideshow();
        return;
      }

      if (event.key === "ArrowRight") {
        goToNextSlide();
        return;
      }

      if (event.key === "ArrowLeft") {
        goToPreviousSlide();
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        setIsSlideshowPlaying((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeSlideshow, goToNextSlide, goToPreviousSlide, isSlideshowOpen]);

  const currentSlide = slideshowSlides[activeSlideIndex];
  const slideshowThumbSrc = useMemo(() => {
    if (!slideshowProject) {
      return undefined;
    }

    const thumbFilename = slideshowProject.thumb?.trim();
    if (thumbFilename) {
      const thumbImage = masonryImageByFilename.get(thumbFilename);
      if (thumbImage) {
        return thumbImage;
      }
    }

    const masonryFilename = slideshowProject.masonry_0?.trim();
    if (!masonryFilename) {
      return undefined;
    }

    return masonryImageByFilename.get(masonryFilename);
  }, [slideshowProject]);
  useEffect(() => {
    setIsSlideshowThumbLoaded(false);
  }, [slideshowThumbSrc, slideshowProject?.id]);

  useEffect(() => {
    setIsSlideImageLoaded(false);
  }, [currentSlide?.src, activeSlideIndex, slideshowProject?.id]);

  useEffect(() => {
    if (currentSlide?.kind !== "video") {
      return;
    }

    requestVideoPlayback();
  }, [currentSlide?.kind, currentSlide?.src, requestVideoPlayback]);
  const slideMotion = {
    initial: { opacity: 0, x: transitionDirection * 140 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: transitionDirection * -140 },
  };

  const introText =
    collectionKey === "portfolio"
      ? "Découvrez une sélection de projets sur-mesure, conçus pour des marques qui veulent se distinguer."
      : "Plongez dans les études de cas pour comprendre la démarche, les choix et les résultats.";

  return (
    <PageTransition>
      <div className="site-page">
        <FilterBar
          sectors={availableSectors}
          types={availableTypes}
          tools={availableTools}
          technologies={availableTechnologies}
          activeSectors={selectedSectors}
          activeTypes={selectedTypes}
          activeTools={selectedTools}
          activeTechs={selectedTechnologies}
          searchQuery={searchQuery}
          onSectorChange={setSelectedSectors}
          onTypeChange={setSelectedTypes}
          onToolChange={setSelectedTools}
          onTechChange={setSelectedTechnologies}
          onSearchChange={setSearchQuery}
          projectsCount={filteredProjects.length}
          introText={introText}
        />

        <section className="projects-section">


          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ProjectCard
                    project={project}
                    detailBasePath={detailBasePath}
                    onCardClick={
                      collectionKey === "portfolio" ? openProjectSlideshow : undefined
                    }
                    thumbnailOverride={(() => {
                      const masonryFilename =
                        (index % 2 === 0 ? project.masonry_0 : project.masonry_1)?.trim();
                      if (masonryFilename) {
                        const masonryImage = masonryImageByFilename.get(masonryFilename);
                        if (masonryImage) {
                          return masonryImage;
                        }
                      }

                      return masonryTestImages.length > 0
                        ? masonryTestImages[project.id % masonryTestImages.length]
                        : undefined;
                    })()}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
        {createPortal(
          <AnimatePresence>
            {isSlideshowOpen && slideshowProject && currentSlide && (
              <motion.div
                className="portfolio-slideshow-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeSlideshow}
              >
                <motion.div
                  className="portfolio-slideshow-shell"
                  initial={{ opacity: 0, y: 20, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.985 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="portfolio-slideshow-topbar">
                    <div className="portfolio-slideshow-meta">
                      <div className="portfolio-slideshow-project">
                        {slideshowThumbSrc ? (
                          <>
                            {!isSlideshowThumbLoaded && (
                              <div className="image-loader-overlay" aria-hidden="true">
                                <Loader />
                              </div>
                            )}
                            <img
                              className={`portfolio-slideshow-thumb ${isSlideshowThumbLoaded ? "is-loaded" : "is-loading"}`}
                              src={slideshowThumbSrc}
                              alt={`Vignette ${slideshowProject.title}`}
                              onLoad={() => setIsSlideshowThumbLoaded(true)}
                              onError={() => setIsSlideshowThumbLoaded(true)}
                            />
                          </>
                        ) : (
                          <div className="portfolio-slideshow-thumb-fallback" aria-hidden="true" />
                        )}
                        <div className="portfolio-slideshow-meta-text">
                          <h2>{slideshowProject.title}</h2>
                          <p className="portfolio-slideshow-sector">{slideshowProject.secteur}</p>
                          {slideshowProject.description?.trim() && (
                            <p className="portfolio-slideshow-description">
                              {slideshowProject.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-slideshow-controls">
                      <span className="muted">
                        {activeSlideIndex + 1}/{slideshowSlides.length}
                      </span>
                      <button
                        type="button"
                        className="portfolio-overlay-btn"
                        onClick={() => setIsSlideshowPlaying((current) => !current)}
                        disabled={slideshowSlides.length <= 1}
                      >
                        {isSlideshowPlaying ? <IoIosPause /> : <IoIosPlay />}
                      </button>
                      <button
                        type="button"
                        className="portfolio-overlay-btn"
                        onClick={toggleVideoMute}
                        disabled={currentSlide?.kind !== "video"}
                        aria-pressed={!isVideoMuted}
                        aria-label={isVideoMuted ? "Activer le son" : "Couper le son"}
                      >
                        {isVideoMuted ? <IoIosVolumeOff /> : <IoIosVolumeHigh />}
                      </button>
                      <button
                        type="button"
                        className="portfolio-overlay-btn danger"
                        onClick={closeSlideshow}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>

                  <div className="portfolio-slideshow-stage">
                    <button
                      type="button"
                      className="portfolio-nav-btn prev"
                      onClick={goToPreviousSlide}
                      disabled={slideshowSlides.length <= 1}
                      aria-label="Image precedente"
                    >
                      &lsaquo;
                    </button>

                    <AnimatePresence mode="wait" initial={false}>
                      <motion.figure
                        key={`${currentSlide.src}-${activeSlideIndex}`}
                        className="portfolio-slideshow-figure"
                        initial={slideMotion.initial}
                        animate={slideMotion.animate}
                        exit={slideMotion.exit}
                        transition={{ duration: 0.42, ease: "easeOut" }}
                      >
                        {!isSlideImageLoaded && (
                          <div className="image-loader-overlay" aria-hidden="true">
                            <Loader />
                          </div>
                        )}
                        {currentSlide.kind === "video" ? (
                          <video controls
                            ref={videoRef}
                            className={isSlideImageLoaded ? "is-loaded" : "is-loading"}
                            autoPlay
                            muted={isVideoMuted}
                            loop
                            playsInline
                            preload="auto"
                            onLoadedMetadata={() => {
                              setIsSlideImageLoaded(true);
                              requestVideoPlayback();
                            }}
                            onError={() => setIsSlideImageLoaded(true)}
                          >
                            <source src={currentSlide.src} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={currentSlide.src}
                            alt={slideshowProject.title}
                            className={isSlideImageLoaded ? "is-loaded" : "is-loading"}
                            onLoad={() => setIsSlideImageLoaded(true)}
                            onError={() => setIsSlideImageLoaded(true)}
                          />
                        )}
                        {currentSlide.caption && (
                          <figcaption>{currentSlide.caption}</figcaption>
                        )}
                      </motion.figure>
                    </AnimatePresence>

                    <button
                      type="button"
                      className="portfolio-nav-btn next"
                      onClick={goToNextSlide}
                      disabled={slideshowSlides.length <= 1}
                      aria-label="Image suivante"
                    >
                      &rsaquo;
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
        <Footer />
      </div>
    </PageTransition>
  );
}
