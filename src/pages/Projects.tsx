import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type MouseEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import FilterBar from "../components/FilterBar";
import projectsData from "../data/project-prod.json";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import type { Project, ProjectMedia } from "../types/Project";
import { hasCollection, type ProjectCollectionKey } from "../utils/projectCollection";
import { getProjectPath } from "../utils/projectPaths";
import { getProjectTypes, projectHasType } from "../utils/projectType";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import { selectedCaseStudies } from "../config/selectedCaseStudies";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosPlay } from "@react-icons/all-files/io/IoIosPlay";
import { IoIosPause } from "@react-icons/all-files/io/IoIosPause";
import { IoIosVolumeHigh } from "@react-icons/all-files/io/IoIosVolumeHigh";
import { IoIosVolumeOff } from "@react-icons/all-files/io/IoIosVolumeOff";
import { ArrowUpLeft, ArrowUpRight } from "../components/icons";

const CloseIcon = IoMdClose as unknown as ComponentType<{ className?: string }>;
const PlayIcon = IoIosPlay as unknown as ComponentType<{ className?: string }>;
const PauseIcon = IoIosPause as unknown as ComponentType<{ className?: string }>;
const VolumeHighIcon =
  IoIosVolumeHigh as unknown as ComponentType<{ className?: string }>;
const VolumeOffIcon =
  IoIosVolumeOff as unknown as ComponentType<{ className?: string }>;

const selectedCaseStudyIds = new Set(selectedCaseStudies.map((caseStudy) => caseStudy.id));

const projectImageModules = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}"
);

const projectSlideshowMediaModules = import.meta.glob<string>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif,mp4}",
  { import: "default", query: "?url" }
);
const projectImageImporterByFilename = new Map(
  Object.entries(projectImageModules).map(([path, importImage]) => [
    path.split("/").pop()?.trim() ?? "",
    importImage,
  ])
);

const loadThumbnailByFilename = async (filename?: string) => {
  const normalizedFilename = filename?.trim();
  if (!normalizedFilename) {
    return undefined;
  }

  const importImage = projectImageImporterByFilename.get(normalizedFilename);
  if (!importImage) {
    return undefined;
  }

  const image = await importImage();
  return image.default;
};

