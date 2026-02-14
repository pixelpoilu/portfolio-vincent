
import projectsData from "../data/projects.json";
import type { Project } from "../types/Project";


export default function useProjects() {
  const projects: Project[] = projectsData;

  const sortedProjects = [...projects].sort((a, b) =>
    b.year.localeCompare(a.year)
  );

  return {
    projects: sortedProjects,
  };
}
