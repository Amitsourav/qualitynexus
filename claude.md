# QualityNexus — Project Brief

This file is the persistent memory for the QualityNexus website project.
On a fresh session, read this file first.

---

## 1. What we're building

A marketing website for **QualityNexus** — an ISO certification consulting business (consulting / training / implementation / audits / 100+ ISO standards).

- **Reference site (design + structure inspiration):** https://growthmanagement.in/
- **Hard rule:** DO NOT copy-paste text from the reference site. Read it, understand it, rewrite everything in our own words.
- **Reference is for design layout, page structure, and information architecture only.**

---

## 2. Decisions made

- **Brand name:** QualityNexus
- **Scope:** All 8 page types (full site, not lean MVP)
- **Backend:** None. Static site. Contact form will use a third-party handler (Formspree / Web3Forms / Getform) — to be picked later.
- **Stack:** **Astro** (static site generator). Reasons: ships ~0 JS by default, generates the 120+ cert pages from a single template + JSON data, fast load times, easy to deploy free on Cloudflare Pages / Vercel / Netlify.
- **Performance priority:** Site MUST be lightweight and load fast. This is a hard constraint, not a nice-to-have. Implications:
  - Use Astro's static output, no client-side framework hydration unless absolutely needed
  - Optimize images (WebP/AVIF, responsive `srcset`, lazy-load below-the-fold)
  - Self-host fonts via `@fontsource` (no Google Fonts CDN render-block)
  - Inline critical CSS, defer the rest
  - No heavy animation libraries — use CSS transitions / `prefers-reduced-motion`
  - Target: Lighthouse Performance ≥ 95 on mobile
- **Color palette:** Must NOT reuse reference site's blue (#075486). Three options proposed (waiting on user pick):
  - **A.** Deep Teal `#0F4C5C` + muted gold accent `#E5B660` *(recommended)*
  - **B.** Charcoal `#0F172A` + emerald `#059669`
  - **C.** Royal blue `#1E3A8A` + sky `#0EA5E9` + cream section bg
- **Visual direction:** clean, professional, modern (2026 feel — not corporate cliché)
- **Typography direction:** Inter (body) + Plus Jakarta Sans / Manrope (headings) — replacing reference site's DM Sans / Red Hat Display
- **Button style:** 8–10px radius (reference uses 15px which we agreed feels dated), generous padding, subtle hover

---

## 3. Decisions still pending

