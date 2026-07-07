import type { Config } from "@react-router/dev/config";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  getCanonicalUrl,
  getPrerenderPaths,
  SITE_URL,
} from "./src/seo/routeSeo";

const prerenderPaths = getPrerenderPaths();

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderPaths
  .map((path) => `  <url><loc>${getCanonicalUrl(path)}</loc></url>`)
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export default {
  appDirectory: "src",
  buildDirectory: "dist/portfolio-build",
  ssr: false,
  future: {
    v8_middleware: true,
    v8_viteEnvironmentApi: true,
    v8_splitRouteModules: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
  prerender: {
    paths: prerenderPaths,
    concurrency: 4,
  },
  async buildEnd({ reactRouterConfig }) {
    const clientDirectory = resolve(reactRouterConfig.buildDirectory, "client");
    await mkdir(clientDirectory, { recursive: true });
    await Promise.all([
      writeFile(resolve(clientDirectory, "sitemap.xml"), sitemapXml, "utf8"),
      writeFile(resolve(clientDirectory, "robots.txt"), robotsTxt, "utf8"),
    ]);
  },
} satisfies Config;
