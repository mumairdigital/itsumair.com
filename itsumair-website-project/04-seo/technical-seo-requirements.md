# Technical SEO Requirements

## Performance (non-negotiable)
| Metric | Target |
|---|---|
| LCP | Under 2.5s on mobile |
| INP | Under 200ms |
| CLS | Under 0.1 |
| Total page weight | Under 1MB where possible |
| Time to first byte | Under 600ms |

**Test on real mobile hardware over a real connection, not just Lighthouse on desktop.**

## Implementation requirements
- Mobile-first responsive
- HTTPS site-wide, valid certificate, HSTS
- One canonical host enforced by 301 (non-www recommended)
- Consistent trailing slash convention enforced by 301
- Self-referencing canonical on every page
- XML sitemap, auto-updating, submitted to GSC
- robots.txt correct, sitemap referenced
- Semantic HTML5
- Exactly one H1 per page, no skipped heading levels
- Descriptive alt text on every meaningful image
- Images in WebP or AVIF with fallbacks
- Explicit width and height on images to prevent CLS
- Lazy loading below the fold, eager loading for LCP element
- Font preloading, font-display: swap
- Critical CSS inlined, non-critical deferred
- Minimal JavaScript, deferred where possible
- CDN with US edge locations (visitors are US-based; this materially affects TTFB)
- Custom 404 with navigation
- No soft 404s
- Breadcrumbs on service, location, case study, blog pages
- Pagination handled correctly on blog

## Crawlability
- All important pages in the sitemap
- No important pages blocked in robots.txt
- No orphan pages
- Maximum 3 clicks from homepage
- Internal links use standard anchor elements, crawlable without JavaScript
- No infinite crawl paths

## International consideration
Site targets US visitors. Consider `hreflang` only if a non-US version is ever added. Not needed at launch. Set the target country in GSC where the option is available.

## Accessibility (also an SEO factor)
- WCAG 2.1 AA
- Keyboard navigation throughout
- Visible focus states
- Form labels correctly associated
- Skip-to-content link
- Color contrast verified, especially all #6700C8 usage
- Minimum 16px body text
- Minimum 44x44px tap targets

## Security
- HTTPS enforced
- Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Form spam protection that does not block real users
- Rate limiting on form endpoints
- No sensitive data in client-side code
- Dependencies current, no known vulnerabilities

## Monitoring
- Uptime monitoring
- Core Web Vitals field data via GSC
- Broken link checks monthly
- GSC coverage report weekly for the first month
