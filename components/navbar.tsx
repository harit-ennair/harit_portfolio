"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence, LayoutGroup } from "motion/react";
import { Mail } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, profile } from "@/data/portfolio";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ── Scroll detection ──────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Active section tracking via IntersectionObserver ───────────── */
  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  /* ── Smooth scroll to top ──────────────────────────────────────── */
  const scrollToTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    },
    [reduceMotion],
  );

  return (
    <header className={`site-header${scrolled ? " header-scrolled" : ""}`}>
      <div className="wrap nav-layout">
        <a
          className="brand"
          href="#top"
          aria-label="Harit Ennair, home"
          onClick={scrollToTop}
        >
          HARIT
          <br />
          ENNAIR<span>.</span>
        </a>

        <LayoutGroup>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeSection === item.href}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </nav>
        </LayoutGroup>

        <ThemeToggle />

        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Let&apos;s talk <Mail size={16} aria-hidden="true" />
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}

/* ── Individual nav link with active indicator & hover underline ── */
function NavLink({
  href,
  label,
  isActive,
  reduceMotion,
}: {
  href: string;
  label: string;
  isActive: boolean;
  reduceMotion: boolean;
}) {
  return (
    <a
      href={href}
      className="nav-link-wrapper"
      aria-current={isActive ? "true" : undefined}
      style={{ position: "relative" }}
    >
      {label}

      {/* Hover underline – expand from center */}
      <span className="nav-hover-line" aria-hidden="true" />

      {/* Active indicator – slides between links */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="nav-indicator"
            className="nav-active-indicator"
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -6,
              left: 0,
              right: 0,
              height: 2,
              background: "#6632d0",
              borderRadius: 1,
            }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 350, damping: 30, mass: 0.8 }
            }
          />
        )}
      </AnimatePresence>
    </a>
  );
}
