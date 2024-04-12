import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://forgotten-shore.netlify.app",
  integrations: [sitemap(), svelte()],
  vite: {
    ssr: {
      noExternal: ["smartypants"]
    }
  }
});