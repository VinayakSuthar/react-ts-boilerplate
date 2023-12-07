/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-ts-boilerplate",
  plugins: [react()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
      "#assets": path.resolve(__dirname, "./src/assets"),
      "#components": path.resolve(__dirname, "./src/components"),
      "#pages": path.resolve(__dirname, "./src/pages"),
      "#utils": path.resolve(__dirname, "./src/utils"),
      "#types": path.resolve(__dirname, "./src/types"),
      "#public": path.resolve(__dirname, "./public"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to enable it, if you have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
  },
});
