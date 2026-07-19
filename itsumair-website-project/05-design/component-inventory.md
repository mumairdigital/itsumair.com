# Component Inventory

Everything to be built, so nothing is invented mid-project.

## Layout
| Component | Notes |
|---|---|
| Header | Sticky, condenses on scroll, contains nav + phone + CTA |
| Mobile menu | Full-screen overlay, expandable services section |
| Footer | 4 columns + bottom bar |
| Sticky mobile CTA bar | Appears after 300px scroll, call + audit |
| Container | Standard and narrow (reading) widths |
| Section wrapper | Consistent vertical rhythm, optional brand background |
| Breadcrumbs | Service, location, case study, blog pages |
| Skip link | First focusable element |

## Content
| Component | Notes |
|---|---|
| Hero (standard) | Headline, subhead, CTAs, image |
| Hero (page) | Simpler variant for interior pages |
| Hero (conversion) | Audit page, with inline form |
| Problem card | Icon, heading, text — used in 3-up grid |
| Process step | Number, title, text — horizontal on desktop |
| Service card | Icon, name, description, link |
| Case study card | Image, client type, headline metric, link |
| Testimonial card | Quote, name, company, photo |
| Location card | City name, local hook, link |
| Blog card | Featured image, title, excerpt, category, read time |
| Stat block | Large number, label — for proof sections |
| Before/after block | Two images with labels |
| Pricing tier card | Name, price, audience, inclusions, CTA — with featured variant |
| FAQ accordion | Expandable, keyboard accessible, correct ARIA |
| CTA block | Full-width, brand background, heading, text, button |
| Author bio box | Headshot, name, short bio, link |
| Key takeaways box | For blog posts |
| Table of contents | Jump links, for pillar page |
| Trust bar | Logos or stat strip |

## Forms
| Component | Notes |
|---|---|
| Text input | With label, error state, helper text |
| Select dropdown | For the "biggest problem" field |
| Textarea | Contact form |
| Submit button | With loading state |
| Form success message | Inline |
| Form error message | Inline, accessible |
| Privacy notice line | Near submit |

## Interactive
| Component | Notes |
|---|---|
| Primary button | Brand color, white text |
| Secondary button | Outline or ghost |
| Text link | With underline on hover |
| Phone link | Click-to-call on mobile |
| Dropdown menu | Services nav, keyboard accessible |
| Calendar embed wrapper | Booking tool container |

## Media
| Component | Notes |
|---|---|
| Responsive image | With explicit dimensions, WebP/AVIF, lazy loading |
| Screenshot frame | Consistent presentation for proof screenshots |
| Icon | Consistent set, single style |
| Map graphic | Branded service area, city highlight variant |

## States needed for every interactive component
Default, hover, focus (visible, AA compliant), active, disabled, loading where applicable.

## Build order
1. Design tokens
2. Layout components (header, footer, container, section)
3. Buttons and links
4. Cards
5. Forms
6. Content components
7. Page assembly
