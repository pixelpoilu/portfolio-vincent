import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const portfolioBuild = join(root, "dist", "portfolio-build", "client");
const portfolioOutput = join(
  root,
  "dist",
  "client",
  "portfolio.vincent-lepretre.fr",
);

await rm(portfolioOutput, { recursive: true, force: true });
await mkdir(portfolioOutput, { recursive: true });
await cp(portfolioBuild, portfolioOutput, { recursive: true });
await rm(join(root, "dist", "portfolio-build"), {
  recursive: true,
  force: true,
});

console.log(`[production] Portfolio autonome : ${portfolioOutput}`);
