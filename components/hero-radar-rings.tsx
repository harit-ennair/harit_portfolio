"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Concentric orbital / radar rings with satellite node dots,
 * perfectly matching the design mockup behind the hero accent card.
 * Balanced, elegant, and atmospheric across both light and dark themes.
 */
export function HeroRadarRings() {
  const reduceMotion = useReducedMotion();

  // Center coordinate in SVG viewBox (1800 x 1800)
  const cx = 900;
  const cy = 900;

  // Concentric circle definitions (alternating solid / dashed)
  // Subtle fading towards outer rings for an elegant, non-intrusive look
  const rings = [
    { r: 140, dashed: false, opacity: 0.65 },
    { r: 230, dashed: true, strokeDasharray: "4 6", opacity: 0.72 },
    { r: 340, dashed: false, opacity: 0.62 },
    { r: 470, dashed: true, strokeDasharray: "5 7", opacity: 0.68 },
    { r: 620, dashed: false, opacity: 0.55 },
    { r: 790, dashed: true, strokeDasharray: "6 8", opacity: 0.48 },
    { r: 980, dashed: false, opacity: 0.38 },
    { r: 1200, dashed: true, strokeDasharray: "7 9", opacity: 0.28 },
  ];

  // Satellite node dots distributed generously across orbits (delicate sizes)
  const dots = [
    // Ring 1 (r: 140, solid)
    { r: 140, angle: 130, size: 2.8 },
    { r: 140, angle: 310, size: 2.8 },

    // Ring 2 (r: 230, dashed)
    { r: 230, angle: 25, size: 3.0 },
    { r: 230, angle: 110, size: 3.4 },
    { r: 230, angle: 195, size: 3.5 },
    { r: 230, angle: 290, size: 3.0 },

    // Ring 3 (r: 340, solid)
    { r: 340, angle: 40, size: 3.2 },
    { r: 340, angle: 100, size: 3.6 },
    { r: 340, angle: 155, size: 3.8 },
    { r: 340, angle: 220, size: 3.4 },
    { r: 340, angle: 315, size: 3.5 },

    // Ring 4 (r: 470, dashed)
    { r: 470, angle: 15, size: 3.5 },
    { r: 470, angle: 75, size: 3.2 },
    { r: 470, angle: 115, size: 4.0 },
    { r: 470, angle: 170, size: 3.6 },
    { r: 470, angle: 215, size: 4.4 },
    { r: 470, angle: 285, size: 3.8 },

    // Ring 5 (r: 620, solid)
    { r: 620, angle: 30, size: 3.6 },
    { r: 620, angle: 85, size: 3.2 },
    { r: 620, angle: 140, size: 3.8 },
    { r: 620, angle: 180, size: 4.0 },
    { r: 620, angle: 230, size: 3.4 },
    { r: 620, angle: 275, size: 3.2 },
    { r: 620, angle: 330, size: 3.8 },

    // Ring 6 (r: 790, dashed)
    { r: 790, angle: 20, size: 3.4 },
    { r: 790, angle: 65, size: 3.8 },
    { r: 790, angle: 105, size: 3.5 },
    { r: 790, angle: 150, size: 4.0 },
    { r: 790, angle: 210, size: 3.8 },
    { r: 790, angle: 260, size: 3.2 },
    { r: 790, angle: 320, size: 3.8 },
    { r: 790, angle: 355, size: 3.0 },

    // Ring 7 (r: 980, solid)
    { r: 980, angle: 45, size: 3.8 },
    { r: 980, angle: 90, size: 3.4 },
    { r: 980, angle: 145, size: 3.6 },
    { r: 980, angle: 190, size: 4.2 },
    { r: 980, angle: 245, size: 3.5 },
    { r: 980, angle: 305, size: 3.8 },

    // Ring 8 (r: 1200, dashed)
    { r: 1200, angle: 35, size: 3.2 },
    { r: 1200, angle: 110, size: 3.6 },
    { r: 1200, angle: 175, size: 3.8 },
    { r: 1200, angle: 235, size: 3.4 },
    { r: 1200, angle: 295, size: 3.2 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(50% + 0.75rem)",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "1800px",
        height: "1800px",
        pointerEvents: "none",
        zIndex: -1,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1800 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          overflow: "visible",
        }}
      >
        <style>{`
          .hero-orbit-ring {
            transition: stroke 0.3s ease;
          }
          .hero-orbit-dot {
            transition: fill 0.3s ease;
          }
          .hero-orbit-dot-glow {
            transition: fill 0.3s ease;
          }
        `}</style>

        {/* Ambient rotating constellation */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={
            reduceMotion
              ? undefined
              : {
                rotate: 360,
              }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                duration: 90,
                repeat: Infinity,
                ease: "linear",
              }
          }
        >
          {/* Concentric rings */}
          {rings.map((ring, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={ring.r}
              className={`hero-orbit-ring ${ring.dashed ? "dashed" : "solid"}`}
              stroke={ring.dashed ? "var(--orbit-ring-dashed)" : "var(--orbit-ring-solid)"}
              strokeDasharray={ring.dashed ? ring.strokeDasharray : undefined}
              style={{ opacity: ring.opacity }}
              strokeWidth="1.15"
              fill="none"
            />
          ))}

          {/* Satellite node dots with subtle pulsing glow */}
          {dots.map((dot, i) => {
            const rad = (dot.angle * Math.PI) / 180;
            const x = cx + dot.r * Math.cos(rad);
            const y = cy + dot.r * Math.sin(rad);

            return (
              <g key={i}>
                {/* Glow halo pulsing softly */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={dot.size * 2}
                  className="hero-orbit-dot-glow"
                  fill="var(--orbit-glow)"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                        r: [dot.size * 1.6, dot.size * 2.3, dot.size * 1.6],
                        opacity: [0.2, 0.45, 0.2],
                      }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 7) * 0.4,
                      }
                  }
                />
                {/* Main crisp node */}
                <circle
                  cx={x}
                  cy={y}
                  r={dot.size}
                  className="hero-orbit-dot"
                  fill="var(--orbit-dot)"
                />
              </g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
