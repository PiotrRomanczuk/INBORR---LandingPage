"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ImageLightbox from "@/components/gallery/ImageLightbox";

interface GalleryPic {
  src: string;
  alt: string;
}

interface SkylineGalleryProps {
  mainPic: string;
  apartmentName: string;
  apartmentShortName: string;
  pics: GalleryPic[];
}

const GRID_TILES = 4;

export function SkylineGallery({
  mainPic,
  apartmentName,
  apartmentShortName,
  pics,
}: SkylineGalleryProps) {
  const t = useTranslations("skylineGallery");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides: GalleryPic[] = [{ src: mainPic, alt: apartmentName }, ...pics];
  const gridPics = pics.slice(0, GRID_TILES);
  const remaining = Math.max(0, slides.length - (GRID_TILES + 1));
  const galleryHref = `/apartamenty/${apartmentShortName}/galeria`;

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="relative grid grid-cols-1 gap-2 md:grid-cols-12 md:h-[460px]">
        <button
          type="button"
          onClick={() => openAt(0)}
          aria-label={t("openGallery")}
          className="group relative col-span-7 aspect-[16/10] overflow-hidden rounded-xl md:aspect-auto md:h-full"
        >
          <Image
            src={mainPic}
            alt={apartmentName}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </button>
        <div className="col-span-5 grid grid-cols-2 grid-rows-2 gap-2">
          {gridPics.map((pic, i) => {
            const isLast = i === GRID_TILES - 1;
            const showOverlay = isLast && remaining > 0;
            const tileClass =
              "group relative aspect-square overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-gold";
            const tileLabel = showOverlay
              ? t("viewAllPhotos", { count: slides.length })
              : t("openPhoto", { index: i + 2 });
            const tileImage = (
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            );
            const overlay = showOverlay && (
              <div
                className="absolute inset-0 flex items-center justify-center text-white"
                style={{ background: "rgba(14,24,40,.55)" }}
              >
                <div className="text-center">
                  <div className="font-display text-[28px] font-semibold leading-none">
                    +{remaining}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[.16em]">
                    {t("seeAll")}
                  </div>
                </div>
              </div>
            );

            return showOverlay ? (
              <Link
                key={pic.src}
                href={galleryHref}
                aria-label={tileLabel}
                className={tileClass}
              >
                {tileImage}
                {overlay}
              </Link>
            ) : (
              <button
                key={pic.src}
                type="button"
                onClick={() => openAt(i + 1)}
                aria-label={tileLabel}
                className={tileClass}
              >
                {tileImage}
              </button>
            );
          })}
        </div>

        <Link
          href={galleryHref}
          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-skyline-line bg-skyline-paper/95 px-4 py-2 text-[13px] font-medium text-skyline-ink shadow-sm backdrop-blur transition hover:bg-skyline-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-gold md:bottom-5 md:left-5"
        >
          <span aria-hidden="true">▦</span>
          {t("showAllPhotos", { count: slides.length })}
        </Link>
      </div>

      <ImageLightbox
        open={open}
        onClose={handleClose}
        index={index}
        slides={slides}
        ariaLabel={t("galleryAria", { name: apartmentName })}
      />
    </>
  );
}
