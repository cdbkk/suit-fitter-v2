import type { Variants } from "framer-motion"

/**
 * Shared Framer Motion animation constants.
 *
 * Components can import what they need:
 *   import { SMOOTH_EASE, fadeUp, staggerContainer } from "@/lib/animations"
 *
 * Hero uses HERO_EASE for its own intro timeline; other sections use SMOOTH_EASE.
 */

// ── Easing curves ──────────────────────────────────────────────────────────────

/** Smooth deceleration curve used across most section animations. */
export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const

/** Snappy ease used in the hero intro sequence. */
export const HERO_EASE = [0.21, 0.47, 0.32, 0.98] as const

// ── Container variants (stagger wrappers) ──────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const staggerContainerWide: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

// ── Fade-up variants ────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: SMOOTH_EASE },
  },
}

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: SMOOTH_EASE },
  },
}

// ── Fade-in (no vertical shift) ─────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: SMOOTH_EASE },
  },
}

// ── Slide-in from right (horizontal scroll cards) ───────────────────────────────

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: SMOOTH_EASE },
  },
}

// ── Image / media reveal ────────────────────────────────────────────────────────

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: SMOOTH_EASE },
  },
}

export const imageRevealFast: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: SMOOTH_EASE },
  },
}

// ── Scale-up entrance (badges, icons) ───────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: SMOOTH_EASE },
  },
}

// ── Common viewport settings ────────────────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, margin: "-80px" as const }
