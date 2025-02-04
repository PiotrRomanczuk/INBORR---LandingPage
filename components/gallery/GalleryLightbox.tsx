// https://yet-another-react-lightbox.com/

"use client";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/gallery/NextJsImage";

// const slides = [image1, image2, image3];

export default function GalleryLightbox({
  slides,
}: {
  slides: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-lg border border-blue-400 bg-blue-400 px-6 py-2 text-white transition duration-300 hover:bg-pink-400"
        type="button"
        onClick={() => setOpen(true)}
      >
        Galeria
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
