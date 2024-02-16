import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: true,
  }),
  site: "https://www.tudor-zgimbau.dev",
  integrations: [tailwind(), sitemap()],
});
