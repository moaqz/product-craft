import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import type { UserConfig as VitestConfig } from "vitest/config";

const config: UserConfig & { test: VitestConfig["test"] } = {
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
};

export default config;
