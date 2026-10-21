import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // served from https://wischli.github.io/mausehochzeit/
  base: "/mausehochzeit/",
  // jss (via @material-ui/core v3) reads `global.CSS`, which webpack 4 used to polyfill
  define: { global: "globalThis" },
  build: {
    // gh-pages deploys this directory
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
