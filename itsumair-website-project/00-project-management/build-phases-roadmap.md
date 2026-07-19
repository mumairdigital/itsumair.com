# Build Phases Roadmap

Sequenced so that nothing is built before its dependencies are resolved. Durations are working estimates for a solo builder using Claude Code.

## Phase 0 — Decision closure (blocking)
**Goal:** close all 9 open decisions
- Review decisions-log.md and record each decision
- Confirm tech stack
- Confirm photography direction and budget
**Exit criteria:** decisions-log.md has no blank Decision fields

## Phase 1 — Content production
**Goal:** all launch copy written and approved
- Write copy from 03-content/copy-briefs/ (order: Homepage → Services → About → Audit → Contact → Pillar → Pricing → Case studies → Locations → Blog)
- Run every page against 01-strategy/tone-of-voice-and-copy-rules.md
- Finalize FAQ selections from 03-content/faq-library.md
**Exit criteria:** every page in 02-architecture/page-inventory.md has approved copy

## Phase 2 — Asset preparation
**Goal:** every required image sourced, licensed, optimized, named
- Professional headshot (blocking — appears on 5+ pages)
- Source or license all images per 06-assets/image-requirements-master.md
- Compress, convert to WebP/AVIF, name per convention, write alt text
**Exit criteria:** 06-assets checklist fully ticked

## Phase 3 — Design system setup
**Goal:** tokens, components, and layouts defined before pages are built
- Implement design tokens per 05-design/design-tokens-spec.md
- Build component inventory per 05-design/component-inventory.md
- Verify contrast compliance for #6700C8 usage
**Exit criteria:** all components render and pass contrast checks

## Phase 4 — Page build
**Goal:** all 22 pages built
Order: Homepage → global layout (header/footer/nav) → Services → About → Contact/Audit → Pillar → Results → Pricing → Locations → Blog → Legal → 404
**Exit criteria:** every page matches its wireframe spec

## Phase 5 — SEO implementation
- Metadata from 04-seo/metadata-master.md
- Schema from 04-seo/schema-specification.md
- Internal links from 02-architecture/internal-linking-map.md
- Sitemap, robots.txt, canonicals
**Exit criteria:** all pages validate in Rich Results Test; no orphan pages

## Phase 6 — QA and optimization
- Run 07-development-handoff/qa-test-plan.md in full
- Core Web Vitals on real mobile hardware
- Accessibility audit
- Form and booking end-to-end tests
**Exit criteria:** acceptance criteria met

## Phase 7 — Pre-launch
- Analytics, GSC, call tracking live
- Redirects configured and tested
- Backups and security configured
- Full launch checklist completed
**Exit criteria:** launch-checklist.md fully ticked

## Phase 8 — Launch and post-launch
- Deploy, submit sitemap, verify indexation
- Monitor for 14 days
- Begin content and outreach cadence per 00-project-management/post-launch-plan.md

## Critical path
Decisions → Copy → Headshot → Homepage → everything else.
The headshot and the case-study decision are the two most common causes of delay. Resolve both in Phase 0.
