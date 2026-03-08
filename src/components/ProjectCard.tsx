import { motion } from "framer-motion";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Link } from "react-router-dom";
import { slugifyTitle } from "../utils/slug";
import type { MouseEvent } from "react";
import type { Project } from "../types/Project";

interface ProjectCardProps {
    project: Project;
    detailBasePath?: "/portfolio" | "/etudes-de-cas";
    thumbnailOverride?: string;
    onCardClick?: (project: Project) => void;
}

export default function ProjectCard({
    project,
    detailBasePath = "/portfolio",
    thumbnailOverride,
    onCardClick,
}: ProjectCardProps) {
    const thumbnail = thumbnailOverride;
    const projectSlug = slugifyTitle(project.title);
    const handleCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!onCardClick) {
            return;
        }
        event.preventDefault();
        onCardClick(project);
    };

    return (
        <motion.article
            className="project-card"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
            <Link to={`${detailBasePath}/${projectSlug}`} className="card-link" onClick={handleCardClick}>
                <div className="card-image-wrapper">
                    {thumbnail ? (
                        <img
                            src={thumbnail}
                            alt={project.title}
                            className="card-image"
                            loading="lazy"
                        />
                    ) : (
                        <div className="card-image card-image-fallback" aria-hidden="true" />
                    )}

                    <div className="card-content">
                        <h3 className="card-title">{project.client}</h3>
                        <span className="card-type">{project.type}</span>
                        <span className="card-cta" aria-hidden="true">
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
