const projectMediaModules = import.meta.glob<string>(
  "../assets/images/projects/**/*.{jpg,jpeg,png,webp,avif,mp4}",
  { import: "default", query: "?url" },
);

export async function loadProjectMedia(mediaPath: string, filename: string) {
  const importMedia =
    projectMediaModules[`../assets/images/projects/${mediaPath}/${filename}`];

  return importMedia ? importMedia() : undefined;
}
