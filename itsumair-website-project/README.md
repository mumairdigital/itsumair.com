# itsumair.com — Pre-Development Project Package

**Client:** Muhammad Umair
**Project:** Premium personal brand website
**Positioning:** Niche Local SEO + Website specialist for bathroom remodeling companies
**Primary market:** Tampa–St. Petersburg–Clearwater, Florida
**Status:** PLANNING COMPLETE — awaiting decision sign-off before development

---

## What this package is

This is the complete pre-development documentation set for the itsumair.com build. It contains every strategic decision, content brief, SEO specification, asset requirement, and technical constraint needed to build the site without stopping to make decisions mid-build.

**It contains no code.** Code is written in the development phase, in Claude Code, using `07-development-handoff/claude-code-project-brief.md` as the starting instruction.

---

## The one thing to understand before reading anything else

**The customer is the bathroom remodeling business owner. Not the homeowner.**

Every page, keyword, blog post, and image in this package targets remodeling company owners in Tampa Bay. If at any point during the build a decision drifts toward homeowner-facing content, it is wrong. See `01-strategy/positioning-and-messaging.md`.

Consequence: buyer keywords in this niche are very low volume. **This website is a conversion and credibility asset, not a traffic asset.** It exists to close prospects you reach through outreach, referral, and social. Judge it on booked calls and closed clients, not on sessions.

---

## Folder guide

| Folder | Contains | Read when |
|---|---|---|
| `00-project-management/` | Brief, scope, decision log, phases, launch checklist, risks | First. Start with `decisions-log.md` |
| `01-strategy/` | Positioning, persona, competitors, brand, voice, conversion | Before writing any copy |
| `02-architecture/` | Sitemap, URLs, navigation, page inventory, linking, wireframes | Before building any page |
| `03-content/` | Copy briefs for every page, location pages, FAQ library, microcopy | When writing content |
| `04-seo/` | Keyword map, metadata, schema spec, technical requirements, analytics | During build and pre-launch |
| `05-design/` | Design direction, tokens, accessibility, components, responsive | Before design/build |
| `06-assets/` | Image requirements, naming, alt text, photography brief, licensing | When sourcing assets |
| `07-development-handoff/` | Tech stack, Claude Code brief, acceptance criteria, QA, deployment | When starting development |
| `08-operations/` | Lead handling, email setup, security, maintenance, legal | Before and after launch |

---

## Recommended reading order

1. `00-project-management/project-brief.md`
2. `00-project-management/decisions-log.md` ← **8 open decisions must be closed before development**
3. `01-strategy/positioning-and-messaging.md`
4. `02-architecture/sitemap.md` and `page-inventory.md`
5. `03-content/content-plan-master.md`
6. `07-development-handoff/claude-code-project-brief.md`

---

## Build readiness gate

**Do not start development until:**

- [ ] All 8 open decisions in `decisions-log.md` are closed
- [ ] Copy is written for at least Homepage, 4 service pages, About, Contact, Audit
- [ ] Case study approach is resolved (real proof identified — see `03-content/testimonials-and-proof-tracker.md`)
- [ ] Images are sourced or licensed (see `06-assets/asset-sourcing-and-licensing.md`)
- [ ] Tech stack confirmed (see `07-development-handoff/tech-stack-recommendation.md`)
- [ ] Domain, hosting, and email decisions made (see `08-operations/email-and-domain-setup.md`)

---

## Things added to this plan that were not in the original brief

These were identified as necessary for a production-ready US-facing commercial website. Rationale for each is in its own file.

1. **ADA / WCAG accessibility compliance** — US service-business websites receive accessibility demand letters; this is a real legal exposure, not a nicety
2. **Privacy policy, terms, cookie consent, CCPA-aware handling** — required for a US-facing site collecting form data
3. **Email authentication (SPF, DKIM, DMARC)** — critical because cold outreach is a primary acquisition channel and poor auth destroys deliverability
4. **Call tracking and lead-source attribution** — you cannot sell measurement if you do not measure yourself
5. **Lead response SLA and CRM process** — speed to lead is the single biggest conversion variable
6. **Security, backup, and disaster recovery** — you sell website maintenance; being compromised would be fatal to credibility
7. **QA test plan and acceptance criteria** — defines "done"
8. **Post-launch content and maintenance cadence** — an abandoned site signals more than no site
9. **Google Business Profile eligibility issue** — flagged as a genuine constraint, see `04-seo/local-seo-entity-plan.md`
10. **Analytics dashboard as a sales demo** — your own reporting doubles as a client-facing demonstration
