// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
