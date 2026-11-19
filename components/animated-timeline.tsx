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
    offset: ["start 65%", "end 65%"],
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
        className="timeline-track"
        style={{
          position: "absolute",
          left: 0,
          top: "1.5rem",
          bottom: "1.5rem",
          width: 2,
          borderRadius: 1,
        }}
      />

      {/* Decorative progressive timeline fill */}
      <motion.div
        aria-hidden="true"
        className="timeline-progress"
        style={{
          position: "absolute",
          left: 0,
          top: "1.5rem",
          bottom: "1.5rem",
          width: 2,
          transformOrigin: "top",
          scaleY: reduceMotion ? 1 : scaleY,
          borderRadius: 1,
          zIndex: 1,
        }}
      />

      {children}
    </motion.div>
  );
}
