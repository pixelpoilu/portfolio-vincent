import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(process.cwd(), "home"),
  publicDir: resolve(process.cwd(), "home", "public"),
  plugins: [react()],
  build: {
    outDir: resolve(process.cwd(), "dist", "client"),
    emptyOutDir: true,
  },
});
