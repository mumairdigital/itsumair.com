# Claude Code Project Brief — itsumair.com

**Read this file first, before touching any other file in this project folder.**
This is the entry point. Every other folder (00–06) is reference material this brief points to.

---

## 1. What you are building

A premium, conversion-focused personal brand website for Muhammad Umair, a Local SEO and
website specialist who works exclusively with bathroom remodeling companies in the
Tampa–St. Petersburg–Clearwater, FL metro. The audience is remodeling business owners —
never homeowners. See `01-strategy/positioning-and-messaging.md` before writing any copy.

This is a **conversion asset, not a traffic asset**. Every page should be judged on whether
it would make a skeptical Tampa contractor pick up the phone or fill in the audit form —
not on word count or keyword density for its own sake.

---

## 2. Tech stack (locked)

| Layer | Choice |
|---|---|
| Framework | Next.js 14+, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Local markdown/MDX files in `/content/`, no headless CMS at launch |
| Forms | React Hook Form, submit to Formspree or a simple API route to Resend |
| Booking | Cal.com embed (React embed component) |
| Hosting | Vercel |
| Analytics | Google Analytics 4 + Microsoft Clarity |
| Images | next/image, all served as WebP |
| Icons | lucide-react |

No WordPress, no Elementor, no page builder. Static generation (`generateStaticParams`)
for all location and blog pages.

---

## 3. Contact strategy (locked — important, do not deviate)

- **No phone number displayed anywhere on the site.**
- **WhatsApp** is the primary fast-contact channel, but the number itself is never shown as text.
  Every WhatsApp touchpoint is a button/link using a `wa.me` deep link with a pre-filled message,
  e.g. `https://wa.me/92XXXXXXXXXX?text=Hi%20Umair%2C%20I%27d%20like%20to%20talk%20about...`
  Store the number in an environment variable (`NEXT_PUBLIC_WHATSAPP_NUMBER`), never hardcode
  it inline in component markup, so it's a one-line change and easy to redact from screenshots.
- **Primary conversion goal is the audit/contact form** — WhatsApp and email are secondary,
  lower-friction options for people who don't want to fill a form yet.
- **Email**: hello@itsumair.com (set up before launch; see `08-operations/` once populated).
- Every page's CTA hierarchy: 1) Book/Audit form → 2) WhatsApp button → 3) Email link.
  Never lead with WhatsApp as the primary CTA — it should read as "prefer WhatsApp? tap here"
  next to the main form, not compete with it.

---

## 4. Site map and build order

Full sitemap: `02-architecture/sitemap.md`. Full URL rules: `02-architecture/url-structure.md`.
Canonical host: `https://itsumair.com` (non-www).

Build in this order — each phase should be a working, deployable increment:

**Phase 1 — Foundation**
1. Project scaffold, Tailwind config with tokens from `05-design/design-tokens-spec.md`
2. Layout shell: Header, Footer, mobile nav (`05-design/component-inventory.md`)
3. Design system components: buttons, inputs, cards, section wrapper, container

**Phase 2 — Core pages**
4. Homepage (`03-content/copy-briefs/homepage.md`, wireframe in `02-architecture/wireframe-specs/homepage-wireframe.md`)
5. `/audit/` — primary conversion page (`03-content/copy-briefs/audit-landing.md`)
6. `/about/` (`03-content/copy-briefs/about.md`)
7. `/contact/` (`03-content/copy-briefs/contact.md`)
8. `/pricing/` (`03-content/copy-briefs/pricing.md`)

**Phase 3 — Services**
9. `/services/` hub + 4 service pages (`03-content/copy-briefs/service-*.md`)
10. `/bathroom-remodeler-marketing/` pillar page (`03-content/copy-briefs/pillar-bathroom-remodeler-marketing.md`) — most important SEO page on the site, build carefully

**Phase 4 — Areas and proof**
11. `/areas/` hub + 6 location pages (`03-content/location-pages/`)
12. `/results/` hub + case studies (`03-content/copy-briefs/case-study-template.md`, real content from `03-content/testimonials-and-proof-tracker.md`)

