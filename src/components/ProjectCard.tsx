import { motion } from "framer-motion";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Link } from "react-router-dom";
import { useState, type MouseEvent } from "react";
/*
import {
    Chip
} from "@material-tailwind/react";
*/
import type { Project } from "../types/Project";
import { getProjectPath } from "../utils/projectPaths";
import Loader from "./Loader";
import { formatProjectTypes } from "../utils/projectType";


interface ProjectCardProps {
    project: Project;
    detailBasePath?: "/portfolio" | "/etudes-de-cas";
    thumbnailOverride?: string;
    isThumbnailLoading?: boolean;
    isPriorityThumbnail?: boolean;
    onCardClick?: (project: Project) => void;
}

export default function ProjectCard({
    project,
    detailBasePath = "/portfolio",
    thumbnailOverride,
    isThumbnailLoading = false,
    isPriorityThumbnail = false,
    onCardClick,
}: ProjectCardProps) {
    const thumbnail = thumbnailOverride;
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const projectPath = getProjectPath(project, detailBasePath);

    const handleCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!onCardClick) {
            return;
        }
        event.preventDefault();
        onCardClick(project);
    };

    return (
        <motion.article
            key={thumbnail}
            className="project-card group relative overflow-hidden border-0 bg-transparent p-0 shadow-none"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
            <Link
                to={projectPath}
                className="card-link block w-full text-white"
                onClick={handleCardClick}
            >
                <div className="card-image-wrapper relative overflow-hidden bg-zinc-300">
                    {thumbnail ? (
                        <>
                            {!isImageLoaded && (
                                <div
                                    className="image-loader-overlay pointer-events-none absolute inset-0 z-3 flex items-center justify-center bg-[rgba(8,12,18,0.22)]"
                                    aria-hidden="true"
                                >
                                    <Loader />
                                </div>
                            )}
                            <img
                                src={thumbnail}
                                alt={project.title}
                                className={`card-image block h-auto w-full object-cover transition duration-500 ease-out group-hover:scale-[1.98]  group-hover:blur-[1.9px] group-focus-within:scale-[1.18] group-focus-within:blur-[1.9px] ${isImageLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                                loading={isPriorityThumbnail ? "eager" : "lazy"}
                                {...({
                                    fetchpriority: isPriorityThumbnail ? "high" : "auto",
                                } as { fetchpriority: "high" | "auto" })}
                                onLoad={() => setIsImageLoaded(true)}
                                onError={() => setIsImageLoaded(true)}
                            />
                        </>
                    ) : (
                        <>
                            {isThumbnailLoading && (
                                <div
                                    className="image-loader-overlay pointer-events-none absolute inset-0 z-3 flex items-center justify-center bg-[rgba(8,12,18,0.16)]"
                                    aria-hidden="true"
                                >
                                    <Loader />
                                </div>
                            )}
                            <div
                                className="card-image card-image-fallback aspect-4/5 bg-linear-to-br from-slate-200 to-slate-300"
                                aria-hidden="true"
                            />
                        </>
                    )}

                    <div className="card-content pointer-events-none absolute inset-0 flex flex-col bg-linear-to-t from-black/60 via-black/50 to-black/90 p-6 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                        <h3 className="card-title mt-5 max-w-[90%] text-[1.25rem] leading-[1.1] text-white text-balance">
                            {project.client}
                        </h3>
                        <span className="card-type text-[0.92rem] font-medium opacity-90">
                            {formatProjectTypes(project)} - {project.order}
                        </span>
                        <span
                            className="card-cta ml-auto mt-auto inline-flex h-11 w-11 items-center justify-center bg-white text-2xl leading-none text-[#111]"
                            aria-hidden="true"
                        >
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
