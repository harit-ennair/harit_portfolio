"use client";

import { Atom, Braces, Code2, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const cards = [
  { title: "Full-Stack Developer", detail: "From front to back", icon: Layers3, className: "hero-card-role" },
  { title: "Spring Boot", detail: "Backend development", icon: Braces, className: "hero-card-backend" },
  { title: "Angular", detail: "Frontend development", icon: Code2, className: "hero-card-angular" },
  { title: "React", detail: "Frontend development", icon: Atom, className: "hero-card-react" },
];

export function HeroCards() {
  const reduceMotion = useReducedMotion();
  const [motionPaused, setMotionPaused] = useState(false);
  return <div className="hero-cards" aria-label="Development specialties">{cards.map(({ title, detail, icon: Icon, className }, index) => (
    <div key={title} className={`hero-card-position ${className}`}>
      <motion.div className="hero-card" initial={false} animate={reduceMotion ? undefined : motionPaused ? { y: 0 } : { y: [0, index % 2 === 0 ? -6 : 6, 0] }} transition={motionPaused ? { duration: 0.2 } : { duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}>
        <span className="hero-card-icon"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
        <span><strong>{title}</strong><small>{detail}</small></span>
      </motion.div>
    </div>
  ))}<button className="hero-motion-toggle" type="button" onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? "Resume motion" : "Pause motion"}</button></div>;
}
