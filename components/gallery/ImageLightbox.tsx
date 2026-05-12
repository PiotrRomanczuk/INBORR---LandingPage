"use client";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "@/components/gallery/NextJsImage";

interface ImageLightboxProps {
  open: boolean;
  index: number;
  slides: { src: string; alt: string }[];
  onClose: () => void;
  ariaLabel?: string;
}

export default function ImageLightbox({
  open,
  index,
  slides,
  onClose,
  ariaLabel = "Galeria zdjęć apartamentu",
}: ImageLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Counter, Fullscreen, Thumbnails, Zoom]}
      render={{ slide: NextJsImage }}
      counter={{ container: { style: { top: "unset", bottom: "16px", left: "50%", transform: "translateX(-50%)" } } }}
      thumbnails={{
        position: "bottom",
        width: 96,
        height: 64,
        gap: 8,
        border: 0,
        borderRadius: 8,
        padding: 4,
        imageFit: "cover",
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        scrollToZoom: true,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
      }}
      carousel={{ finite: false, preload: 2 }}
      controller={{ closeOnBackdropClick: true }}
      animation={{ fade: 300, swipe: 350 }}
      styles={{
        container: { backgroundColor: "rgba(14, 24, 40, 0.92)" },
        thumbnailsContainer: { backgroundColor: "rgba(14, 24, 40, 0.6)" },
      }}
      aria-modal={true}
      aria-label={ariaLabel}
    />
  );
}
