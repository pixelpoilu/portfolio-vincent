import { Link } from "react-router-dom";
import {
  type MouseEvent,
} from "react";
import type { Project } from "../types/Project";

type Props = {
  projects: Project[];
  thumbnails: Record<number, string | undefined>;
  onProjectClick: (project: Project) => void;
};

const stats = [
  { value: "50+", label: "projets sélectionnés", icon: "grid" },
  { value: "80+", label: "projets réalisés", icon: "folder" },
  { value: "25+", label: "ans d’expérience", icon: "calendar" },
  { value: "UX/UI/", label: "Plateformes web", icon: "code" },
] as const;

function StatIcon({ name }: { name: (typeof stats)[number]["icon"] }) {
  if (name === "folder") {
    return <path d="M3 7.5h6l2-2h4l2 2h4v11H3zM3 10h18" />;
  }
  if (name === "calendar") {
    return <path d="M5 4v3m14-3v3M3 9h18M5 6h14v15H5zm4 7h2m3 0h2m-7 4h2" />;
  }
  if (name === "code") {
    return <path d="m9 7-5 5 5 5m6-10 5 5-5 5m-2-12-2 14" />;
  }
  return <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />;
}

export default function PortfolioHero({ projects, thumbnails, onProjectClick }: Props) {

  const handleScrollToScreen = (
    event: MouseEvent<HTMLAnchorElement>,
    screenId: string,
  ) => {
    event.preventDefault();
    document.getElementById(screenId)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (
    <section className="portfolio-hero" aria-labelledby="portfolio-title">
      <div className="portfolio-hero__copy">
        <p className=" text-[0.79rem] uppercase tracking-[0.32em] text-neutral-500">Portfolio</p>
        <h1 id="portfolio-title" className="text-[clamp(3.3rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950">
          Des sites, des interfaces, des expériences web
        </h1>
        <p className="portfolio-hero__intro max-w-xl text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
          Une sélection d’environ 50 projets web réalisés au fil des années, entre design d’interface, plateformes, sites corporate et expériences digitales.
        </p>

        <div className="portfolio-hero__actions">
          <Link
            to="/contact"
            className="btn-flipB w-full sm:w-auto"
            data-back="Me contacter"
            data-front="Me contacter"
          />
          <Link
            to="#screenPortfolio"
            className="btn-flip w-full sm:w-auto"
            data-back="Parcourir mes projets"
            data-front="Parcourir mes projets"
            onClick={(event) => handleScrollToScreen(event, "screenPortfolio")}
          />

        </div>

        <div className="portfolio-hero__stats" aria-label="Le portfolio en chiffres">
          {stats.map((stat) => (
            <div className="portfolio-stat" key={stat.label}>
              <span className="portfolio-stat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <StatIcon name={stat.icon} />
                </svg>
              </span>
              <span className="portfolio-stat__text">
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-hero__mosaic" aria-label="Aperçu des projets sélectionnés">
        {projects.slice(0, 9).map((project, index) => {
          const thumbnail = thumbnails[project.id];
          return (
            <button
              type="button"
              className="portfolio-hero__tile"
              key={project.id}
              onClick={() => onProjectClick(project)}
              aria-label={`Voir le projet ${project.title}`}
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt=""
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              ) : (
                <span className="portfolio-hero__tile-placeholder" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