- [x] ~~Color palette~~ — **switched to M (refined)**. Now: **Palette M — Hunter Green primary + Emerald accent + Gold buttons-only**. Primary `#0E3B2E`, primary-soft `#1F5538`, accent `#10B981` (emerald), accent-strong `#059669`, gold `#D4AF37` (CTA buttons only), gold-strong `#B8902E`, body `#475569`, headings `#0F172A`. Section bg `#F1F5F9`, bg-soft `#F8FAFC`, border `#E2E8F0`. *(palette swap history: B → D → A → B → C → D → E → F → H → M → M-refined. User saw initial M and rejected gold-everywhere ("why there is full gold acent i just need gold in buttons and primarly is green"). Refactored: introduced `--color-gold` / `--color-gold-strong` tokens used ONLY by `.btn-accent`, while `--color-accent` is now emerald green and powers everything else (eyebrows, pills, halos, hero gradient, gauge ring, mini-vizes, pulse dots, brand-mark text, donut). Other proposed-but-not-tried: G/Burgundy+Champagne, I/Navy+Mustard, J/Anthracite+Lime, K/Plum+Peach, L/Terracotta+Cream)*
- [x] ~~Stack~~ — **Astro** locked in
- [ ] Logo — user will provide later
- [x] ~~Real contact info~~ — **DONE 2026-05-05**. Sourced from Google Sites + cross-verified via 4 govt registration certificates (MCA/MSME/GST/StartupIndia). Email: Qualitynexusofficial@gmail.com. Phones: +91 97980 82076 (primary), +91 77177 62084, +91 82526 68667. Office: Trade Centre, 1st Floor, Main Road, SSVM School, Ormanjhi, Ranchi 835219, Jharkhand. CIN U70200JH2025PTC024534, GSTIN 20AABCQ1018L1ZW, UDYAM-JH-20-0101391.
- [x] ~~Hero tagline~~ — locked 2026-05-05: **"Your Trusted Partner for ISO, NABL, Training & Business Support"** (matches Google Sites; kept "Certified for Success" eyebrow). Earlier candidates "From gap to certificate. Without the busywork." and "ISO, NABL & PSU Consultancy – Fast Certification with Expert Support" rejected.
- [ ] Form handler — user will provide later
- [ ] **Stats Dashboard refinement** — built (`src/components/StatsDashboard.astro`) but user said "we do this later". Revisit copy / numbers / visualizations.
- [x] ~~Build out remaining pages (About, Services, Clients, Contact, Certifications listing)~~ — **DONE 2026-04-27**. All 5 stubs replaced with full content sections matching the homepage design language. Reusable `PageHero` and `CtaStrip` components introduced. CTA strip in `index.astro` refactored to use the shared component. Cert detail template still pending — listing page links to `/certifications/<slug>` which 404s for now.
- [x] ~~Cert detail template~~ — **DONE 2026-05-05**. Built `src/pages/certifications/[slug].astro` reading from `src/data/certifications.ts`. 91 unique standards (deduplicated across categories) → 91 detail pages. 8 flagship standards (ISO 9001, 14001, 45001, 27001, 13485, 22000, 50001, 17025) hand-authored with rich content (intro / 4–6 principles / 5 why-cards / 4 benefit-cards / audience). Other 83 fall back to a clean stub explaining detailed reference is in progress + 3 deliverables (gap analysis / roadmap / audit support) + CTA. Listing page now imports `categories` + `slugify` from the shared data module to avoid duplication. Build: 97 pages total in 703ms.

---

## 4. Site map (8 page types — confirmed)

