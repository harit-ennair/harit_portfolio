/**
 * Animation Design System
 * Consistent timing, easing, and motion utilities for the portfolio.
 */

/* ── Durations (seconds) ───────────────────────────────────────── */
export const duration = {
  buttonHover: 0.2,
  cardHover: 0.3,
  textReveal: 0.55,
  sectionReveal: 0.65,
  staggerDelay: 0.08,
  modal: 0.3,
  fast: 0.15,
  medium: 0.35,
  slow: 0.7,
} as const;

/* ── Easing curves ─────────────────────────────────────────────── */
export const ease = {
  /** Smooth deceleration – default for entrances */
  out: [0.23, 1, 0.32, 1] as const,
  /** Smooth acceleration + deceleration */
  inOut: [0.65, 0, 0.35, 1] as const,
  /** Subtle spring feel without overshoot */
  spring: { type: "spring" as const, stiffness: 260, damping: 25, mass: 1 },
  /** Gentle spring for hover effects */
  gentleSpring: { type: "spring" as const, stiffness: 180, damping: 20, mass: 0.8 },
};

/* ── Reusable motion variants ──────────────────────────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.sectionReveal, ease: ease.out },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.medium, ease: ease.out },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: duration.staggerDelay,
      delayChildren: 0.1,
    },
  },
};

export const staggerFadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.textReveal, ease: ease.out },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.medium, ease: ease.out },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.sectionReveal, ease: ease.out },
  },
};

/* ── Viewport thresholds ───────────────────────────────────────── */
export const viewport = {
  default: { once: true, amount: 0.15 as const },
  generous: { once: true, amount: 0.08 as const },
  tight: { once: true, amount: 0.3 as const },
};

/* ── Helper: check for touch device (client-side only) ─────────── */
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
