"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", onLoad = false, delay = 0 }: { children: ReactNode; className?: string; onLoad?: boolean; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const animation = reduceMotion ? undefined : { opacity: [0.82, 1], y: [8, 0] };
  return <motion.div className={className} initial={false} animate={onLoad ? animation : undefined} whileInView={onLoad ? undefined : animation} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.48, delay, ease: [0.23, 1, 0.32, 1] }}>{children}</motion.div>;
}

export function Accent() {
  const reduceMotion = useReducedMotion();
  return <motion.div className="hero-accent" aria-hidden="true" initial={false} animate={reduceMotion ? undefined : { opacity: [0.8, 1], scale: [0.97, 1], rotate: [-2, 0] }} transition={{ duration: 0.75, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}><span className="accent-orbit" /><span className="accent-cross">✳</span><span className="accent-caption">FROM IDEA<br />TO INTERFACE</span></motion.div>;
}