1. **Home** — Hero + CTA → About blurb → 3-card "Our Offering" (Consulting / Training / Implementation) → 12-cert grid + "View More" → "Trusted Experts" feature block (4 bullets) → Client logo wall → CTA strip → Footer
2. **About** — Welcome intro → industry list → "Worldwide for ISO consulting" with mention of ISO/AS/TL/IATF/TQM/Six Sigma + auditor training
3. **Services** — 9 service cards: Consulting, Training, Implementation, Certification, Auditing, Retainership, Software Services, Cybersecurity Services, Product Certification & Licensing
4. **Clients** — Logo grid (~26 clients on reference site — we'll use placeholder logos / generic industry logos until real client list given)
5. **Certifications listing** — Grid of all standards (~120+: ISO 9001, 14001, 45001, 27001, 13485, 22000, 27701, 44001, 38500, 33000, 24143, 19770, 9241, 19600, 27019, 37101, 80001, 42001, 26000, 31000, SOX, SOC-1/2/3, GMP, GDP, etc.)
6. **Cert detail (single template, data-driven)** — H1 (standard name) → "What is X?" (1 paragraph + principles bullets) → "Why is X important?" (5 H4 cards) → "Benefits" (4 H4 cards: Customers / Operations / Management / Finance) → "Who can benefit?" → CTA
7. **Contact** — Address card, phone, email, WhatsApp CTA, form (name / email / contact / designation / org name / org address / business enquiry)
8. **Global footer** — Important Links + contact + socials + copyright

---

## 5. Reference site — design system captured (for inspiration only — DO NOT replicate exactly)

| Token | Reference site value | Our site |
|---|---|---|
| Primary | `#075486` blue | TBD (palette A/B/C) |
| Dark | `#1C2539` | TBD |
| Body text | `#5D666F` | TBD |
| Heading font | Red Hat Display 700 | Plus Jakarta Sans / Manrope |
| Body font | DM Sans | Inter |
| Button radius | 15px | 8–10px |

---

## 6. Content writing rules (non-negotiable)

1. **Never copy text from growthmanagement.in.** Read → understand → rewrite from scratch in fresh language.
2. Tone: confident, clear, professional. No fluff, no buzzword soup.
3. For ISO cert detail pages: write each one with genuine understanding of what the standard actually is, not paraphrased marketing-speak.
4. Avoid emojis in body copy unless the user asks (reference site uses checkmark / star / gear / chart / money emojis — we'll decide later if we keep that motif).

---

## 7. Pending work / next session checklist

When resuming:
1. Read this file.
2. Outstanding decisions: **logo** (user provides), **form handler** (Formspree/Web3Forms/Getform pick), **JRGB logo** asset.
3. Outstanding builds: **cert detail template** — single Astro page reading from cert JSON to generate ~95 detail pages (currently `/certifications/<slug>` 404s). **Stats Dashboard refinement** (deferred). Cycling client photo/logo carousel could use real images for the rest.
4. Push pending: ~10 uncommitted files since last `bbc51f6`. Wait for explicit "push it" before pushing.
5. Test contact form submission end-to-end once form handler is wired.

---

## 8. Conversation log (rolling — append, do not delete)

**Session 1 (2026-04-27):**
- User shared reference site growthmanagement.in. Asked to study design + content (rewrite content, do not copy).
- Researched all 8 page types of reference site, captured design tokens, sitemap, and per-page content structure.
- Confirmed: brand = QualityNexus, scope = all 8 pages, no backend, color must differ from reference's blue.
- User asked for palette suggestions for clean/professional look — proposed A (teal+gold), B (charcoal+emerald), C (royal+sky+cream). Awaiting pick.
- User created this claude.md to persist context for fresh sessions.
- Stack locked in: **Astro** (chosen for static output, zero-JS-by-default, automatic generation of 120+ cert pages from JSON).
- User emphasized site must be **light + fast-loading** — added performance constraints to section 2.
- User picked **Palette B (Charcoal + Emerald)** after viewing all three in `palette-preview.html`.
- Build started: scaffolded Astro project, wrote design tokens + global CSS, BaseLayout + Header + Footer, full Home page, and stubs for the other 6 pages (About, Services, Clients, Contact, Certifications listing). Installed dependencies and verified `npm run dev`.
- Home page redesign #1: added Icon component, HeroVisual (initial certificate stack), Process timeline, client marquee, tightened copy.
- Hero amped up: replaced certificate stack with "command center" — gauge ring, orbiting standard badges, connection lines, floating widgets, sparkles. Added status pill, gradient-shine H1, shimmer button, count-up stats, animated background glows. Initial 3D parallax tilt was removed because of layout fragility on narrow viewports + inline span sparkles defaulting to 300x150 SVG size — fixed by dropping `.hv-stage` wrapper, using explicit pixel heights, and `display: block` on all SVG/icon spans.
- Real photos added: downloaded 5 Unsplash images to `public/images/` (team-collab, data-laptop, office-modern, handshake, team-meeting). Used team-collab in a new "Meet the team" section with floating credibility badges; used office-modern as backdrop on the dark CTA strip.
- Stats Dashboard built (`src/components/StatsDashboard.astro`): 6 stat cards each with a unique mini-viz (timeline, progress ring, column chart, donut, sparkline, filled bar), all animating on scroll via IntersectionObserver. User deferred refinement — moved to pending tasks.
- **Palette swap to D (Indigo + Amber)**: updated tokens in `src/styles/global.css` and replaced all hardcoded emerald hex codes (`#34D399`, `#10B981`, `#059669`, `#047857`, rgba variants) across HeroVisual, StatsDashboard, index.astro, Footer, favicon, BaseLayout theme-color. Hero-accent gradient text rewritten to amber 3-stop. Donut chart's charcoal segment changed to indigo. CTA strip dark overlay changed from charcoal rgba to indigo rgba.
- **Palette swap to A (Deep Teal + Muted Gold)**: indigo `#312E81 → #0F4C5C` (teal), `#3730A3 → #136274`. Amber → gold: `#FBBF24 → #EBC474`, `#F59E0B → #E5B660`, `#D97706 → #C99B47`. Accent rgba `(245,158,11) → (229,182,96)`. Hero-accent gradient: `#EBC474 → #E5B660 → #F4D49B`. CTA strip overlay: indigo rgba → teal rgba `(15,76,92)/(19,98,116)`. Favicon, BaseLayout theme-color updated. Donut chart's primary segment now teal.
- **Palette swap back to B (Charcoal + Emerald)**: teal → charcoal (`#0F4C5C → #0F172A`, `#136274 → #1E293B`). Gold → emerald (`#EBC474 → #34D399`, `#E5B660 → #059669`, `#C99B47 → #047857`). Accent rgba `(229,182,96) → (5,150,105)`. Hero-accent gradient restored to original `#10B981 → #059669 → #34D399`. CTA overlay: teal rgba → charcoal rgba `(15,23,42)/(30,41,59)`. Favicon and BaseLayout reverted. Donut primary segment back to charcoal.
- **Palette swap to C (Royal Blue + Sky + Cream)**: charcoal → royal blue (`#0F172A → #1E3A8A`, `#1E293B → #1E40AF`). Emerald → sky (`#34D399 → #38BDF8`, `#059669 → #0EA5E9`, `#047857 → #0284C7`). Accent rgba `(5,150,105) → (14,165,233)`. Hero-accent gradient: `#38BDF8 → #0EA5E9 → #7DD3FC`. CTA overlay: charcoal rgba → royal-blue rgba `(30,58,138)/(30,64,175)`. Section bg, bg-soft, and border tokens shifted to cream/beige tones (`#FAF7F2`, `#FCFBF7`, `#E5E1D5`). Body color tightened to `#334155`. Donut primary segment now royal blue. Favicon and BaseLayout updated.
- **Palette swap to D (Indigo + Amber)**: royal blue → indigo (`#1E3A8A → #312E81`, `#1E40AF → #3730A3`). Sky → amber (`#38BDF8 → #FBBF24`, `#0EA5E9 → #F59E0B`, `#0284C7 → #D97706`). Accent rgba `(14,165,233) → (245,158,11)`. Hero-accent gradient: `#FBBF24 → #F59E0B → #FCD34D`. CTA overlay: royal-blue rgba → indigo rgba `(49,46,129)/(55,48,163)`. Cream section/bg/border tokens reverted to slate-cool: `#F1F5F9`, `#F8FAFC`, `#E2E8F0`. Body back to `#475569`. Donut primary segment now indigo. Favicon and BaseLayout updated.
- **Palette swap to E (Slate + Violet)**: indigo → slate (`#312E81 → #1E293B`, `#3730A3 → #334155`). Amber → violet (`#FBBF24 → #A78BFA`, `#F59E0B → #8B5CF6`, `#D97706 → #7C3AED`). Accent rgba `(245,158,11) → (139,92,246)`. Hero-accent gradient: `#A78BFA → #8B5CF6 → #C4B5FD`. CTA overlay: indigo rgba → slate rgba `(30,41,59,0.92)/(51,65,85,0.85)`. Donut primary segment now slate `#1E293B`. Footer brand-mark halo updated to violet rgba. Favicon (rect `#1E293B`, text `#8B5CF6`) and BaseLayout theme-color (`#1E293B`) updated. Build verified clean, no leftover Palette D refs.
- **Palette swap to F (Forest + Copper)** — *first warm-tone palette tried, distinct from all A-E*: slate → forest green (`#1E293B → #14532D`, `#334155 → #166534`). Violet → copper orange (`#A78BFA → #FB923C`, `#8B5CF6 → #EA580C`, `#7C3AED → #C2410C`). Accent rgba `(139,92,246) → (234,88,12)`. Hero-accent gradient: `#FB923C → #EA580C → #FED7AA`. CTA overlay: slate rgba → forest rgba `(20,83,45,0.92)/(22,101,52,0.85)` with copper radial glow. Donut primary segment now forest `#14532D`. Footer brand-mark halo updated to copper rgba. `--shadow-accent` updated from stale emerald `(5,150,105)` to copper `(234,88,12)`. Favicon (rect `#14532D`, text `#EA580C`) and BaseLayout theme-color (`#14532D`) updated. Build verified clean, no leftover Palette E refs.
- User asked "is there is more" → proposed 4 fresh palettes: G (Burgundy+Champagne), H (Onyx+Cyan), I (Navy+Mustard), J (Anthracite+Lime), plus optional warm K/L. User picked **H**.
- **Palette swap to H (Onyx + Electric Cyan)**: forest → onyx (`#14532D → #0A0A0A`, `#166534 → #171717`). Copper → cyan (`#FB923C → #22D3EE`, `#EA580C → #06B6D4`, `#C2410C → #0891B2`). Accent rgba `(234,88,12) → (6,182,212)`. Hero-accent gradient: `#22D3EE → #06B6D4 → #67E8F9`. CTA overlay: forest rgba → onyx rgba `(10,10,10,0.92)/(23,23,23,0.85)` with cyan radial glow. Donut primary segment now onyx `#0A0A0A`. `--shadow-accent` updated to cyan `(6,182,212)`. Favicon (rect `#0A0A0A`, text `#06B6D4`) and BaseLayout theme-color (`#0A0A0A`) updated. Build verified clean, no leftover Palette F refs. Note: H is the *highest contrast* palette tried — true black sections + saturated cyan, very tech-forward feel.
- User asked for "one more green with gold colour button" → introduced **Palette M (Hunter Green + Warm Gold)** as a new option distinct from A (teal+muted-gold) and F (forest+copper).
- **Palette swap to M (Hunter Green + Warm Gold)**: onyx → hunter green (`#0A0A0A → #0E3B2E`, `#171717 → #1F5538`). Cyan → warm gold (`#22D3EE → #E8C766`, `#06B6D4 → #D4AF37`, `#0891B2 → #B8902E`). Accent rgba `(6,182,212) → (212,175,55)`. Accent-soft/tint alpha bumped slightly (.14→.16, .08→.09) for gold visibility on light bg. Hero-accent gradient: `#E8C766 → #D4AF37 → #F4D580`. CTA overlay: onyx rgba → hunter rgba `(14,59,46,0.92)/(31,85,56,0.85)` with gold radial glow at 0.22 alpha (bumped from 0.18 because gold reads softer than cyan). Donut primary segment now hunter `#0E3B2E`. `--shadow-accent` updated to gold `(212,175,55)` at 0.24 alpha (bumped). Favicon (rect `#0E3B2E`, text `#D4AF37`) and BaseLayout theme-color (`#0E3B2E`) updated. Build verified clean, no leftover Palette H refs. Note: gold buttons read more "premium / luxury / heritage" vs A's muted gold which felt more editorial.
- **M refinement (2026-04-27)** — User saw screenshot of initial M and pushed back: "why there is full gold acent i just need gold in buttons and primarly is green". Architectural change: split accent into TWO tokens. (1) `--color-accent` now emerald green `#10B981` / strong `#059669` — used by everything decorative (eyebrows, pills, halos, gradients, gauge ring, status pulse, mini-vizes, brand-mark text, donut primary, footer halo, etc.). (2) New `--color-gold #D4AF37` + `--color-gold-strong #B8902E` + `--shadow-gold` tokens — used *only* by `.btn-accent` (override in global.css). Bulk-swapped all hardcoded gold hex (`#E8C766`, `#D4AF37`, `#B8902E`, `rgba(212,175,55,*)`) → emerald (`#34D399`, `#10B981`, `#059669`, `rgba(16,185,129,*)`) across HeroVisual, StatsDashboard, Footer, index.astro. Hero-accent gradient back to emerald 3-stop (`#34D399 → #10B981 → #6EE7B7`). CTA overlay radial glow back to emerald at 0.18 alpha. Favicon kept gold-on-green (small brand mark benefits from contrast). Result: page is overwhelmingly green with only the two CTA buttons ("Get in touch" + "Book a free call") in gold, exactly per the user's intent.
- User: "but there is vrey less gold colour things" → bumped gold presence at brand/emphasis moments (without going back to gold-everywhere). Changes: hero-accent gradient → gold 3-stop (`#E8C766 → #D4AF37 → #F4D580`); `.eyebrow` global color → `--color-gold-strong`; brand-mark "QN" in Header + Footer → `var(--color-gold)` text on green bg (footer halo bg also restored to gold rgba); hero stats numbers (`100+`, `25+`, `100%`) → `--color-gold-strong`. Decorative illustrations (gauge, halos, mini-vizes, pulse) stay green. Mental model now: **green = illustrations, gold = brand voice + key emphasis + CTAs**.
- User: "okay so i don't what secondery colorur we use but primarly we using green colour" → confirmed green primary; offered 5 secondary options (Gold/Cream/Bronze/Coral/White-with-green-text). User: "okay then try gold" → kept current state (green + gold) since already live.
- **All 5 stub pages built (2026-04-27)** — User: "now make all pages with as homepage design". Built About, Services, Clients, Contact, Certifications listing with consistent design system. Two new shared components introduced: (1) `src/components/PageHero.astro` — eyebrow + title + optional gold-gradient accent + lede, with the same grid-bg + glow treatment as the home hero but smaller padding. (2) `src/components/CtaStrip.astro` — extracted from index.astro, takes optional heading/body/ctaLabel/ctaHref props. index.astro refactored to import and use `<CtaStrip />` (cleaner). Page content: **About** (page hero → story 2-col with founder-quote sticky card → 4 principles grid → 8 industry chips → dark "by the numbers" section with 4 stats → CTA), **Services** (page hero → 9-card grid 3×3 with bullets → 5-step engagement flow → CTA), **Clients** (page hero → 24-cell client wordmark grid using initials in green/gold mark + name → 6-card sector breakdown with counts → 3-card testimonial grid with gold quote-mark → CTA), **Contact** (page hero → 4-card channel grid Email/Phone/WhatsApp/Office → split form-grid with promises list + full contact form name/designation/email/phone/org/address/message → FAQ split layout, no CTA strip on contact since the page IS the CTA), **Certifications listing** (page hero → sticky category nav with 11 anchor links + total-count label → 11 alternating section-soft category sections each with icon + eyebrow + h2 + blurb + 3-col cert grid where each card is a link to /certifications/&lt;slug&gt; showing code-pill + name + arrow → CTA). Total ~95 standards listed across 11 categories. Certs link to detail pages that don't exist yet (will 404; cert detail template is the next pending task).
- **Inner page visual upgrade (2026-04-27)** — User: "all pages are not look like homepage and except homepage there is no image, ghraphics and illustrator we have to put that". Two-step upgrade: (1) Refactored `PageHero.astro` to support a `hasVisual` prop + named `visual` slot — when set, the hero becomes a 2-column grid with the right side reserved for a custom illustration, mirroring the home hero pattern. Added gold + emerald glow blobs (alternating animation) to all page heros. (2) Built a unique hero illustration for each inner page, all CSS-only with reduced-motion support: **About** — central "Senior · Lead Auditor" gold-on-green seal inside two dashed orbital rings, four floating credential badges (ISO 9001/27001/14001/45001) at corners, top pill "IRCA · Exemplar Global certified" with pulsing dot, bottom pill "12+ years average sector experience". **Services** — orbital constellation: 9 service icons positioned around a dashed outer ring + solid inner ring, central "Engagement · 9 services · 1 plan" hub with pulsing ripple, top stat card "+9 service paths", bottom "Available now" indicator. **Clients** — inline SVG globe with gradient fill + 4 ellipse latitude/longitude lines + 6 pulsing gold dots representing client locations, 5 floating client cards with QN-style initials marks at orbital positions, bottom "Live · 4 active engagements" pulsing pill. **Contact** — 3-card incoming-message stack (Priya/Rohan/Sara) with avatars, time stamps, enquiry preview, and ISO-tag chips, slightly rotated and animated with vertical float, bottom "Live · 3 enquiries today" pulsing pill. **Certifications** — central featured "ISO 9001 Certified" certificate card with gold accent border + meta strip (Issued 2026 / 3yr Validity) + green seal, two smaller rotated cert cards (ISO 27001, ISO 14001) behind it, top "Stage 2 audit · Passed" pill, bottom "100+ standards covered" pulsing pill. Content section enhancements: **About** — story section now has handshake.jpg photo with overlapping dark founder-quote card + checkmark bullet list; principles cards got gold ghost numbers (01–04); industries now in a side-by-side intro+grid layout with link-arrow CTA; dark "by the numbers" section now uses team-meeting.jpg as 10%-opacity background with frosted-glass cred cards. **Services** — added a "proof bar" strip just below hero (60 days / 100% / 48h with gold supnumbers), service cards got ghost numbers, new "How we deliver" section with data-laptop.jpg photo + animated overlay card showing "ISO 27001 Stage 1 prep" progress meter + 3 commitment bullets with green icon halos, engagement flow steps now have icons + dashed gold SVG arrows between cards. **Clients** — "reach bar" with 350+/24/11/98% strip below hero, client cells unchanged, sectors now visualized as horizontal progress bars (gradient green fill, animated on load) instead of static cards, testimonials section now has team-collab.jpg as faded background + circular avatars on each testimonial. **Contact** — channels got bigger icon halos + gold arrow indicators, contact form now in 2-col layout with sticky office-modern.jpg side-card (overlapping gradient + "Replies within 48h" pulsing tag + checklist), FAQ items got numbered chips. All visuals are CSS-only (no client JS), respect reduced-motion, work on mobile (heros stack to single column at 980px, simplified positioning at 640px). Build verified clean.

**Session 2 (2026-05-05) — Real photos + verified address from Google Sites:**
- User: "can you download that" (referring to seminar/hall photos from https://sites.google.com/view/qualitynexus/home). Earlier curl attempts hit Google's 403 (URLs are short-lived signed `lh3.googleusercontent.com/sitesv/...` tokens that need a fresh session). Fix that worked: (1) fetch the Sites page WITH a cookie jar (`-c`/`-b`), (2) extract URLs in same shell pass, (3) immediately download each image using the same cookie jar + `Sec-Fetch-Dest: image`, `Sec-Fetch-Mode: no-cors`, `Sec-Fetch-Site: cross-site`, and `Referer: https://sites.google.com/view/qualitynexus/home`. All 22 images downloaded successfully (18KB–676KB range).
- Curated 22 → 7 keepers. Real photos: `seminar-training.jpg` (training-hall U-shape with projector — the only legit seminar shot), `field-engineer.jpg` (consultant in helmet at power plant), `lab-audit.jpg` (laboratory bench). Real govt certs: `cert-msme-udyam.jpg`, `cert-startup-india.jpg`, `cert-mca-incorp.jpg`, `cert-gst.jpg`. Deleted: 15 stock graphics (Export/Training/Risk Assessment text overlays), ISO logos, QN logo render, generic illustrations.
- Rebuilt `about.astro` events gallery: dropped the 6-tile placeholder bento, replaced with 3-tile gallery (1 feature + 2 standard) using only the real photos. Each tile has gradient caption overlay tagging it (Training session / On-site audit / NABL accreditation). Added new "Recognized & registered" section after — 4-up grid of govt cert thumbnails with subtle frame + caption, fall back to 2-up at 860px and 1-up at 480px.
- **Verified office address surfaced from cert images.** MCA Certificate of Incorporation revealed: CIN U70200JH2025PTC024534, incorporated 09/04/2025, registered office "TRADE CENTRE, FIRST FLOOR, MAIN ROAD, SSVM SCHOOL, Ormanjhi, Ranchi- 835219, Jharkhand". MSME Udyam: UDYAM-JH-20-0101391. GSTIN: 20AABCQ1018L1ZW. PAN: AABCQ1018L. All confirm the same Ormanjhi/Ranchi location. Updated `contact.astro`: replaced "More numbers" channel with "Office" pointing to a Google Maps query for the Trade Centre address; alt phone numbers (+91 77177 62084, +91 82526 68667) moved into the Phone channel's note.
- Build clean (6 pages, 582ms). All 7 image references resolve. Couldn't visually verify in browser (Chrome extension not connected). User instruction "use all data except Quality Nexus Private Limited" interpreted as: keep "QualityNexus" brand (no "Private Limited" suffix) but legitimately use the verified address/registration numbers from the official documents.
- **Pending push to GitHub** — uncommitted files since last push (Google Sites data integration + gallery + cert detail template). Awaiting user "push it" before pushing.
- **Cert detail template (autonomous loop, same session)** — Built `src/pages/certifications/[slug].astro` + `src/data/certifications.ts`. Listing page's inline `categories` array moved to the data module so listing and detail share one source of truth. `getStaticPaths` over `allStandards` (deduped — ISO 13485 etc. appear in multiple categories but generate one page). 8 flagship standards (ISO 9001, 14001, 45001, 27001, 13485, 22000, 50001, 17025) authored with structured content per section 4 site-map: intro paragraph, 4–6 key principles, 5 "why it matters" cards, 4 audience-segmented benefit cards, audience paragraph. Content written from genuine understanding (per CLAUDE.md rule 3 — no marketing-speak); each standard's intro is specific to what that standard actually requires. Other 83 standards render a clean stub: "Detailed reference in progress" + 3 service-deliverable cards (gap analysis / roadmap / audit support) + CTA — honest about being unauthored rather than auto-generating filler. Page structure: hero with breadcrumb + gold-gradient code + emerald-tagged category + side info card with seal + meta strip → principles list (2-col bullet grid) → why cards (3-col) → benefits cards (4-col, hunter-green icon halos) → dark gradient audience block → CtaStrip. Stub variant skips middle sections (hero + stub-card + CtaStrip only). Build: 97 pages in 703ms.

---

## 9. Working directory

`/Users/asourav/Desktop/qualitynexus`

```
qualitynexus/
├── claude.md                       # this file
├── palette-preview.html            # standalone palette comparison (kept for reference)
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── .gitignore
├── public/
│   ├── favicon.svg                 # placeholder QN mark, replace when real logo arrives
│   └── images/
│       ├── *.jpg                   # Unsplash stock (team-collab, data-laptop, office-modern, handshake, team-meeting)
│       ├── clients/                # Real PSU client logos (IOCL, HAL, NHPC, GAIL, NRL, HCL, Balmer Lawrie); JRGB pending
│       └── events/                 # 3 real photos (seminar/field/lab) + 4 govt certs (MCA/MSME/GST/StartupIndia)
├── src/
│   ├── styles/
│   │   └── global.css              # design tokens (palette B), base styles, utilities
│   ├── layouts/
│   │   └── BaseLayout.astro        # shared head + Header + Footer
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro              # SVG line-icon dispatcher
│   │   ├── HeroVisual.astro        # home command-center hero illustration
│   │   ├── StatsDashboard.astro    # home "by the numbers" with 6 mini-vizes
│   │   ├── PageHero.astro          # shared inner-page hero (used on About/Services/Clients/Contact/Certs)
│   │   └── CtaStrip.astro          # shared bottom-of-page CTA strip
│   ├── data/
│   │   └── certifications.ts       # categories + standards + flagship details (shared between listing + [slug])
│   └── pages/
│       ├── index.astro             # FULL home page
│       ├── about.astro             # FULL — story / 4 principles / industries / events gallery / cert proof / dark "by the numbers"
│       ├── services.astro          # FULL — 9-card grid / 5-step engagement flow
│       ├── clients.astro           # FULL — 24 client wordmarks / 6 sector cards / 3 testimonials
│       ├── contact.astro           # FULL — 4 channels / contact form / FAQ
│       └── certifications/
│           ├── index.astro         # FULL — sticky cat-nav / 11 categories / 91 standards
│           └── [slug].astro        # dynamic — 91 detail pages (8 hand-authored, 83 stub fallback)
├── dist/                           # build output (gitignored, 97 pages)
└── node_modules/                   # gitignored
```

No git repo initialized yet. Build verified: 6 pages, ~3.9 KB gzipped HTML for home, zero client JS shipped.

### How to run
```bash
cd /Users/asourav/Desktop/qualitynexus
npm run dev      # local dev server with HMR
npm run build    # production build into dist/
npm run preview  # preview production build
```
