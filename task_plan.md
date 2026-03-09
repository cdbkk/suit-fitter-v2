# Suit Fitter v2 - Round 2 Fixes

## Goal
Fix all 24 items from the comprehensive UI/code review + apply Gemini design feedback.
4 parallel agents, non-overlapping file ownership.

## Design Direction (Gemini + /frontend-design)
- Kill ALL purple (#8426C1, #B342DD) → gold accent (oklch(0.74 0.10 80) / #C5A059)
- Background: warm cream not stark white (adjust --background slightly)
- Tighten vertical spacing (hero delay, mobile padding)
- Slow marquee (30s → 45s)
- Hero animation: 2.5s → 1.5s before content
- Add prefers-reduced-motion globally via MotionConfig

## Agent 1: Hero + Header + Layout
**Files:** hero.tsx, header.tsx, app/layout.tsx
| # | Fix | Priority |
|---|-----|----------|
| 1 | Hero animation 2.5s → 1.5s delay | CRITICAL |
| 7 | Mobile menu: focus trap, aria-expanded, Escape key | CRITICAL |
| 8 | Add MotionConfig reducedMotion="user" wrapping children in layout | IMPORTANT |
| 9 | Skip-to-content link before header | IMPORTANT |
| 10 | Purple bowtie/tag → gold in hero SVG | IMPORTANT |
| 13 | Remove generator: 'v0.app' from metadata | IMPORTANT |
| 14 | Add OG image to metadata | IMPORTANT |
| 22 | Hero SVG: Times New Roman → Playfair Display fallback | POLISH |
| 24 | Header scroll listener: add { passive: true } | POLISH |
| G1 | Warm up background (--background slightly off-white) in layout | DESIGN |

## Agent 2: Styles + Marquee + Testimonials + Trust
**Files:** globals.css, marquee.tsx, testimonials.tsx, trust-badges.tsx
| # | Fix | Priority |
|---|-----|----------|
| 12 | Testimonial: add aria-live="polite", role="region" | IMPORTANT |
| 15 | Marquee: fix duplicate keys (prefix per render) | IMPORTANT |
| 16 | Marquee: add prefers-reduced-motion pause | IMPORTANT |
| 18 | Remove dead .reveal CSS classes | POLISH |
| 21a | Array index → stable keys (trust-badges, testimonials) | POLISH |
| G2 | Slow marquee 30s → 45s | DESIGN |
| G3 | Add subtle paper-grain texture CSS to globals | DESIGN |

## Agent 3: Visual + Images + Sections
**Files:** services.tsx, process.tsx, philosophy.tsx, fabrics.tsx, image-break.tsx, atelier.tsx
| # | Fix | Priority |
|---|-----|----------|
| 2 | Check/fix hero-tailor.jpg (broken, naturalWidth:0) | CRITICAL |
| 3 | fabrics.jpg shows forest → needs real fabric image | CRITICAL |
| 11 | Add priority prop to LCP image (image-break) | IMPORTANT |
| 17 | Philosophy image sizes: 100vw → 80vw/55vw mobile | IMPORTANT |
| 20 | Inline variant objects → module scope (services, process) | POLISH |
| 21b | Array index → stable keys (services, fabrics) | POLISH |
| 23 | Standardize max-w to [1400px] across sections | POLISH |
| G4 | Tighten mobile section padding (py-12 → py-10 on mobile) | DESIGN |

## Agent 4: Consultation + Footer + Shared
**Files:** consultation.tsx, footer.tsx, lib/animations.ts (new)
| # | Fix | Priority |
|---|-----|----------|
| 4 | Wire form to server action or Resend | CRITICAL |
| 5 | Placeholder phone → Danny's real numbers (or clear TODO) | CRITICAL |
| 6 | Placeholder social links → real URLs or remove | CRITICAL |
| 19 | Extract shared animation constants to lib/animations.ts | POLISH |
| 21c | Array index → stable keys (consultation checklist) | POLISH |

## Status: LAUNCHING
