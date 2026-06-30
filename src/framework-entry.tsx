import type { MetaFunction } from "react-router";

import App from "./App";
import defaultSocialImage from "./assets/images/hero/portrait-bw.webp";
import {
  getCanonicalUrl,
  getSeoRoute,
  SITE_NAME,
  SITE_URL,
} from "./seo/routeSeo";

const projectImageModules = import.meta.glob<string>(
  "./assets/images/projects/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default", query: "?url" },
);

const getAbsoluteImageUrl = (imageAssetPath?: string) => {
  const imageUrl =
    (imageAssetPath && projectImageModules[imageAssetPath]) ?? defaultSocialImage;
  return new URL(imageUrl, SITE_URL).toString();
};

// React Router route modules intentionally export metadata beside the component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = ({ location }) => {
  const seo = getSeoRoute(location.pathname);

  if (!seo) {
    return [
      { title: `Page introuvable | ${SITE_NAME}` },
      { name: "robots", content: "noindex, nofollow" },
    ];
  }

  const canonicalUrl = getCanonicalUrl(seo.path);
  const socialImageUrl = getAbsoluteImageUrl(seo.imageAssetPath);

  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:type", content: seo.openGraphType },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: socialImageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: socialImageUrl },
  ];
};

export default function FrameworkEntry() {
  return <App />;
}
