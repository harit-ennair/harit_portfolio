"use client";

import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import {
  duration,
  ease,
  fadeUp,
  slideInLeft,
  staggerContainer,
  staggerFadeUp,
  viewport,
} from "@/lib/animations";

/* ── Staggered text line reveal ──────────────────────────────────── */
const headlineLines = ["LET'S MAKE", "SOMETHING", "THAT MATTERS."];

const lineReveal = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.textReveal, ease: ease.out },
  },
};

const headlineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="contact section wrap">
      {/* Section rail – slide in from left */}
      <motion.div
        className="section-rail"
        variants={reduceMotion ? undefined : slideInLeft}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport.default}
      >
        <span>Contact</span>
        <span>03 / Connect</span>
      </motion.div>

      <div className="section-content">
        <div className="contact-top">
          {/* Headline – staggered line reveal */}
          <motion.h2
            variants={reduceMotion ? undefined : headlineContainer}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewport.default}
          >
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                variants={reduceMotion ? undefined : lineReveal}
                style={{ display: "block" }}
              >
                {line}
                {i < headlineLines.length - 1 && <br />}
              </motion.span>
            ))}
          </motion.h2>

          {/* Spinning asterisk square */}
          <motion.div
            className="contact-square"
            aria-hidden="true"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={viewport.default}
            transition={
              reduceMotion
                ? undefined
                : { duration: duration.sectionReveal, ease: ease.out }
            }
          >
            <motion.span
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
          </motion.div>
        </div>

        {/* Bottom area – paragraph + links */}
        <motion.div
          className="contact-bottom"
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewport.default}
        >
          <motion.p variants={reduceMotion ? undefined : fadeUp}>
            Have a project in mind or just want to connect? I&apos;d love to
            hear from you.
          </motion.p>

          <motion.div
            className="contact-links"
            variants={reduceMotion ? undefined : staggerContainer}
          >
            <div className="contact-email-wrapper">
              <motion.a
                href={`mailto:${profile.email}`}
                className="contact-email"
                variants={reduceMotion ? undefined : staggerFadeUp}
              >
                {profile.email}
              </motion.a>
            </div>

            <div className="contact-sublinks">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={reduceMotion ? undefined : staggerFadeUp}
              >
                GitHub{" "}
                <ExternalLink size={15} aria-hidden="true" />
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={reduceMotion ? undefined : staggerFadeUp}
              >
                LinkedIn{" "}
                <ExternalLink size={15} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