const getProjectBatchSize = () => {
  if (typeof window === "undefined") {
    return 12;
  }

  return window.matchMedia("(max-width: 640px)").matches ? 3 : 12;
};

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
  height?: number;
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
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<1 | -1>(1);
  const isSlideshowOpen = slideshowProject !== null;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRequestsRef = useRef<Set<number>>(new Set());
  const [projectBatchSize, setProjectBatchSize] = useState(getProjectBatchSize);
  const [visibleProjectCount, setVisibleProjectCount] = useState(getProjectBatchSize);
  const [thumbnailSrcByProjectId, setThumbnailSrcByProjectId] = useState<
    Record<number, string | undefined>
  >({});

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
      getProjectTypes(project).forEach((type) => typeSet.add(type));
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
          return matchesTech && matchesTool && matchesSector && projectHasType(project, type);
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
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
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
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
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
            selectedTypes.length === 0 ||
            selectedTypes.some((type) => projectHasType(project, type));
          const matchesSector =
            selectedSectors.length === 0 || selectedSectors.includes(project.secteur);
          return matchesTech && matchesType && matchesSector && project.outils.includes(tool);
        })
      ),
    [allTools, publishedProjects, selectedTechnologies, selectedTypes, selectedSectors]
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSelectedTypes((current) => {
        const next = current.filter((type) => availableTypes.includes(type));
        return next.length === current.length ? current : next;
      });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [availableTypes]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSelectedSectors((current) => {
        const next = current.filter((sector) => availableSectors.includes(sector));
        return next.length === current.length ? current : next;
      });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [availableSectors]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSelectedTechnologies((current) => {
        const next = current.filter((technology) =>
          availableTechnologies.includes(technology)
        );
        return next.length === current.length ? current : next;
      });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [availableTechnologies]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSelectedTools((current) => {
        const next = current.filter((tool) => availableTools.includes(tool));
        return next.length === current.length ? current : next;
      });
    }, 0);

    return () => window.clearTimeout(timeout);
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
          selectedTypes.length === 0 ||
          selectedTypes.some((type) => projectHasType(project, type));

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
          getProjectTypes(project).join(" "),
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

  const visibleProjects = useMemo(
    () => filteredProjects.slice(0, visibleProjectCount),
    [filteredProjects, visibleProjectCount]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateBatchSize = () => {
      const nextBatchSize = mediaQuery.matches ? 3 : 12;
      setProjectBatchSize(nextBatchSize);
      setVisibleProjectCount(nextBatchSize);
    };

    updateBatchSize();
    mediaQuery.addEventListener("change", updateBatchSize);
    return () => mediaQuery.removeEventListener("change", updateBatchSize);
  }, []);

  const resetVisibleProjects = useCallback(() => {
    setVisibleProjectCount(projectBatchSize);
  }, [projectBatchSize]);

  const handleSectorChange = useCallback(
    (nextSectors: string[]) => {
      setSelectedSectors(nextSectors);
      resetVisibleProjects();
    },
    [resetVisibleProjects]
  );

  const handleTypeChange = useCallback(
    (nextTypes: string[]) => {
      setSelectedTypes(nextTypes);
      resetVisibleProjects();
    },
    [resetVisibleProjects]
  );

  const handleToolChange = useCallback(
    (nextTools: string[]) => {
      setSelectedTools(nextTools);
      resetVisibleProjects();
    },
    [resetVisibleProjects]
  );

  const handleTechChange = useCallback(
    (nextTechnologies: string[]) => {
      setSelectedTechnologies(nextTechnologies);
      resetVisibleProjects();
    },
    [resetVisibleProjects]
  );

  const handleSearchChange = useCallback(
    (nextQuery: string) => {
      setSearchQuery(nextQuery);
      resetVisibleProjects();
    },
    [resetVisibleProjects]
  );

  useEffect(() => {
    const projectsToLoad = visibleProjects.filter(
      (project) =>
        project.portfolio_image &&
        !thumbnailSrcByProjectId[project.id] &&
        !thumbnailRequestsRef.current.has(project.id)
    );

    const requestThumbnail = (project: Project) => {
      if (
        !project.portfolio_image ||
        thumbnailSrcByProjectId[project.id] ||
        thumbnailRequestsRef.current.has(project.id)
      ) {
        return;
      }

      thumbnailRequestsRef.current.add(project.id);
      loadThumbnailByFilename(project.portfolio_image)
        .then((thumbnailSrc) => {
          setThumbnailSrcByProjectId((current) => ({
            ...current,
            [project.id]: thumbnailSrc,
          }));
        })
        .catch(() => {
          setThumbnailSrcByProjectId((current) => ({
            ...current,
            [project.id]: undefined,
          }));
        });
    };

    if (projectsToLoad.length === 0) {
      return;
    }

    requestThumbnail(projectsToLoad[0]);

    const deferredProjects = projectsToLoad.slice(1);
    if (deferredProjects.length === 0) {
      return;
    }

    const loadDeferredThumbnails = () => {
      deferredProjects.forEach(requestThumbnail);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadDeferredThumbnails, {
        timeout: 900,
      });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(loadDeferredThumbnails, 180);
    return () => globalThis.clearTimeout(timeoutId);
  }, [thumbnailSrcByProjectId, visibleProjects]);

  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel || visibleProjectCount >= filteredProjects.length) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisibleProjectCount((current) =>
          Math.min(current + projectBatchSize, filteredProjects.length)
        );
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filteredProjects.length, projectBatchSize, visibleProjectCount]);

  const resolveProjectSlides = useCallback(async (project: Project): Promise<SlideshowSlide[]> => {
    const slides: SlideshowSlide[] = [];

    for (const media of project.medias) {
      const mediaFile = (typeof media === "string" ? media : media.file).trim();
      if (!mediaFile) {
        continue;
      }
      const mediaPath = `../assets/images/projects/${project.mediapath}/${mediaFile}`;
      const isVideo = mediaFile.toLowerCase().endsWith(".mp4");
      const importMedia = projectSlideshowMediaModules[mediaPath];

      if (!importMedia) {
        continue;
      }

      const src = await importMedia();
      const slide: SlideshowSlide = {
        src,
        kind: isVideo ? "video" : "image",
        height: typeof media === "string" ? undefined : media.height,
      };

      if (typeof media === "string") {
        slides.push(slide);
        continue;
      }

      const caption = (media as ProjectMedia).caption?.trim();
      slides.push(caption ? { ...slide, caption } : slide);
    }

    return slides;
  }, []);

  const goToNextSlide = useCallback(() => {
    setTransitionDirection(1);
    setActiveSlideIndex((current) => {
      if (slideshowSlides.length <= 1 || current >= slideshowSlides.length - 1) {
        return current;
      }

      return current + 1;
    });
  }, [slideshowSlides.length]);

  const goToPreviousSlide = useCallback(() => {
    setTransitionDirection(-1);
    setActiveSlideIndex((current) => {
      if (slideshowSlides.length <= 1 || current <= 0) {
        return current;
      }

      return current - 1;
    });
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
    async (project: Project, direction: 1 | -1 = 1) => {
      const slides = await resolveProjectSlides(project);

      if (slides.length === 0) {
        navigate(getProjectPath(project, detailBasePath));
        return;
      }

      setSlideshowProject(project);
      setSlideshowSlides(slides);
      setActiveSlideIndex(0);
      setIsSlideshowPlaying(false);
      setIsVideoMuted(false);
      setTransitionDirection(direction);
    },
    [detailBasePath, navigate, resolveProjectSlides]
  );

  const goToAdjacentProject = useCallback(
    (direction: 1 | -1) => {
      if (!slideshowProject) {
        return;
      }

      const currentProjectIndex = filteredProjects.findIndex(
        (project) => project.id === slideshowProject.id
      );
      const targetIndex = currentProjectIndex + direction;
      const targetProject = filteredProjects[targetIndex];

      if (!targetProject) {
        return;
      }

      void openProjectSlideshow(targetProject, direction);
    },
    [filteredProjects, openProjectSlideshow, slideshowProject]
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
      setActiveSlideIndex((current) => {
        if (current >= slideshowSlides.length - 1) {
          setIsSlideshowPlaying(false);
          return current;
        }

        return current + 1;
      });
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
  const slideshowThumbSrc = slideshowProject
    ? thumbnailSrcByProjectId[slideshowProject.id]
    : undefined;
  const currentProjectIndex = slideshowProject
    ? filteredProjects.findIndex((project) => project.id === slideshowProject.id)
    : -1;
  const isAtFirstSlide = activeSlideIndex <= 0;
  const isAtLastSlide = slideshowSlides.length > 0 && activeSlideIndex >= slideshowSlides.length - 1;
  const hasPreviousProject = currentProjectIndex > 0;
  const hasNextProject = currentProjectIndex >= 0 && currentProjectIndex < filteredProjects.length - 1;
  const showPreviousProjectButton = isAtFirstSlide && hasPreviousProject;
  const showNextProjectButton = isAtLastSlide && hasNextProject;
  const slideshowCaseStudyPath = useMemo(() => {
    if (!slideshowProject) {
      return undefined;
    }

    const directCaseStudyPath = getDedicatedCaseStudyPathByProjectId(slideshowProject.id);
    if (directCaseStudyPath) {
      return directCaseStudyPath;
    }

    const normalizedClient = normalizeText(slideshowProject.client);
    const clientCaseStudyProject = publishedProjects.find(
      (project) =>
        project.status === "published" &&
        hasCollection(project, "case-study") &&
        normalizeText(project.client) === normalizedClient
    );

    return clientCaseStudyProject
      ? getProjectPath(clientCaseStudyProject, "/etudes-de-cas")
      : undefined;
  }, [publishedProjects, slideshowProject]);
  const canShowCaseStudyButton =
    Boolean(slideshowCaseStudyPath) &&
    Boolean(slideshowProject && selectedCaseStudyIds.has(slideshowProject.id));

  useEffect(() => {
    if (
      !slideshowProject?.portfolio_image ||
      thumbnailSrcByProjectId[slideshowProject.id] ||
      thumbnailRequestsRef.current.has(slideshowProject.id)
    ) {
      return;
    }

    thumbnailRequestsRef.current.add(slideshowProject.id);
    loadThumbnailByFilename(slideshowProject.portfolio_image)
      .then((thumbnailSrc) => {
        setThumbnailSrcByProjectId((current) => ({
          ...current,
          [slideshowProject.id]: thumbnailSrc,
        }));
      })
      .catch(() => {
        setThumbnailSrcByProjectId((current) => ({
          ...current,
          [slideshowProject.id]: undefined,
        }));
      });
  }, [slideshowProject, thumbnailSrcByProjectId]);
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
  const introCopy =
    collectionKey === "portfolio"
      ? "Decouvrez une selection de projets sur-mesure, concus pour des marques qui veulent se distinguer."
      : "Plongez dans les etudes de cas pour comprendre la demarche, les choix et les resultats.";

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
          onSectorChange={handleSectorChange}
          onTypeChange={handleTypeChange}
          onToolChange={handleToolChange}
          onTechChange={handleTechChange}
          onSearchChange={handleSearchChange}
        />

        <section className="mx-auto grid w-full max-w-287.5 gap-8 px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-3 text-slate-500 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl text-[15px] leading-[1.6] text-[#555]">
              <p>{introCopy}</p>
            </div>
            <span className="shrink-0 text-sm tracking-[0.2px] text-slate-500">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""}
            </span>
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
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
                    thumbnailOverride={thumbnailSrcByProjectId[project.id]}
                    isThumbnailLoading={
                      Boolean(project.portfolio_image) &&
                      !thumbnailSrcByProjectId[project.id]
                    }
                    isPriorityThumbnail={index === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {visibleProjectCount < filteredProjects.length && (
            <div ref={loadMoreRef} className="h-10 w-full" aria-hidden="true" />
          )}
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
                  onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
                >
                  <div className="portfolio-slideshow-topbar">
                    <div className="portfolio-slideshow-meta">
                      <div className="portfolio-slideshow-project">
                        {slideshowThumbSrc ? (
                          <>
                            <img
                              className="portfolio-slideshow-thumb is-loaded"
                              src={slideshowThumbSrc}
                              alt={`Vignette ${slideshowProject.title}`}
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
                        {canShowCaseStudyButton && (
                          <button
                            type="button"
                            className="portfolio-slideshow-case-link"
                            onClick={() => {
                              if (!slideshowCaseStudyPath) {
                                return;
                              }
                              closeSlideshow();
                              navigate(slideshowCaseStudyPath);
                            }}
                          >
                            <span>Voir l'etude de cas</span>
                            <ArrowUpRight className="shrink-0" />
                          </button>
                        )}
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
                        {isSlideshowPlaying ? <PauseIcon /> : <PlayIcon />}
                      </button>
                      <button
                        type="button"
                        className="portfolio-overlay-btn"
                        onClick={toggleVideoMute}
                        disabled={currentSlide?.kind !== "video"}
                        aria-pressed={!isVideoMuted}
                        aria-label={isVideoMuted ? "Activer le son" : "Couper le son"}
                      >
                        {isVideoMuted ? <VolumeOffIcon /> : <VolumeHighIcon />}
                      </button>
                      <button
                        type="button"
                        className="portfolio-overlay-btn danger"
                        onClick={closeSlideshow}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>

                  <div className="portfolio-slideshow-stage">
                    <button
                      type="button"
                      className="portfolio-nav-btn prev"
                      onClick={goToPreviousSlide}
                      disabled={slideshowSlides.length <= 1 || activeSlideIndex <= 0}
                      aria-label="Image précédente"
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
                        {currentSlide.kind === "video" ? (
                          <video
                            controls
                            ref={videoRef}
                            src={currentSlide.src}
                            className="is-loaded"
                            autoPlay
                            muted={isVideoMuted}
                            loop
                            playsInline
                            preload="auto"
                            onLoadedMetadata={() => {
                              requestVideoPlayback();
                            }}
                          />
                        ) : (
                          <img
                            src={currentSlide.src}
                            alt={slideshowProject.title}
                            className="is-loaded"
                            style={{ maxHeight: currentSlide.height ? `${currentSlide.height}px` : "180px" }}
                          />
                        )}
                        {(showPreviousProjectButton || showNextProjectButton) && (
                          <div className="portfolio-adjacent-project-nav">
                            {showPreviousProjectButton && (
                              <button
                                type="button"
                                className="flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
                                onClick={() => goToAdjacentProject(-1)}
                              >
                                <ArrowUpLeft className="shrink-0" />
                                <span>Projet précédent</span>
                              </button>
                            )}
                            {showNextProjectButton && (
                              <button
                                type="button"
                                className="ml-auto flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
                                onClick={() => goToAdjacentProject(1)}
                              >
                                <span>Projet suivant</span>
                                <ArrowUpRight className="shrink-0" />
                              </button>
                            )}
                          </div>
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
                      disabled={slideshowSlides.length <= 1 || activeSlideIndex >= slideshowSlides.length - 1}
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

