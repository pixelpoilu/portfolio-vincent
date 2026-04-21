import { Navigate, useParams } from "react-router-dom";

import {
    getDedicatedCaseStudyByProjectId,
    getDedicatedCaseStudyBySlug,
    getDedicatedCaseStudyPathByProjectId,
} from "../config/dedicatedCaseStudies";
import projectsData from "../data/project-prod.json";
import type { Project } from "../types/Project";
import { hasCollection } from "../utils/projectCollection";
import { slugifyTitle } from "../utils/slug";
import ProjectDetail from "./ProjectDetail";

export default function CaseStudyEntry() {
    const { slug } = useParams();
    const projects = (projectsData as Project[]).filter(
        (project) =>
            project.status === "published" && hasCollection(project, "case-study"),
    );

    const dedicatedCaseStudy = getDedicatedCaseStudyBySlug(slug);

    if (dedicatedCaseStudy) {
        const project = projects.find(
            (item) => item.id === dedicatedCaseStudy.projectId,
        );

        if (!project) {
            return <Navigate to="/etudes-de-cas" replace />;
        }

        const Component = dedicatedCaseStudy.Component;
        return <Component project={project} />;
    }

    const matchedProject = slug
        ? projects.find((project) => slugifyTitle(project.title) === slug)
        : undefined;
    const dedicatedProject = matchedProject
        ? getDedicatedCaseStudyByProjectId(matchedProject.id)
        : undefined;

    if (dedicatedProject) {
        return (
            <Navigate
                to={
                    getDedicatedCaseStudyPathByProjectId(dedicatedProject.projectId) ??
                    "/etudes-de-cas"
                }
                replace
            />
        );
    }

    return <ProjectDetail />;
}
