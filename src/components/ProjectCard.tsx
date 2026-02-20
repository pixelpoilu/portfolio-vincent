import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    technologies?: string[];
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const thumbnailPath = `../assets/images/projects/vignettes/${project.image}`;
    const thumbnail = images[thumbnailPath]?.default;

    return (
        <motion.article
            className="project-card"
            layout
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
            <Link to={`/projects/${project.id}`} className="card-link">
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

                    {project.technologies && (
                        <div className="card-technologies">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </motion.article>
    );
}
