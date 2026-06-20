import { lazy, type ComponentType, type LazyExoticComponent } from "react";

import type { Project } from "../types/Project";

export type DedicatedCaseStudyComponent = ComponentType<{
    project: Project;
}>;

export type DedicatedCaseStudyConfig = {
    slug: string;
    projectId: number;
    Component: LazyExoticComponent<DedicatedCaseStudyComponent>;
};

const dedicatedCaseStudies: DedicatedCaseStudyConfig[] = [
    {
        slug: "refonte-du-site-web-dilitrust",
        projectId: 68,
        Component: lazy(() => import("../pages/CaseStudyDiliTrust")),
    },

    {
        slug: "site-internet-doc-biker",
        projectId: 60,
        Component: lazy(() => import("../pages/CaseStudyDocBiker")),
    },


    {
        slug: "site-internet-locaboat",
        projectId: 50,
        Component: lazy(() => import("../pages/CaseStudyLocaboat")),
    },
    
];

export function getDedicatedCaseStudyBySlug(slug?: string) {
    if (!slug) {
        return undefined;
    }

    return dedicatedCaseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getDedicatedCaseStudyByProjectId(projectId: number) {
    return dedicatedCaseStudies.find((caseStudy) => caseStudy.projectId === projectId);
}

export function getDedicatedCaseStudyPathByProjectId(projectId: number) {
    const caseStudy = getDedicatedCaseStudyByProjectId(projectId);
    return caseStudy ? `/etudes-de-cas/${caseStudy.slug}` : undefined;
}

export { dedicatedCaseStudies };
