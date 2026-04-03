import type { Project } from "../types/Project";

export const getProjectTypes = (project: Pick<Project, "type">): string[] => {
  const rawTypes = Array.isArray(project.type) ? project.type : [project.type];

  return rawTypes
    .map((type) => type.trim())
    .filter((type, index, types) => type !== "" && types.indexOf(type) === index);
};

export const projectHasType = (
  project: Pick<Project, "type">,
  type: string
): boolean => getProjectTypes(project).includes(type);

export const formatProjectTypes = (project: Pick<Project, "type">): string =>
  getProjectTypes(project).join(" / ");
