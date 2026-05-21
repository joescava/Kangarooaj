// Central Vite/TanStack configuration for GitHub Pages deployment.
// The Lovable preset owns the React, TanStack Start, Tailwind, path alias and Vite plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: "/Kangarooaj/",
  },
});
