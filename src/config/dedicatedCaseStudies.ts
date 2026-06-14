import type { ComponentType } from "react";

import CaseStudyDiliTrust from "../pages/CaseStudyDiliTrust";
import CaseStudyDocBiker from "../pages/CaseStudyDocBiker";
import CaseStudyLocaboat from "../pages/CaseStudyLocaboat";

import type { Project } from "../types/Project";

export type DedicatedCaseStudyComponent = ComponentType<{
    project: Project;
}>;

export type DedicatedCaseStudyConfig = {
    slug: string;
    projectId: number;
    Component: DedicatedCaseStudyComponent;
};

const dedicatedCaseStudies: DedicatedCaseStudyConfig[] = [
    {
        slug: "refonte-du-site-web-dilitrust",
        projectId: 68,
        Component: CaseStudyDiliTrust,
    },

    {
        slug: "site-internet-doc-biker",
        projectId: 60,
        Component: CaseStudyDocBiker,
    },


    {
        slug: "site-internet-locaboat",
        projectId: 50,
        Component: CaseStudyLocaboat,
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
