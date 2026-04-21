import {
    getDedicatedCaseStudyByProjectId,
    getDedicatedCaseStudyPathByProjectId,
} from "../config/dedicatedCaseStudies";
import type { Project } from "../types/Project";
import { slugifyTitle } from "./slug";

export type ProjectDetailBasePath = "/portfolio" | "/etudes-de-cas";

export function getProjectSlug(
    project: Pick<Project, "id" | "title">,
    detailBasePath: ProjectDetailBasePath,
) {
    if (detailBasePath === "/etudes-de-cas") {
        return (
            getDedicatedCaseStudyByProjectId(project.id)?.slug ??
            slugifyTitle(project.title)
        );
    }

    return slugifyTitle(project.title);
}

export function getProjectPath(
    project: Pick<Project, "id" | "title">,
    detailBasePath: ProjectDetailBasePath,
) {
    if (detailBasePath === "/etudes-de-cas") {
        return (
            getDedicatedCaseStudyPathByProjectId(project.id) ??
            `${detailBasePath}/${slugifyTitle(project.title)}`
        );
    }

    return `${detailBasePath}/${slugifyTitle(project.title)}`;
}
