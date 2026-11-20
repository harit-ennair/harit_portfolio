"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Concentric orbital / radar rings with satellite node dots,
 * perfectly matching the design mockup behind the hero accent card.
 * Rich constellation of pulsing satellite nodes with smooth ambient rotation.
 */
export function HeroRadarRings() {
  const reduceMotion = useReducedMotion();

  // Center coordinate in SVG viewBox (1800 x 1800)
  const cx = 900;
  const cy = 900;

  // Concentric circle definitions (alternating solid / dashed)
  const rings = [
    { r: 140, dashed: false, opacity: 0.38 },
    { r: 230, dashed: true, strokeDasharray: "4 6", opacity: 0.46 },
    { r: 340, dashed: false, opacity: 0.36 },
    { r: 470, dashed: true, strokeDasharray: "5 7", opacity: 0.44 },
    { r: 620, dashed: false, opacity: 0.32 },
    { r: 790, dashed: true, strokeDasharray: "6 8", opacity: 0.28 },
    { r: 980, dashed: false, opacity: 0.2 },
    { r: 1200, dashed: true, strokeDasharray: "7 9", opacity: 0.15 },
  ];

  // Satellite node dots distributed generously across all orbits
  const dots = [
    // Ring 1 (r: 140, solid)
    { r: 140, angle: 130, size: 3.2 },
    { r: 140, angle: 310, size: 3.0 },

    // Ring 2 (r: 230, dashed)
    { r: 230, angle: 25, size: 3.2 },
    { r: 230, angle: 110, size: 3.5 },
    { r: 230, angle: 195, size: 3.6 },
    { r: 230, angle: 290, size: 3.0 },

    // Ring 3 (r: 340, solid)
    { r: 340, angle: 40, size: 3.5 },
    { r: 340, angle: 100, size: 3.8 },
    { r: 340, angle: 155, size: 4.2 },
    { r: 340, angle: 220, size: 3.6 },
    { r: 340, angle: 315, size: 3.8 },

    // Ring 4 (r: 470, dashed)
    { r: 470, angle: 15, size: 3.8 },
    { r: 470, angle: 75, size: 3.5 },
    { r: 470, angle: 115, size: 4.4 },
    { r: 470, angle: 170, size: 4.0 },
    { r: 470, angle: 215, size: 4.8 },
    { r: 470, angle: 285, size: 4.0 },

    // Ring 5 (r: 620, solid)
    { r: 620, angle: 30, size: 4.0 },
    { r: 620, angle: 85, size: 3.6 },
    { r: 620, angle: 140, size: 4.2 },
    { r: 620, angle: 180, size: 4.5 },
    { r: 620, angle: 230, size: 3.8 },
    { r: 620, angle: 275, size: 3.6 },
    { r: 620, angle: 330, size: 4.4 },

    // Ring 6 (r: 790, dashed)
    { r: 790, angle: 20, size: 3.6 },
    { r: 790, angle: 65, size: 4.0 },
    { r: 790, angle: 105, size: 3.8 },
    { r: 790, angle: 150, size: 4.4 },
    { r: 790, angle: 210, size: 4.2 },
    { r: 790, angle: 260, size: 3.6 },
    { r: 790, angle: 320, size: 4.0 },
    { r: 790, angle: 355, size: 3.5 },

    // Ring 7 (r: 980, solid)
    { r: 980, angle: 45, size: 4.2 },
    { r: 980, angle: 90, size: 3.6 },
    { r: 980, angle: 145, size: 4.0 },
    { r: 980, angle: 190, size: 4.5 },
    { r: 980, angle: 245, size: 3.8 },
    { r: 980, angle: 305, size: 4.2 },

    // Ring 8 (r: 1200, dashed)
    { r: 1200, angle: 35, size: 3.6 },
    { r: 1200, angle: 110, size: 4.0 },
    { r: 1200, angle: 175, size: 4.2 },
    { r: 1200, angle: 235, size: 3.8 },
    { r: 1200, angle: 295, size: 3.6 },
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
            fill: none;
            stroke: rgba(124, 58, 237, 0.35);
            transition: stroke 0.3s ease;
          }
          .hero-orbit-ring.dashed {
            stroke: rgba(139, 92, 246, 0.45);
          }
          .hero-orbit-dot {
            fill: #7c3aed;
            transition: fill 0.3s ease;
          }
          .hero-orbit-dot-glow {
            fill: #7c3aed;
            opacity: 0.28;
            transition: fill 0.3s ease;
          }

          :is(.dark, [data-theme="dark"]) .hero-orbit-ring {
            stroke: rgba(167, 139, 250, 0.35);
          }
          :is(.dark, [data-theme="dark"]) .hero-orbit-ring.dashed {
            stroke: rgba(192, 132, 252, 0.45);
          }
          :is(.dark, [data-theme="dark"]) .hero-orbit-dot {
            fill: #c084fc;
          }
          :is(.dark, [data-theme="dark"]) .hero-orbit-dot-glow {
            fill: #c084fc;
            opacity: 0.38;
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
              strokeDasharray={ring.dashed ? ring.strokeDasharray : undefined}
              style={{ opacity: ring.opacity }}
              strokeWidth="1.2"
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
                  r={dot.size * 2.2}
                  className="hero-orbit-dot-glow"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          r: [dot.size * 1.8, dot.size * 2.6, dot.size * 1.8],
                          opacity: [0.2, 0.48, 0.2],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: (i % 7) * 0.38,
                        }
                  }
                />
                {/* Main crisp node */}
                <circle
                  cx={x}
                  cy={y}
                  r={dot.size}
                  className="hero-orbit-dot"
                />
              </g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
