"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { fadeUp, viewport } from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
}

export function AnimatedTimeline({ children, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.5"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={`timeline-container ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.generous}
      style={{ position: "relative", paddingLeft: "1.5rem" }}
    >
      {/* Background track line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: "1.5rem",
          bottom: "1.5rem",
          width: 2,
          background: "#dedee2",
          borderRadius: 1,
        }}
      />

      {/* Decorative progressive timeline fill */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: "1.5rem",
            bottom: "1.5rem",
            width: 2,
            transformOrigin: "top",
            scaleY,
            background:
              "linear-gradient(180deg, #2563eb 0%, #a855f7 50%, #ef4444 100%)",
            borderRadius: 1,
            zIndex: 1,
          }}
        />
      )}

      {children}
    </motion.div>
  );
}
