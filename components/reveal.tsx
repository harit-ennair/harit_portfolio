"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { duration, ease } from "@/lib/animations";

export function Reveal({
  children,
  className = "",
  onLoad = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  onLoad?: boolean;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const animation = {
    opacity: [0, 1],
    y: [24, 0],
    filter: ["blur(4px)", "blur(0px)"],
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={onLoad ? animation : undefined}
      whileInView={onLoad ? undefined : animation}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: duration.sectionReveal,
        delay,
        ease: ease.out,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Accent() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="hero-accent"
      aria-hidden="true"
      initial={false}
      animate={
        reduceMotion
          ? undefined
          : { opacity: [0.8, 1], scale: [0.97, 1], rotate: [-2, 0] }
      }
      transition={{ duration: 0.75, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
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

