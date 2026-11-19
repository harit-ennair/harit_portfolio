"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  staggerContainer,
  staggerFadeUp,
  duration,
  viewport,
} from "@/lib/animations";

interface SkillGroup {
  title: string;
  items: string[];
}

interface Props {
  groups: SkillGroup[];
}

export function SkillBadges({ groups }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {groups.map((group) => (
        <div className="skill-row" key={group.title}>
          <h3>{group.title}</h3>
          <motion.div
            className="skill-badge-group"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.default}
          >
            {group.items.map((item) => (
              <motion.span
                key={item}
                className="skill-badge"
                variants={staggerFadeUp}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={{
                  duration: duration.buttonHover,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </>
  );
}