**Phase 5 — Blog and legal**
13. `/blog/` hub + first single blog post, fully designed (see §6 below — do not stub this)
14. `/privacy-policy/`, `/terms/`, `/accessibility/` (`03-content/legal-pages-brief.md`)

**Phase 6 — Technical SEO and QA**
15. Metadata for every page (`04-seo/metadata-master.md`)
16. JSON-LD schema (`04-seo/schema-specification.md`)
17. Sitemap.xml, robots.txt, redirects (`04-seo/robots-sitemap-and-redirects.md`)
18. Accessibility pass against `05-design/accessibility-requirements.md`
19. Core Web Vitals check, responsive check against `05-design/responsive-behavior-spec.md`

---

## 5. Design direction

Full spec: `05-design/design-direction.md`, `05-design/design-tokens-spec.md`.

- Brand color `#6700C8` — buttons, large headings (24px+ bold), section backgrounds only.
  **Never** as small body text on white (fails WCAG AA contrast).
- Minimum body text 16px — audience skews 45–65, do not go smaller.
- Two type weights maximum, one typeface family ideally.
- Subtle shadows only, consistent border-radius scale.
- This should look like a premium boutique consultancy, not a template SaaS site. Avoid
  generic AI-website tells: no purple-to-blue gradients as a default, no floating 3D blob
  shapes, no stock "team high-fiving" photography.

---

## 6. Image and asset strategy (locked)

**Photography direction: graphic and screenshot-led. No stock bathroom photography, no
generic contractor stock photos.** Full breakdown of exactly what's needed and why is in
`06-assets/asset-requirements-and-image-list.md` — read that before building any component
that expects an image prop.

Where a real photo isn't available yet, build the component to accept an image but use a
clean placeholder (solid brand-tinted background, no placeholder.com/lorem ipsum text) so
swapping in the real asset later is a one-line change, not a rebuild.

---

## 7. Blog at launch (locked)

Ship with exactly **one** fully designed, fully written blog post at launch — not a stub,
not a "coming soon" grid. It should demonstrate the blog template completely: hero image,
author bio box, table of contents if long-form, related-post block, and correct schema.
Cadence beyond launch is not yet committed and should not be hardcoded anywhere
(no "new post every 2 weeks" copy on the site).

---

## 8. Booking (locked)

Cal.com embed on `/audit/` (primary) and optionally `/contact/`. Use the React embed
package (`@calcom/embed-react`), inline/rendered embed style (not popup), styled to match
the design tokens as closely as Cal.com's theming allows. Timezone auto-detection on.

---

## 9. What "done" looks like (acceptance criteria)

- [ ] All ~28 launch pages built and reachable within 3 clicks of homepage
- [ ] Every page passes Lighthouse: Performance 90+, Accessibility 95+, SEO 100
- [ ] Every image has descriptive alt text (see `06-assets/asset-requirements-and-image-list.md`)
- [ ] WCAG 2.1 AA verified on all color combinations actually used
- [ ] All forms validate, show accessible error states, and submit successfully
- [ ] WhatsApp links open correctly on mobile and desktop with pre-filled message
- [ ] Cal.com embed loads and books correctly across 3 major timezones
- [ ] JSON-LD validates in Google's Rich Results Test for every applicable page
- [ ] No broken internal links, no orphan pages
- [ ] Mobile, tablet, desktop breakpoints all checked against `05-design/responsive-behavior-spec.md`
- [ ] No fabricated stats, no invented testimonials, no placeholder proof left live (hard rule — see `00-project-management/decisions-log.md`)

---

## 10. Reading order for Claude Code

If context allows, read in this order before generating any code:
1. This file
2. `01-strategy/positioning-and-messaging.md`
3. `02-architecture/sitemap.md` + `url-structure.md` + `navigation-spec.md`
4. `05-design/design-tokens-spec.md` + `component-inventory.md`
5. The specific copy brief / wireframe for whatever page is being built next

Do not try to load all ~60 files into context at once. Load this brief + the 3–4 files
relevant to the current build phase.
