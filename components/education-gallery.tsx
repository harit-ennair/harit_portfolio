"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { EducationPhoto } from "@/data/education-photos";
import { getAssetPath } from "@/lib/assets";
import { duration, ease } from "@/lib/animations";

export function EducationGallery({
  title,
  photos,
}: {
  title: string;
  photos?: EducationPhoto[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();

  if (!photos || photos.length === 0) {
    return null;
  }

  function openPhoto(index: number, button: HTMLButtonElement) {
    opener.current = button;
    setSelected(index);
    setDirection(0);
    setIsOpen(true);
    dialog.current?.showModal();
  }

  const changePhoto = useCallback(
    (dir: number) => {
      if (!photos) return;
      setDirection(dir);
      setSelected((index) => (index + dir + photos.length) % photos.length);
    },
    [photos]
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div
      className="education-gallery"
      role="group"
      aria-label={`${title} photo gallery`}
    >
      <div className="education-gallery-grid">
        {photos.slice(0, 3).map((photo, index) => (
          <motion.button
            className="education-thumb"
            type="button"
            key={photo.src}
            aria-label={`View photo ${index + 1}: ${photo.alt}`}
            onClick={(event) => openPhoto(index, event.currentTarget)}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            transition={{ duration: duration.buttonHover }}
          >
            <Image
              src={getAssetPath(photo.src)}
              alt=""
              fill
              sizes="(max-width: 760px) 28vw, (max-width: 1050px) 25vw, 12vw"
            />
          </motion.button>
        ))}
      </div>

      <motion.button
        className="education-gallery-link"
        type="button"
        onClick={(event) => openPhoto(0, event.currentTarget)}
        whileHover={reduceMotion ? undefined : { x: 4 }}
        transition={{ duration: duration.buttonHover }}
      >
        View all {photos.length} photos{" "}
        <ArrowRight size={15} aria-hidden="true" />
      </motion.button>

      <dialog
        ref={dialog}
        className="education-lightbox"
        aria-label={`${title} photos`}
        onClose={() => {
          setIsOpen(false);
          opener.current?.focus();
        }}
        onKeyDown={(event) => {
          if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
          ) {
            event.preventDefault();
            changePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {isOpen && photos[selected] && (
          <motion.div
            className="education-lightbox-content"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: duration.modal,
              ease: ease.out,
            }}
          >
            <div className="education-lightbox-bar">
              <span>{title}</span>
              <button
                type="button"
                className="education-lightbox-close"
                onClick={() => dialog.current?.close()}
                aria-label="Close photo viewer"
                autoFocus
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="education-lightbox-image">
              <AnimatePresence
                mode="wait"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={selected}
                  custom={direction}
                  variants={reduceMotion ? undefined : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.25,
                    ease: ease.out,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <Image
                    src={getAssetPath(photos[selected].src)}
                    alt={photos[selected].alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 1100px"
                    loading="eager"
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="education-lightbox-footer">
              <p aria-live="polite" aria-atomic="true">
                {photos[selected].alt}{" "}
                <span>
                  ({selected + 1} / {photos.length})
                </span>
              </p>
              <div className="education-lightbox-controls">
                <motion.button
                  type="button"
                  onClick={() => changePhoto(-1)}
                  aria-label="Previous photo"
                  whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                >
                  <ArrowLeft size={20} aria-hidden="true" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => changePhoto(1)}
                  aria-label="Next photo"
                  whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                >
                  <ArrowRight size={20} aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </dialog>
    </div>
  );
}
