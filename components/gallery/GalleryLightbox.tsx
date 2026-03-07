// https://yet-another-react-lightbox.com/

"use client";
import { useCallback, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/gallery/NextJsImage";

const THUMBNAIL_COUNT = 4;

export default function GalleryLightbox({
  slides,
  showThumbnails = false,
}: {
  slides: { src: string; alt: string }[];
  showThumbnails?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const handleClose = useCallback(() => setOpen(false), []);

  const visibleThumbs = slides.slice(0, THUMBNAIL_COUNT);
  const remaining = slides.length - THUMBNAIL_COUNT;
  const total = slides.length;

  return (
    <>
      {showThumbnails ? (
        <div className="flex gap-2" role="group" aria-label="Miniaturki galerii zdjęć">
          {visibleThumbs.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Otwórz zdjęcie ${i + 1} z ${total}`}
              className="group relative aspect-[4/3] flex-1 overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 25vw, 15vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              {i === THUMBNAIL_COUNT - 1 && remaining > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold text-white">
                  +{remaining}
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <button
          className="rounded-md bg-primary px-6 py-2 text-primary-foreground transition duration-300 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          type="button"
          onClick={() => openAt(0)}
        >
          Galeria
        </button>
      )}

      <Lightbox
        open={open}
        close={handleClose}
        index={index}
        slides={slides}
        render={{ slide: NextJsImage }}
        aria-modal={true}
        aria-label="Galeria zdjęć"
      />
    </>
  );
}
