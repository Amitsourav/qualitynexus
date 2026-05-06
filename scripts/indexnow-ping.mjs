#!/usr/bin/env node
// IndexNow ping — submits the sitemap URL list to Bing/Yandex IndexNow.
// Run after each deploy: `node scripts/indexnow-ping.mjs`
// Requires: dist/sitemap-0.xml to exist (run after `npm run build`).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const HOST = "www.qualitynexus.in";
const KEY = fs.readFileSync(path.join(root, ".indexnow-key"), "utf8").trim();
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapPath = path.join(root, "dist", "sitemap-0.xml");
if (!fs.existsSync(sitemapPath)) {
  console.error(`sitemap not found at ${sitemapPath} — run "npm run build" first`);
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("no <loc> entries found in sitemap");
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

console.log(`Pinging IndexNow with ${urlList.length} URLs from sitemap...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`status: ${res.status} ${res.statusText}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
console.log(`✓ submitted ${urlList.length} URLs to IndexNow`);
