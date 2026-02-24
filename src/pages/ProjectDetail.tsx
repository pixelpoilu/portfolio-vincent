import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import projectsData from "../data/project-prod.json";
import type { Project } from "../types/Project";
import { slugifyTitle } from "../utils/slug";

const images = import.meta.glob<{ default: string }>(
  "../assets/images/projects/**/*.{jpg,png,webp}",
  { eager: true }
);

export default function ProjectDetail() {
  const { slug } = useParams();
  const projects = projectsData as Project[];

  const projectBySlug = projects.find((p) => slugifyTitle(p.title) === slug);
  const legacyId = Number(slug);
  const projectByLegacyId =
    Number.isInteger(legacyId) && legacyId > 0
      ? projects.find((p) => p.id === legacyId)
      : undefined;
  const project = projectBySlug ?? projectByLegacyId;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  if (projectByLegacyId && !projectBySlug) {
    return (
      <Navigate
        to={`/portfolio/${slugifyTitle(projectByLegacyId.title)}`}
        replace
      />
    );
  }

  if (!project) {
    return (
      <PageTransition>
        <main className="page">
          <h1>Projet introuvable</h1>
          <Link to="/portfolio">? Retour</Link>
        </main>
      </PageTransition>
    );
  }

  const galleryImages: string[] = project.medias
    .map((media) => {
      const path = `../assets/images/projects/medias/${project.mediapath}/${media}`;
      return images[path]?.default;
    })
    .filter((img): img is string => Boolean(img));

  useEffect(() => {
    setCurrentIndex(0);
    setIsPlaying(true);
  }, [project?.id]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPlaying || galleryImages.length <= 1) {
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
  }, [isPlaying, galleryImages.length]);

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
      <main className="project-detail">
        <Link to="/portfolio" className="back-link">
          ? Retour aux projets
        </Link>

        <div className="project-layout">
          <div className="project-slider">
            {galleryImages.length > 0 && (
              <>
                <img
                  src={galleryImages[currentIndex]}
                  alt={project.title}
                  className="slider-image"
                />

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
                    aria-label="Image ⏮e"
                  >
                    ⏮
                  </button>
                  <button
                    className="slider-control"
                    onClick={togglePlay}
                    disabled={galleryImages.length <= 1}
                    aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                  <button
                    className="slider-control"
                    onClick={nextSlide}
                    disabled={galleryImages.length <= 1}
                    aria-label="Image ⏭e"
                  >
                    ⏭
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="project-info">
            <h1>{project.title}</h1>

            <p className="meta">
              {project.client} • {project.year}
            </p>

            <h3>Description</h3>
            <p>{project.description}</p>

            <h3>Contexte</h3>
            <p>{project.Contexte}</p>

            <h3>Réponse</h3>
            <p>{project.Reponse}</p>

            <h3>Missions</h3>
            <ul>
              {project.missions.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>

            <h3>Technologies</h3>
            <p>{project.technologies.join(", ")}</p>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </PageTransition>
  );
}






