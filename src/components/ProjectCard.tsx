import { motion } from "framer-motion";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Link } from "react-router-dom";
import { slugifyTitle } from "../utils/slug";
const images = import.meta.glob<{ default: string }>(
    "../assets/images/projects/**/*.{jpg,png,webp}",
    { eager: true }
);

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    type: string;
    client?: string;
}

interface ProjectCardProps {
    project: Project;
    detailBasePath?: "/portfolio" | "/etudes-de-cas";
    thumbnailOverride?: string;
}

export default function ProjectCard({
    project,
    detailBasePath = "/portfolio",
    thumbnailOverride,
}: ProjectCardProps) {
    const thumbnailPath = `../assets/images/projects/vignettes/${project.image}`;
    const thumbnail = thumbnailOverride ?? images[thumbnailPath]?.default;
    const projectSlug = slugifyTitle(project.title);

    return (
        <motion.article
            className="project-card"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
            <Link to={`${detailBasePath}/${projectSlug}`} className="card-link">
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
