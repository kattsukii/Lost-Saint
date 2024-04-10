import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://forgotten-shore.netlify.app",
    integrations: [
        sitemap(),
        
    ],
    vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
	},
    output: "hybrid",
});
