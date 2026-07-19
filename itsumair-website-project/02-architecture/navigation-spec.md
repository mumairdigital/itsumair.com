# Navigation Specification

## Design principle
Contractors scan, they do not explore. Maximum 6 top-level items. Every item must be immediately understandable.

## Header (desktop)

```
[Logo]    Services ▾   Results   About   Areas   Blog        [Phone]  [Get Free Audit]
```

- **Services** — dropdown: Local SEO, Google Business Profile, Website Design, Website Maintenance, divider, All Services
- **Results** — case studies hub
- **About** — about page
- **Areas** — service areas hub
- **Blog** — blog hub
- **Phone** — click-to-call, visible
- **Get Free Audit** — primary button, #6700C8

Behavior: sticky on scroll, condensed after 100px. Current page indicated.

## Header (mobile)

```
[Logo]                              [Phone icon]  [☰]
```

Hamburger opens full-screen menu:
- Services (expandable)
- Results
- About
- Areas
- Blog
- Pricing
- Contact
- [Get Free Audit] button
- Phone and email

## Sticky mobile CTA bar
Fixed to bottom on mobile, appears after 300px scroll:
```
[  Call Now  ] [  Free Audit  ]
```
Two equal buttons. This audience calls; do not bury the phone number.

## Footer (4 columns)

**Column 1 — Services**
Local SEO / Google Business Profile / Website Design / Website Maintenance / Pricing

**Column 2 — Service Areas**
Tampa / St. Petersburg / Clearwater / Largo / Brandon / Palm Harbor / All Areas

**Column 3 — Company**
About / Results / Blog / Bathroom Remodeler Marketing Guide / Contact / Free Audit

**Column 4 — Contact**
Name and role line, email, phone, service area statement, social icons (LinkedIn, Facebook, Instagram, TikTok, YouTube)

**Footer bottom bar**
Copyright / Privacy Policy / Terms / Accessibility Statement

## Items deliberately NOT in main navigation
| Item | Reason | Where instead |
|---|---|---|
| Pricing | Would compete with the audit CTA in the header | Footer, service pages, mobile menu |
| Contact | The audit CTA is the better conversion path | Footer, mobile menu, every page CTA |
| Legal pages | Clutter | Footer only |
| Pillar page | Long name breaks the nav | Footer, homepage, internal links |

## Breadcrumbs
Present on: service pages, location pages, case studies, blog posts.
Format: `Home > Services > Local SEO`
Not on: homepage, top-level pages.
