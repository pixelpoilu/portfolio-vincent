import type { Project } from "../types/Project";

export type ProjectCollectionKey = "portfolio" | "case-study";

export function hasCollection(
  project: Project,
  key: ProjectCollectionKey
): boolean {
  const { collection } = project;

  if (Array.isArray(collection)) {
    return collection.includes(key);
  }

  return collection === key;
}

