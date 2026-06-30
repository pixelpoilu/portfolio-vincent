import { route, type RouteConfig } from "@react-router/dev/routes";

export default [route("*?", "framework-entry.tsx")] satisfies RouteConfig;
