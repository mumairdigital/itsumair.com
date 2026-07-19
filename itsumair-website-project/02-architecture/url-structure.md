# URL Structure

## Rules
1. Lowercase only
2. Hyphens as separators, never underscores
3. No dates in URLs
4. No stop words (a, the, and, of) unless required for sense
5. No numbers unless meaningful
6. Maximum 3 levels deep
7. Trailing slash convention: **with trailing slash**, enforced by 301
8. Short enough to say out loud on a phone call
9. **Never change a URL after launch**

## Full URL map

| Page | URL |
|---|---|
| Homepage | `/` |
| Services hub | `/services/` |
| Local SEO | `/services/local-seo/` |
| GBP Optimization | `/services/google-business-profile/` |
| Website Design | `/services/website-design/` |
| Website Maintenance | `/services/website-maintenance/` |
| Pillar | `/bathroom-remodeler-marketing/` |
| Results hub | `/results/` |
| Case study | `/results/[client-slug]/` |
| About | `/about/` |
| Pricing | `/pricing/` |
| Contact | `/contact/` |
| Audit | `/audit/` |
| Blog hub | `/blog/` |
| Blog post | `/blog/[post-slug]/` |
| Areas hub | `/areas/` |
| Location | `/areas/[city-slug]/` |
| Privacy | `/privacy-policy/` |
| Terms | `/terms/` |
| Accessibility | `/accessibility/` |

## Location slugs (locked)
| City | Slug |
|---|---|
| Tampa | `tampa` |
| St. Petersburg | `st-petersburg` |
| Clearwater | `clearwater` |
| Largo / Pinellas Park | `largo` |
| Brandon | `brandon` |
| Palm Harbor / Dunedin | `palm-harbor` |

## Rejected patterns and why
| Rejected | Reason |
|---|---|
| `/service-areas/tampa-fl-bathroom-remodeling-seo/` | Keyword stuffed, too long, unspeakable |
| `/blog/2026/07/post-name/` | Dates make content look stale |
| `/services/local_seo/` | Underscores |
| `/tampa-bathroom-remodeling/` | Homeowner intent — wrong audience |

## Canonical host
Choose one and enforce site-wide: **https://itsumair.com** (non-www recommended for a personal brand — shorter to say). All www requests 301 to non-www. Document in 04-seo/redirect-map.md.
