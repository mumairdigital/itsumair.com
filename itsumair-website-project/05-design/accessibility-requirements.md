# Accessibility Requirements

## Standard
**WCAG 2.1 Level AA.** Not optional.

## Why this matters commercially, not just ethically
US service-business websites receive accessibility demand letters. Compliance plus a published accessibility statement materially reduces exposure. Separately, the target audience is 45–65 years old and often reading outdoors on a phone, so accessibility improvements are directly conversion improvements here.

## Requirements

### Color and contrast
- Normal text: minimum 4.5:1 contrast
- Large text (24px+ or 19px+ bold): minimum 3:1
- Interactive components and graphics: minimum 3:1
- **Verify every #6700C8 usage specifically**
- Never convey information by color alone

### Typography
- Body text minimum 16px
- Text resizable to 200% without loss of function
- No text embedded in images (except logos)
- Adequate line height and letter spacing

### Keyboard
- Every interactive element reachable by keyboard
- Logical tab order matching visual order
- Visible focus indicators meeting contrast requirements
- No keyboard traps
- Skip-to-content link as the first focusable element

### Screen readers
- Semantic HTML: proper heading hierarchy, landmarks, lists
- Descriptive alt text on meaningful images; empty alt on decorative images
- Form labels correctly associated with inputs
- Error messages announced and linked to fields
- ARIA only where semantic HTML is insufficient
- Accordions, dropdowns, and modals correctly implemented with appropriate roles and states

### Forms
- Visible labels, not placeholder-only
- Errors identified in text, not color alone
- Clear error recovery instructions
- Required fields indicated in text
- Adequate spacing between fields

### Motion
- Respect prefers-reduced-motion
- No auto-playing video with sound
- No content flashing more than three times per second
- Any carousel must have pause controls

### Touch
- Minimum 44x44px tap targets
- Adequate spacing between targets
- No hover-only functionality

### Media
- Captions on any video
- Transcripts for audio content
- Descriptive link text, never "click here"

## Testing checklist
- [ ] Automated scan (axe or Lighthouse) with zero critical issues
- [ ] Full keyboard-only navigation test
- [ ] Screen reader test on at least one page of each template
- [ ] All contrast combinations verified
- [ ] 200% zoom test
- [ ] Forms tested with keyboard only
- [ ] prefers-reduced-motion honored
- [ ] Tested with browser text size increased

## Accessibility statement
Published at `/accessibility/`. See 03-content/legal-pages-brief.md.
