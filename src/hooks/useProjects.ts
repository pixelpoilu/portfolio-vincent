import { getAllProjects } from "../services/projectService";
import type { Project } from "../types/Project";

export function useProjects(): Project[] {
  return getAllProjects();
}