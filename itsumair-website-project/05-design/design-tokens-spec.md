# Design Tokens Specification

Values to be implemented in the build. Specification only, not code.

## Color

### Brand
| Token | Value | Usage |
|---|---|---|
| brand-primary | #6700C8 | Primary CTAs, key section backgrounds, large headings, accents |
| brand-primary-hover | Darker shade of #6700C8 | Button hover states |
| brand-primary-light | Tinted #6700C8 | Subtle backgrounds, badges |

### CRITICAL contrast constraint
- **White text on #6700C8 background: passes WCAG AA.** Use for buttons and dark sections.
- **#6700C8 text on white background: does NOT pass AA at small sizes.** Use only for headings 24px+ bold, or decorative elements.
- **Body text must never be #6700C8.**

### Neutrals
| Token | Approx value | Usage |
|---|---|---|
| text-primary | Near-black, approx #14121A | Body text, headings |
| text-secondary | Mid grey with AA contrast on white | Supporting text, captions |
| background | Warm off-white, approx #FAF9FB | Page background |
| surface | #FFFFFF | Cards, elevated surfaces |
| border | Light neutral | Dividers, card borders |

### Semantic
| Token | Usage |
|---|---|
| success | Positive metrics, confirmations |
| warning | Cautions |
| error | Form errors |
| proof-accent | A distinct color for results and metrics so proof reads differently from brand |

**All combinations must be verified against WCAG AA before build completion.**

## Typography

### Scale (mobile / desktop)
| Token | Mobile | Desktop | Weight |
|---|---|---|---|
| display | 32px | 48px | Bold |
| h1 | 28px | 40px | Bold |
| h2 | 24px | 32px | Bold |
| h3 | 20px | 24px | Semibold |
| h4 | 18px | 20px | Semibold |
| body-lg | 18px | 18px | Regular |
| body | 16px | 17px | Regular |
| small | 14px | 14px | Regular |

**Minimum body text 16px. Never smaller for body copy.** Target audience is 45–65.

### Other typography rules
- Line height: 1.6 for body, 1.2–1.3 for headings
- Max line length: 65–75 characters for body text
- No font weights below 400
- Maximum 2 typefaces, ideally 1 with multiple weights
- System font stack fallbacks defined

## Spacing
Consistent scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px
Section vertical padding: 64px mobile, 96–128px desktop

## Borders and radius
| Token | Value |
|---|---|
| radius-sm | 4px |
| radius-md | 8px |
| radius-lg | 12px |
| radius-full | Pills, badges |

Keep consistent. Mixed radii read as unconsidered.

## Shadows
Subtle only. Two levels maximum: card resting, card hover. Heavy shadows date quickly.

## Breakpoints
| Name | Width |
|---|---|
| mobile | Base, up to 639px |
| tablet | 640px+ |
| laptop | 1024px+ |
| desktop | 1280px+ |
| wide | 1536px+ |

## Container
Max content width approximately 1200px, with a narrower measure (approximately 720px) for long-form reading on the pillar page and blog posts.

## Interactive states
Every interactive element needs: default, hover, focus (visible, meets AA), active, disabled.
Minimum tap target 44x44px.
