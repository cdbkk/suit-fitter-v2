# Suit Fitter Demo Site - UI Review Fixes

## Goal
Fix all 24 issues from the 4-agent UI review to make the suitv2 demo site ready to send to Danny (Daniel Taylor), a British bespoke tailor in Patong Beach, Phuket.

## Phases

### Phase 1: Placeholder Content Fix [pending]
**Agent: 1 (content-fix)**
Replace all fake/Bangkok content with Danny's real info.

Files: `hero.tsx`, `atelier.tsx`, `consultation.tsx`, `fabrics.tsx`, `testimonials.tsx`, `footer.tsx`, `app/layout.tsx`

- [ ] 1.1 Founder name: "Khun Somchai Rattanakit" → "Daniel Taylor" (consultation.tsx:88)
- [ ] 1.2 Atelier address: Bangkok → Patong Beach, Phuket (atelier.tsx:21-23)
- [ ] 1.3 Atelier description: "Bangkok's premier district" → Phuket-appropriate (atelier.tsx:16)
- [ ] 1.4 Footer address: Gaysorn Village Bangkok → Patong Beach Phuket (footer.tsx)
- [ ] 1.5 Footer brand description: "in the heart of Bangkok" → Phuket (footer.tsx)
- [ ] 1.6 Phone numbers: Bangkok 02 prefix → Phuket 076 or mobile (atelier.tsx:55-56, footer.tsx)
- [ ] 1.7 Fabrics "Bangkok's climate" → "Phuket's climate" (fabrics.tsx:42)
- [ ] 1.8 Testimonial #4 "tailoring in Bangkok" → "tailoring in Phuket" (testimonials.tsx:28)
- [ ] 1.9 Metadata: Add Phuket/Patong Beach to title+description (app/layout.tsx)
- [ ] 1.10 Social links: placeholder → remove or use # with proper labels (footer.tsx)

### Phase 2: Hero & Conversion Fixes [pending]
**Agent: 2 (hero-conversion)**
Fix hero timing, CTA prominence, and add conversion elements.

Files: `hero.tsx`, `services.tsx`, `consultation.tsx`, `header.tsx`

- [ ] 2.1 Hero: Run logo + content concurrently. CTA visible within 2s (hero.tsx)
- [ ] 2.2 Hero: Primary CTA filled → `bg-foreground text-background` default state (hero.tsx:130)
- [ ] 2.3 Hero: Remove blur(12px), use opacity-only reveal (hero.tsx:99)
- [ ] 2.4 Hero: Reduce "Patong Beach" tracking from 0.3em to 0.2em (hero.tsx:114)
- [ ] 2.5 Services: Add "Book Consultation" CTA link to each service block (services.tsx:131-136)
- [ ] 2.6 Services: Bump price to text-3xl (services.tsx:134)
- [ ] 2.7 Consultation: Add WhatsApp button alongside the form (consultation.tsx)
- [ ] 2.8 Header: Fix mobile logo size (w-44 → w-40, desktop w-44) (header.tsx:48)
- [ ] 2.9 Header: Change transition-all → transition-[transform,opacity] (header.tsx:25)

### Phase 3: Visual Consistency [pending]
**Agent: 3 (visual-consistency)**
Align containers, tokens, animation systems across all sections.

Files: `fabrics.tsx`, `testimonials.tsx`, `services.tsx`, `philosophy.tsx`, `globals.css`

- [ ] 3.1 Fabrics: max-w-7xl → max-w-[1400px], px-8 → px-12 (fabrics.tsx:53)
- [ ] 3.2 Fabrics: lg:py-32 → lg:py-40 (fabrics.tsx:52)
- [ ] 3.3 Fabrics: Replace text-primary with text-accent everywhere (fabrics.tsx:60,67,81,116,127,129)
- [ ] 3.4 Fabrics: Convert from CSS .reveal to Framer Motion whileInView (fabrics.tsx)
- [ ] 3.5 Testimonials: max-w-7xl → max-w-[1400px] (testimonials.tsx:43)
- [ ] 3.6 Testimonials: Convert CSS .reveal to Framer Motion (testimonials.tsx)
- [ ] 3.7 Services: body text opacity /60 → /70 (services.tsx:114)
- [ ] 3.8 Services: features text-xs → text-sm, dot → gold dash (services.tsx:119-127)
- [ ] 3.9 Philosophy: grid gap-16 lg:gap-8 → gap-8 lg:gap-16 (philosophy.tsx:18)
- [ ] 3.10 Philosophy: body text sm → base, font-light → font-normal (philosophy.tsx:48)

### Phase 4: Animation & Polish [pending]
**Agent: 4 (animation-polish)**
Fix animation issues, accessibility, form UX.

Files: `suit-animation.tsx`, `testimonials.tsx`, `consultation.tsx`, `services.tsx`

- [ ] 4.1 Suit animation: Swap stroke widths (mobile thicker, desktop thinner) (suit-animation.tsx:35)
- [ ] 4.2 Suit animation: text-[10px] → text-xs (suit-animation.tsx:122)
- [ ] 4.3 Testimonials: Add AnimatePresence for enter/exit transitions (testimonials.tsx)
- [ ] 4.4 Form: Add focus-visible ring styles (consultation.tsx inputs)
- [ ] 4.5 Form: Add dropdown chevron icon to select (consultation.tsx:164-177)
- [ ] 4.6 Form: Add autocomplete attributes (consultation.tsx inputs)
- [ ] 4.7 Services: Add staggered animation with child variants (services.tsx:97-100)
- [ ] 4.8 Services: Reduce y:50 → y:30 and duration 1s → 0.8s (services.tsx:98-100)

## Execution Strategy
- Run 4 agents in parallel (one per phase)
- Each agent reads files first, makes targeted edits
- After all complete: reload, check console errors, visual verify
- Copy all changed files to suitv2-backup/

## Notes
- Danny's real info: Daniel Taylor, Patong Beach, Phuket. We don't have his real phone/email/address — use plausible Phuket placeholders for now
- The bowtie + phuket tag in the logo SVG is the REAL brand — do not change
- Backup everything to suitv2-backup/ after changes
