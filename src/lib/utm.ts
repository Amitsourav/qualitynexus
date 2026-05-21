/**
 * UTM-tagging helper for tracking which page / channel produced a click.
 *
 * Convention:
 *   utm_source   = always "site"      (this is our own website)
 *   utm_medium   = surface that hosted the click - e.g. "cta-strip-primary",
 *                                                      "hero-cta",
 *                                                      "floating-fab"
 *   utm_campaign = page/feature that owns the surface - e.g. "home",
 *                                                            "psu-pillar",
 *                                                            "ranchi-lp"
 *
 * Only internal links get UTM appended. External URLs (wa.me, tel:, mailto:,
 * https://...) are left alone - these have their own tagging conventions.
 *
 * Once GA4 / Plausible is wired, every lead will be attributable to the
 * surface + page that produced it.
 */

export type UtmOpts = {
  source?: string;   // default "site"
  medium: string;    // required - the surface
  campaign?: string; // optional - page / feature
};

export function withUtm(href: string, opts: UtmOpts): string {
  // External / non-trackable schemes: leave unchanged.
  if (!href || !href.startsWith("/")) return href;

  const params = new URLSearchParams();
  params.set("utm_source",  opts.source   ?? "site");
  params.set("utm_medium",  opts.medium);
  if (opts.campaign) params.set("utm_campaign", opts.campaign);

  // Preserve hash if present.
  const [path, hash] = href.split("#");
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}${params.toString()}${hash ? `#${hash}` : ""}`;
}
