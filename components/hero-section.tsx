"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  duration,
  ease,
  staggerContainer,
  staggerFadeUp,
  viewport,
  isTouchDevice,
} from "@/lib/animations";

/* ── Headline lines for staggered reveal ──────────────────────── */
const headlineLines: { text: string; shifted: boolean }[] = [
  { text: "THOUGHTFUL", shifted: false },
  { text: "CODE.", shifted: false },
  { text: "MEANINGFUL", shifted: true },
  { text: "EXPERIENCES.", shifted: true },
];

/* ── Label entries for staggered reveal ───────────────────────── */
const labelItems: { content: ReactNode; bold?: boolean }[] = [
  { content: "Harit Ennair", bold: true },
  {
    content: (
      <>
        Full-Stack
        <br />
        Web Developer
      </>
    ),
  },
  { content: "Casablanca, Morocco" },
];

/* ── Cinematic headline variant (deeper blur + more travel) ───── */
const cinematicLine = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.out },
  },
};

const cinematicStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

/* ── Label stagger variant ────────────────────────────────────── */
const labelStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: duration.staggerDelay,
      delayChildren: 0.05,
    },
  },
};

const labelItem = {
  hidden: { opacity: 0, y: 14, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.textReveal, ease: ease.out },
  },
};

/* ── Bottom section variant (appears after headline) ──────────── */
const bottomReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration.sectionReveal,
      ease: ease.out,
      delay: 0.25 + headlineLines.length * 0.12 + 0.15,
    },
  },
};

/* ── Scroll indicator variant ─────────────────────────────────── */
const scrollBounce = {
  y: [0, 6, 0],
  transition: {
    duration: 1.6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};


/* ═══════════════════════════════════════════════════════════════
   Enhanced Accent (replaces the imported Accent)
   ═══════════════════════════════════════════════════════════════ */
function AccentEnhanced({
  mouseX,
  mouseY,
  disabled,
}: {
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  disabled: boolean;
}) {
  const reduceMotion = useReducedMotion();

  /* Subtle parallax offset from mouse — capped to ±10px */
  const offsetX = useTransform(mouseX, (v) => (disabled ? 0 : v * 0.02));
  const offsetY = useTransform(mouseY, (v) => (disabled ? 0 : v * 0.02));

  return (
    <motion.div
      className="hero-accent"
      aria-hidden="true"
      style={{ x: offsetX, y: offsetY }}
      initial={false}
      animate={
        reduceMotion
          ? undefined
          : { opacity: [0.8, 1], scale: [0.97, 1], rotate: [-2, 0] }
      }
      transition={{ duration: 0.75, delay: 0.15, ease: ease.out }}
    >
      <span className="accent-orbit" />
      <motion.span
        className="accent-cross"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }
        }
        style={{ display: "inline-block" }}
      >
        ✳
      </motion.span>
      <span className="accent-caption">
        FROM IDEA
        <br />
        TO INTERFACE
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HeroSection
   ═══════════════════════════════════════════════════════════════ */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const disableMouseEffects = !!reduceMotion || isTouch;

  /* ── Mouse tracking for gradient + accent parallax ────────── */
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const smoothMouseX = useSpring(rawMouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });
  const smoothMouseY = useSpring(rawMouseY, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  /* Gradient position (maps mouse → gradient center shift) */
  const gradientX = useTransform(smoothMouseX, (v) =>
    disableMouseEffects ? 50 : 50 + v * 0.015,
  );
  const gradientY = useTransform(smoothMouseY, (v) =>
    disableMouseEffects ? 50 : 50 + v * 0.015,
  );
  const gradientBg = useTransform(
    [gradientX, gradientY],
    ([gx, gy]: number[]) =>
      `radial-gradient(ellipse at ${gx}% ${gy}%, rgba(99,70,235,0.045) 0%, transparent 60%)`,
  );

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLElement>) => {
      if (disableMouseEffects) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawMouseX.set(e.clientX - rect.left - rect.width / 2);
      rawMouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [disableMouseEffects, rawMouseX, rawMouseY],
  );

  return (
    <section
      id="top"
      className="hero wrap"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle animated grid background */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Animated gradient overlay following mouse */}
      {!disableMouseEffects && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: gradientBg,
            zIndex: 0,
          }}
        />
      )}

      {/* ── Hero label (staggered) ─────────────────────────── */}
      <motion.div
        className="hero-label"
        variants={reduceMotion ? undefined : labelStagger}
        initial={reduceMotion ? undefined : "hidden"}
        animate="visible"
      >
        {labelItems.map((item, i) => (
          <motion.span
            key={i}
            variants={reduceMotion ? undefined : labelItem}
            style={item.bold ? { fontWeight: 750 } : undefined}
          >
            {item.bold ? <strong>{item.content}</strong> : item.content}
          </motion.span>
        ))}
      </motion.div>

      {/* ── Hero main (headline + bottom) ──────────────────── */}
      <div className="hero-main">
        {/* Cinematic staggered headline */}
        <motion.h1
          variants={reduceMotion ? undefined : cinematicStagger}
          initial={reduceMotion ? undefined : "hidden"}
          animate="visible"
        >
          {headlineLines.map((line) => (
            <motion.span
              key={line.text}
              className={line.shifted ? "headline-shift" : undefined}
              variants={reduceMotion ? undefined : cinematicLine}
              style={{ display: "block" }}
            >
              {line.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Bottom section — paragraph + CTAs */}
        <motion.div
          className="hero-bottom"
          variants={reduceMotion ? undefined : bottomReveal}
          initial={reduceMotion ? undefined : "hidden"}
          animate="visible"
        >
          <p>
            I&apos;m Harit, a full-stack web developer building reliable
            applications that bring good ideas to life.
          </p>
          <div className="hero-actions">
            <a href="#projects">View projects</a>
            <a href="#contact">Get in touch</a>
          </div>
        </motion.div>
      </div>

      {/* ── Enhanced accent with parallax ──────────────────── */}
      <AccentEnhanced
        mouseX={smoothMouseX}
        mouseY={smoothMouseY}
        disabled={disableMouseEffects}
      />

      {/* ── Scroll indicator ──────────────────────────────── */}
      {!reduceMotion && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            animate={scrollBounce}
          >
            <path
              d="M10 4 L10 20 M4 15 L10 22 L16 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </section>
  );
}
