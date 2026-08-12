import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { allStandards, details } from "./src/data/certifications.ts";

const indexableCertSlugs = new Set(
  allStandards.filter((s) => Boolean(details[s.slug])).map((s) => s.slug)
);

export default defineConfig({
  site: "https://www.qualitynexus.in",
  // One canonical URL form sitewide. Paired with `"trailingSlash": true` in
  // vercel.json, which 308-redirects /about -> /about/ at the edge so Google
  // never sees two 200-OK variants of the same page.
  trailingSlash: "always",
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
