import projectsData from "../data/projects.json";
import type { Project } from "../types/Project";

/**
 * Service central pour accéder aux projets du portfolio
 * (actuellement via projects.json)
 */

/**
 * Retourne tous les projets
 */
export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * Retourne un projet par son id
 */
export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}

/**
 * Retourne les projets triés par année (optionnel)
 */
export function getProjectsSorted(): Project[] {
  return [...getAllProjects()].sort((a, b) =>
    b.year.localeCompare(a.year)
  );
}
