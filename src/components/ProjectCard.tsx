import { motion } from "framer-motion";
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
}

interface ProjectCardProps {
    project: Project;
    detailBasePath?: "/portfolio" | "/etudes-de-cas";
}

export default function ProjectCard({
    project,
    detailBasePath = "/portfolio",
}: ProjectCardProps) {
    const thumbnailPath = `../assets/images/projects/vignettes/${project.image}`;
    const thumbnail = images[thumbnailPath]?.default;
    const projectSlug = slugifyTitle(project.title);

    return (
        <motion.article
            className="project-card"
            layout
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
            <Link to={`${detailBasePath}/${projectSlug}`} className="card-link">
                <div className="card-image-wrapper">
                    <img
                        src={thumbnail}
                        alt={project.title}
                        className="card-image"
                        loading="lazy"
                    />
                </div>


                <div className="card-content">
                    <span className="card-type">
                        {project.type}
                    </span>

                    <h3 className="card-title">
                        {project.title}
                    </h3>

                    <p className="card-description">
                        {project.description}
                    </p>
                </div>
            </Link>
        </motion.article>
    );
}
