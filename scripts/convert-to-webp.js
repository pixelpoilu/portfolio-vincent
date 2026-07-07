import { readdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const outputDirectory = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(process.cwd(), "dist", "client");
const textExtensions = new Set([
  ".css", ".html", ".js", ".json", ".map", ".mjs",
  ".svg", ".txt", ".webmanifest", ".xml",
]);
const convertibleExtensions = new Set([".png", ".jpg", ".jpeg"]);

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    }),
  );
  return nestedFiles.flat();
}

async function runWithConcurrency(items, concurrency, callback) {
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < items.length) {
      const item = items[nextIndex++];
      await callback(item);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, worker),
  );
}

try {
  if (!(await stat(outputDirectory)).isDirectory()) throw new Error();
} catch {
  throw new Error(`Dossier de production introuvable : ${outputDirectory}`);
}

const files = await listFiles(outputDirectory);
const imageFiles = files.filter((file) =>
  convertibleExtensions.has(extname(file).toLowerCase()),
);
const imageReplacements = imageFiles.map((file) => {
  const imageName = basename(file);
  return [imageName, imageName.replace(/\.(?:png|jpe?g)$/i, ".webp")];
});
const convertedCounts = { png: 0, jpg: 0, jpeg: 0 };
let originalBytes = 0;
let webpBytes = 0;

await runWithConcurrency(imageFiles, 4, async (imageFile) => {
  const sourceExtension = extname(imageFile).toLowerCase().slice(1);
  const webpFile = imageFile.replace(/\.(?:png|jpe?g)$/i, ".webp");
  const temporaryFile = `${webpFile}.tmp`;
  const sourceStats = await stat(imageFile);

  await sharp(imageFile)
    .webp({ quality: 82, alphaQuality: 90, effort: 5 })
    .toFile(temporaryFile);
  await rm(webpFile, { force: true });
  await rename(temporaryFile, webpFile);
  await rm(imageFile);

  convertedCounts[sourceExtension] += 1;
  originalBytes += sourceStats.size;
  webpBytes += (await stat(webpFile)).size;
});

const textFiles = files.filter((file) =>
  textExtensions.has(extname(file).toLowerCase()),
);
let updatedFiles = 0;

await runWithConcurrency(textFiles, 8, async (file) => {
  const content = await readFile(file, "utf8");
  const updatedContent = imageReplacements.reduce(
    (result, [imageName, webpName]) => result.replaceAll(imageName, webpName),
    content,
  );
  if (updatedContent !== content) {
    await writeFile(file, updatedContent, "utf8");
    updatedFiles += 1;
  }
});

const savedBytes = originalBytes - webpBytes;
const savedPercent = originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;
console.log(
  `[webp] ${convertedCounts.png} PNG, ${convertedCounts.jpg + convertedCounts.jpeg} JPG/JPEG convertis, ` +
    `${updatedFiles} fichiers mis à jour, ` +
    `${(savedBytes / 1024 / 1024).toFixed(2)} Mo économisés (${savedPercent.toFixed(1)} %).`,
);
