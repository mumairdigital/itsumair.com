# Analytics and Tracking Plan

## Strategic note
**Your own analytics setup doubles as a sales demo.** When a prospect asks how they will know it is working, you can show your own dashboard. Build it to be shown.

## Tools
| Tool | Purpose |
|---|---|
| Google Analytics 4 | Behavior and conversions |
| Google Search Console | Search performance, indexation, Core Web Vitals |
| Call tracking | Attribute phone calls to source |
| Looker Studio | Client-facing style dashboard |
| Uptime monitor | Availability |

## Conversion events (GA4)
| Event | Trigger | Priority |
|---|---|---|
| audit_request | Audit form submit | Primary |
| contact_form | Contact form submit | Primary |
| booking_complete | Calendar booking confirmed | Primary |
| phone_click | Click-to-call tap | Primary |
| email_click | Email link click | Secondary |
| whatsapp_click | WhatsApp link click | Secondary |
| scroll_75_pillar | 75% scroll on pillar page | Engagement |
| scroll_75_casestudy | 75% scroll on any case study | Engagement |
| pricing_view | Pricing page view | Intent signal |

## Key reports to build
1. **Conversions by source** — which channel produces audit requests
2. **Page value** — which pages appear in converting journeys
3. **Mobile vs desktop conversion** — this audience is mobile-heavy
4. **Location page performance** — validates or invalidates the 6-page decision
5. **Core Web Vitals field data**

## What NOT to optimize for
Sessions, pageviews, bounce rate in isolation. This site succeeds on booked calls, not traffic. Do not let vanity metrics drive decisions.

## Call tracking
- Use a US number with call tracking
- Dynamic number insertion if traffic volume justifies it
- Record source of each call
- **Critical:** the tracked number must be consistent with NAP data elsewhere or it undermines local SEO signals. Use a single consistent primary number.

## Privacy compliance
- Analytics disclosed in the privacy policy
- Cookie consent where required
- IP anonymization enabled
- No personally identifiable information in event parameters

## Setup checklist
- [ ] GA4 property created and installed
- [ ] All conversion events configured and tested
- [ ] GSC verified, sitemap submitted
- [ ] GSC linked to GA4
- [ ] Call tracking configured
- [ ] Looker Studio dashboard built
- [ ] Uptime monitoring active
- [ ] Test conversions fired and confirmed in reports
