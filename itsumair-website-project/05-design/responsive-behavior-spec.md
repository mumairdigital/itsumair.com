# Responsive Behavior Specification

## Priority
**Mobile first, genuinely.** Most first views will be on a phone, often from an email or DM link. Design and build mobile, then enhance.

## Per-section behavior

| Section | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | Logo + phone icon + hamburger | Logo + condensed nav + CTA | Full nav + phone + CTA |
| Hero | Stacked, text first, image below | Stacked or side by side | Side by side |
| Problem cards | 1 column | 2 columns | 3 columns |
| Process steps | Vertical, numbered | 2 columns | Horizontal row |
| Service cards | 1 column | 2 columns | 4 columns or 2x2 |
| Case study cards | 1 column | 2 columns | 3 columns |
| Testimonials | 1 column, stacked | 2 columns | 3 columns |
| Location grid | 1 column | 2 columns | 3 columns |
| Pricing tiers | Stacked, recommended first | 2 + 1 | 3 columns |
| Footer | Stacked accordion or single column | 2 columns | 4 columns |
| Sticky CTA bar | Visible | Visible | Hidden (header CTA sufficient) |

## Mobile-specific requirements
- Sticky bottom CTA bar with call and audit
- Phone number always one tap away
- Forms full width, large inputs
- No horizontal scrolling at any width
- Images sized appropriately, never full-resolution desktop assets
- Tap targets minimum 44x44px with adequate spacing
- Text minimum 16px (also prevents iOS input zoom)

## Content prioritization on mobile
Where desktop shows content side by side, mobile order must be:
1. Text and value proposition first
2. CTA
3. Supporting image

Never lead mobile with a large image that pushes the value proposition below the fold.

## Testing requirements
- [ ] Real iPhone (Safari) — most common failure point
- [ ] Real Android (Chrome)
- [ ] iPad or tablet
- [ ] Desktop at 1280px and 1920px
- [ ] 320px width (smallest realistic)
- [ ] Landscape orientation on phone
- [ ] With browser text size increased
- [ ] On a throttled connection

## Performance by device
Mobile performance is the priority. If a design element is expensive on mobile, remove it on mobile rather than shipping a slow experience.
