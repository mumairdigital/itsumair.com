# Robots, Sitemap, and Redirect Plan

## robots.txt requirements
Must:
- Allow all crawlers to all public content
- Reference the XML sitemap location
- Disallow only genuine non-public paths (admin, API endpoints, thank-you pages if excluded from indexing)

Must NOT:
- Block CSS or JavaScript (breaks rendering and hurts rankings)
- Block images
- Block anything needed to render pages

## XML sitemap requirements
- Auto-generated and auto-updating
- Includes: all indexable pages
- Excludes: 404, thank-you pages, any noindex pages, legal pages are optional
- Includes lastmod dates that reflect real changes
- Submitted in Google Search Console
- Referenced in robots.txt

## Indexation decisions
| Page | Index? | Reason |
|---|---|---|
| All core pages | Yes | |
| Service pages | Yes | |
| Location pages | Yes | |
| Case studies | Yes | |
| Blog posts | Yes | |
| Audit landing | Yes | May capture long-tail |
| Thank-you pages | No | noindex, prevents conversion-page dilution |
| Legal pages | Yes | Low priority but no harm |
| 404 | No | |

## Redirect map

### Domain-level redirects
| From | To | Type |
|---|---|---|
| http://itsumair.com/* | https://itsumair.com/* | 301 |
| https://www.itsumair.com/* | https://itsumair.com/* | 301 |
| http://www.itsumair.com/* | https://itsumair.com/* | 301 |
| Non-trailing-slash URLs | Trailing-slash version | 301 |

### mumairdigital.com (Decision D9)
If redirecting:
| From | To | Type |
|---|---|---|
| mumairdigital.com | itsumair.com | 301 |
| mumairdigital.com/[any-existing-page] | Closest equivalent on itsumair.com | 301 |

**Before redirecting:** export the existing URL list from mumairdigital.com and map each to a specific destination. Redirecting everything to the homepage wastes any accumulated authority and creates a poor user experience.

### Rules
- No redirect chains. Every redirect goes directly to the final destination.
- 301 for permanent, 302 only for genuinely temporary
- Test every redirect after deployment
- Keep the redirect map documented for future reference

## Verification checklist
- [ ] robots.txt live and correct
- [ ] Sitemap accessible and valid
- [ ] Sitemap submitted in GSC
- [ ] All redirects tested
- [ ] No redirect chains
- [ ] Canonical host consistent
- [ ] Trailing slash consistent
- [ ] GSC verified for both properties if two domains are in play
