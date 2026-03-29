import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import PageTransition from "../components/PageTransition";
import projectsData from "../data/project-prod.json";
import type { Project, ProjectMedia } from "../types/Project";
import { slugifyTitle } from "../utils/slug";
import { hasCollection, type ProjectCollectionKey } from "../utils/projectCollection";

const images = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,png,webp}",
  { eager: true }
);

export default function ProjectDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const collectionKey: ProjectCollectionKey = location.pathname.startsWith("/etudes-de-cas")
    ? "case-study"
    : "portfolio";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isSliderImageLoaded, setIsSliderImageLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  if (projectByLegacyId && !projectBySlug) {
    return (
      <Navigate
        to={`${listingBasePath}/${slugifyTitle(projectByLegacyId.title)}`}
        replace
      />
    );
  }

  if (!project) {
    return (
      <PageTransition>
        <main className="page">
          <h1>Projet introuvable</h1>
          <Link to={listingBasePath}>? Retour</Link>
        </main>
      </PageTransition>
    );
  }

  const client = project.client?.trim();
  const description = project.description?.trim();
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

      const path = `../assets/images/projects/medias/${project.mediapath}/${mediaFile}`;
      const src = images[path]?.default;

      return src ? { src, caption } : null;
    })
    .filter(
      (media): media is { src: string; caption: string | undefined } => Boolean(media?.src)
    );

  useEffect(() => {
    setCurrentIndex(0);
    setIsPlaying(true);
    setIsHovered(false);
    setIsSliderImageLoaded(false);
  }, [project?.id]);

  useEffect(() => {
    setIsSliderImageLoaded(false);
  }, [currentIndex, project?.id]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPlaying || isHovered || galleryImages.length <= 1) {
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
  }, [isPlaying, isHovered, galleryImages.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <PageTransition>
      <div className="site-page">
        <div className="detail-wrapper">
          <div className="filter-top">
            <Link to={listingBasePath} className="btn secondary">
              <span className="arrow">‹‹ </span>{backLabel}
            </Link>
          </div>

        </div>
        <main className="project-detail">

          <div className="project-layout">
            <div
              className="project-slider"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {galleryImages.length > 0 && (
                <>
                  {!isSliderImageLoaded && (
                    <div className="image-loader-overlay" aria-hidden="true">
                      <Loader />
                    </div>
                  )}
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={project.title}
                    className={`slider-image ${isSliderImageLoaded ? "is-loaded" : "is-loading"}`}
                    onLoad={() => setIsSliderImageLoaded(true)}
                    onError={() => setIsSliderImageLoaded(true)}
                  />
                  {galleryImages[currentIndex].caption && (
                    <p className="slider-caption">{galleryImages[currentIndex].caption}</p>
                  )}

                  <button className="slider-btn left" onClick={prevSlide}>
                    ‹
                  </button>
                  <button className="slider-btn right" onClick={nextSlide}>
                    ›
                  </button>

                  <div
                    className="slider-controls"
                    role="group"
                    aria-label="Navigation du diaporama"
                  >
                    <button
                      className="slider-control"
                      onClick={prevSlide}
                      disabled={galleryImages.length <= 1}
                      aria-label="Image pr&eacute;c&eacute;dente"
                    >
                      ‹
                    </button>
                    <button
                      className="slider-control"
                      onClick={togglePlay}
                      disabled={galleryImages.length <= 1}
                      aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                    >
                      {isPlaying ? "\u275a\u275a" : "\u25b6"}
                    </button>
                    <button
                      className="slider-control"
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

            <div className="project-info">
              <h1>{project.title}</h1>

              {client && <p className="meta">{client}</p>}

              {description && (
                <>
                  <h3>Description</h3>
                  <p>{description}</p>
                </>
              )}

              {contexte && (
                <>
                  <h3>Contexte</h3>
                  <p>{contexte}</p>
                </>
              )}

              {reponse && (
                <>
                  <h3>Réponse</h3>
                  <p>{reponse}</p>
                </>
              )}

              {missions.length > 0 && (
                <>
                  <h3>Missions</h3>
                  <ul>
                    {missions.map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))}
                  </ul>
                </>
              )}

              {technologies.length > 0 && (
                <>
                  <h3>Technologies</h3>
                  <ul className="project-tech-list" aria-label="Technologies utilisees">
                    {technologies.map((technology) => (
                      <li key={technology} className="project-tech-pill">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}




