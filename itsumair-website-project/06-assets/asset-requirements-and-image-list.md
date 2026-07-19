# Asset Requirements and Image List

Direction locked: **graphic and screenshot-led, not stock photography.** For this niche,
a real Search Console screenshot or a clean custom graphic outperforms stock bathroom
photos on credibility — and carries zero licensing risk. Reserve real photography for
a small number of spots where a photo is genuinely more convincing than a graphic.

Total at launch: **approximately 30–35 image assets.** Not all are required to launch —
required-for-launch items are marked ✅. Everything else can ship as a clean placeholder
and be swapped in later.

---

## 1. Brand assets (required)

| Asset | Spec | Notes |
|---|---|---|
| Logo (light) | SVG, transparent | For dark/brand-colored backgrounds |
| Logo (dark) | SVG, transparent | For white/light backgrounds |
| Favicon | 32×32, 16×16, .ico + .png | |
| Apple touch icon | 180×180 | |
| Open Graph default image | 1200×630, PNG/JPG | Branded fallback for pages without a custom OG image |

✅ Required before launch.

---

## 2. Homepage (required)

| Asset | Count | Type |
|---|---|---|
| Hero visual | 1 | Custom graphic — abstract representation of local search visibility (e.g. a stylized map-pin/ranking graphic in brand color), NOT a photo of a bathroom |
| Problem section icons | 3 | Simple line icons (lucide-react covers this — no image asset needed) |
| Process step icons | 3–4 | Line icons, same as above |
| Proof/results screenshot | 1–2 | Real Search Console or GBP Insights screenshot, cropped and cleaned (from MH Tiles or adjacent work) |
| Service preview thumbnails | 4 | Small custom graphics, one per service, consistent style |

✅ Hero visual and at least 1 proof screenshot required before launch.

---

## 3. Case studies / results (required)

This is the highest-leverage image category — proof sells this site.

| Asset | Count | Type |
|---|---|---|
| Before/after Search Console screenshots | 2–4 per case study | Real, cropped to remove irrelevant UI, annotated if helpful |
| Before/after GBP Insights screenshots | 1–2 per case study | Real |
| Site screenshot (before) | 1 per case study | Real, if the old site still exists or is archived |
| Site screenshot (after) | 1 per case study | Real |
| Client/project photo | 0–1 per case study | Only if you have real, rights-cleared photography (e.g. your own MH Tiles showroom work) |

✅ At minimum, the 1–2 case studies you're launching with need real before/after screenshots.
No stock images in this section under any circumstances — this is the proof section and
anything that looks staged undermines it.

---

## 4. Service pages (4 pages)

| Asset | Count | Type |
|---|---|---|
| Header graphic per service | 4 (1 each) | Custom icon-led graphic, consistent style across all 4 |
| Process/workflow diagram | 1 per service, optional | Simple custom diagram if it clarifies the process |

Not required for launch — can ship with a clean brand-tinted placeholder and consistent icon.

---

## 5. Pillar page (`/bathroom-remodeler-marketing/`)

| Asset | Count | Type |
|---|---|---|
| Hero graphic | 1 | Custom, can reuse/adapt homepage hero style |
| Supporting diagrams/charts | 2–4 | Custom graphics illustrating concepts in the guide (e.g. a funnel diagram, a ranking-factors chart) |

Not required for launch, but this page benefits most from visuals since it's long-form.

---

## 6. Location pages (6 pages)

| Asset | Count | Type |
|---|---|---|
| Location header graphic | 6 (1 each) or 1 shared template | Custom — a stylized map/skyline treatment per city, not stock skyline photos. A single reusable template with the city name swapped is acceptable and recommended for time. |

Not required for launch.

---

## 7. Blog (1 post at launch, required)

| Asset | Count | Type |
|---|---|---|
| Hero image | 1 | Custom graphic or high-quality relevant photo, per the post topic |
| Author headshot | 1 | Real photo of Umair, professional, consistent crop used sitewide |
| In-post supporting images | 1–2 | If the post references a process or example |

✅ Required — the single launch blog post must be fully imaged, not a stub.

---

## 8. About page (required)

| Asset | Count | Type |
|---|---|---|
| Headshot | 1 | Real photo of Umair — same one used as author headshot for consistency |
| Supporting work photo | 0–1 | Optional — a real photo of you at work (e.g. laptop, workspace) if available |

✅ Headshot required — this is a personal brand site; a real face matters here more than
almost anywhere else on the site.

---

## 9. Pricing / testimonials

| Asset | Count | Type |
|---|---|---|
| Testimonial author photo | 1 per testimonial secured | Real, with permission. If unavailable, use initials avatar, never a stock headshot pretending to be a client. |

---

## Naming and technical spec (applies to all images)

- Format: WebP for photos and complex graphics, SVG for icons/logos/simple graphics
- Naming: lowercase-hyphenated, descriptive — e.g. `mh-tiles-search-console-before-after.webp`, not `image1.webp`
- Alt text: every image needs a descriptive, specific alt attribute — never `"image"` or the filename. Written per §component when the page copy is drafted.
- Compression target: under 200KB per image where possible; hero images under 300KB
- Dimensions: supply at 2x the largest rendered size for retina, let `next/image` handle responsive sizing
- Never use a client's or competitor's photography without explicit permission

---

## Priority order if time/budget is limited

1. Logo + favicon (brand assets)
2. Real Search Console/GBP screenshots for your 1–2 launch case studies
3. Your own headshot (About + blog author box)
4. Homepage hero graphic
5. Blog post hero + supporting images
6. Everything else (service icons, location headers) — can launch with placeholders
