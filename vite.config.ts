import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  ssr: {
    noExternal: ["@convex-dev/better-auth"],
  },
  plugins: [tailwindcss(), tanstackStart(), viteReact(), tsConfigPaths()],
});

export default config;
