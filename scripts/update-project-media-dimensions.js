import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '..', 'src', 'data', 'project-prod.json');
const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const imageExts = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tif', '.tiff']);
const assetsRoot = path.join(__dirname, '..', 'src', 'assets', 'images', 'projects');

let updated = 0;
let skipped = 0;
let missing = 0;

for (const project of projects) {
  const medias = Array.isArray(project.medias) ? project.medias : [];
  const updatedMedias = [];

  for (const media of medias) {
    if (typeof media === 'string') {
      const file = media.trim();
      if (!file) {
        updatedMedias.push(media);
        continue;
      }

      const ext = path.extname(file).toLowerCase();
      if (!imageExts.has(ext)) {
        updatedMedias.push(media);
        skipped += 1;
        continue;
      }

      const fullPath = path.join(assetsRoot, project.mediapath || '', file);
      if (!fs.existsSync(fullPath)) {
        missing += 1;
        updatedMedias.push(media);
        continue;
      }

      const metadata = await sharp(fullPath).metadata();
      updated += 1;
      updatedMedias.push({ file, width: metadata.width, height: metadata.height });
      continue;
    }

    if (media && typeof media === 'object' && typeof media.file === 'string') {
      const file = media.file.trim();
      if (!file) {
        updatedMedias.push(media);
        continue;
      }

      const ext = path.extname(file).toLowerCase();
      if (!imageExts.has(ext)) {
        updatedMedias.push(media);
        skipped += 1;
        continue;
      }

      const fullPath = path.join(assetsRoot, project.mediapath || '', file);
      if (!fs.existsSync(fullPath)) {
        missing += 1;
        updatedMedias.push(media);
        continue;
      }

      const metadata = await sharp(fullPath).metadata();
      updated += 1;
      updatedMedias.push({ ...media, width: metadata.width, height: metadata.height });
      continue;
    }

    skipped += 1;
    updatedMedias.push(media);
  }

  project.medias = updatedMedias;
}

fs.writeFileSync(dataPath, `${JSON.stringify(projects, null, 4)}\n`, 'utf8');
console.log(JSON.stringify({ updated, skipped, missing }, null, 2));
