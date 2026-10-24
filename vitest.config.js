import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/api.js", "src/main.js"],
    },
  },
});