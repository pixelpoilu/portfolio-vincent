import { readdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const outputDirectory = join(process.cwd(), "dist", "client");
const textExtensions = new Set([
  ".css", ".html", ".js", ".json", ".map", ".mjs",
  ".svg", ".txt", ".webmanifest", ".xml",
]);

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
const pngFiles = files.filter((file) => extname(file).toLowerCase() === ".png");
const pngReplacements = pngFiles.map((file) => {
  const pngName = basename(file);
  return [pngName, pngName.replace(/\.png$/i, ".webp")];
});
let originalBytes = 0;
let webpBytes = 0;

await runWithConcurrency(pngFiles, 4, async (pngFile) => {
  const webpFile = pngFile.replace(/\.png$/i, ".webp");
  const temporaryFile = `${webpFile}.tmp`;
  const sourceStats = await stat(pngFile);

  await sharp(pngFile)
    .webp({ quality: 82, alphaQuality: 90, effort: 5 })
    .toFile(temporaryFile);
  await rm(webpFile, { force: true });
  await rename(temporaryFile, webpFile);
  await rm(pngFile);

  originalBytes += sourceStats.size;
  webpBytes += (await stat(webpFile)).size;
});

const textFiles = files.filter((file) =>
  textExtensions.has(extname(file).toLowerCase()),
);
let updatedFiles = 0;

await runWithConcurrency(textFiles, 8, async (file) => {
  const content = await readFile(file, "utf8");
  const updatedContent = pngReplacements.reduce(
    (result, [pngName, webpName]) => result.replaceAll(pngName, webpName),
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
  `[webp] ${pngFiles.length} PNG convertis, ${updatedFiles} fichiers mis à jour, ` +
    `${(savedBytes / 1024 / 1024).toFixed(2)} Mo économisés (${savedPercent.toFixed(1)} %).`,
);
