import { motion } from "framer-motion";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Link } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import type { Project } from "../types/Project";
import { getProjectPath } from "../utils/projectPaths";
import Loader from "./Loader";
import { formatProjectTypes } from "../utils/projectType";

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
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const projectPath = getProjectPath(project, detailBasePath);

    useEffect(() => {
        setIsImageLoaded(false);
    }, [thumbnail]);

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
            <Link to={projectPath} className="card-link" onClick={handleCardClick}>
                <div className="card-image-wrapper">
                    {thumbnail ? (
                        <>
                            {!isImageLoaded && (
                                <div className="image-loader-overlay" aria-hidden="true">
                                    <Loader />
                                </div>
                            )}
                            <img
                                src={thumbnail}
                                alt={project.title}
                                className={`card-image ${isImageLoaded ? "is-loaded" : "is-loading"}`}
                                loading="lazy"
                                onLoad={() => setIsImageLoaded(true)}
                                onError={() => setIsImageLoaded(true)}
                            />
                        </>
                    ) : (
                        <div className="card-image card-image-fallback" aria-hidden="true" />
                    )}

                    <div className="card-content">
                        <h3 className="card-title">{project.client}</h3>
                        <span className="card-type">{formatProjectTypes(project)} - {project.order}</span>
                        <span className="card-cta" aria-hidden="true">
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
