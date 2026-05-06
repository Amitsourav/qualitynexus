import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { allStandards, details } from "./src/data/certifications.ts";

const indexableCertSlugs = new Set(
  allStandards.filter((s) => Boolean(details[s.slug])).map((s) => s.slug)
);

export default defineConfig({
  site: "https://www.qualitynexus.in",
  integrations: [
    sitemap({
      filter: (page) => {
        const m = page.match(/\/certifications\/([^/]+)\/?$/);
        if (!m) return true;
        const slug = m[1];
        if (slug === "") return true;
        return indexableCertSlugs.has(slug);
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
