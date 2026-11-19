"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import type { EducationPhoto } from "@/data/education-photos";
import { getAssetPath } from "@/lib/assets";

export function EducationGallery({ title, photos }: { title: string; photos?: EducationPhoto[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!photos || photos.length === 0) {
    return null;
  }

  function openPhoto(index: number, button: HTMLButtonElement) {
    opener.current = button;
    setSelected(index);
    setIsOpen(true);
    dialog.current?.showModal();
  }

  function changePhoto(direction: number) {
    if (!photos) return;
    setSelected((index) => (index + direction + photos.length) % photos.length);
  }

  return (
    <div className="education-gallery" role="group" aria-label={`${title} photo gallery`}>
      <div className="education-gallery-grid">
        {photos.slice(0, 3).map((photo, index) => (
          <button className="education-thumb" type="button" key={photo.src} aria-label={`View photo ${index + 1}: ${photo.alt}`} onClick={(event) => openPhoto(index, event.currentTarget)}>
            <Image src={getAssetPath(photo.src)} alt="" fill sizes="(max-width: 760px) 28vw, (max-width: 1050px) 25vw, 12vw" />
          </button>
        ))}
      </div>
      <button className="education-gallery-link" type="button" onClick={(event) => openPhoto(0, event.currentTarget)}>
        View all {photos.length} photos <ArrowRight size={15} aria-hidden="true" />
      </button>
      <dialog ref={dialog} className="education-lightbox" aria-label={`${title} photos`} onClose={() => { setIsOpen(false); opener.current?.focus(); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changePhoto(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        {isOpen && photos[selected] && <div className="education-lightbox-content">
          <div className="education-lightbox-bar"><span>{title}</span><button type="button" className="education-lightbox-close" onClick={() => dialog.current?.close()} aria-label="Close photo viewer" autoFocus><X size={22} aria-hidden="true" /></button></div>
          <div className="education-lightbox-image"><Image src={getAssetPath(photos[selected].src)} alt={photos[selected].alt} fill sizes="(max-width: 760px) 100vw, 1100px" loading="eager" /></div>
          <div className="education-lightbox-footer"><p aria-live="polite" aria-atomic="true">{photos[selected].alt} <span>({selected + 1} / {photos.length})</span></p><div className="education-lightbox-controls"><button type="button" onClick={() => changePhoto(-1)} aria-label="Previous photo"><ArrowLeft size={20} aria-hidden="true" /></button><button type="button" onClick={() => changePhoto(1)} aria-label="Next photo"><ArrowRight size={20} aria-hidden="true" /></button></div></div>
        </div>}
      </dialog>
    </div>
  );
}
