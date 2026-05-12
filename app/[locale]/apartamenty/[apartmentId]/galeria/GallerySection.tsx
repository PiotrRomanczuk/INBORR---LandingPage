import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ILocalizedApartment } from "@/interfaces/IApartment";
import type { CategoryMeta } from "./categories";

interface GallerySectionProps {
  meta: CategoryMeta;
  photos: ILocalizedApartment["pics"];
  index: number;
}

export default function GallerySection({
  meta,
  photos,
  index,
}: GallerySectionProps) {
  const t = useTranslations("galleryView");
  const sectionLabel = t("section", {
    index: String(index + 1).padStart(2, "0"),
  });

  return (
    <section
      id={`sekcja-${meta.key}`}
      aria-labelledby={`naglowek-${meta.key}`}
      className="scroll-mt-[140px] py-10 sm:py-14"
    >
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <div className="skyline-eyebrow text-skyline-muted">
            {sectionLabel}
          </div>
          <h2
            id={`naglowek-${meta.key}`}
            className="mt-2 font-display text-[28px] font-semibold leading-tight text-skyline-ink sm:text-[34px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t(meta.labelKey as Parameters<typeof t>[0])}
          </h2>
        </div>
        <div className="text-[13px] text-skyline-muted">
          {t("photoCount", { count: photos.length })}
        </div>
      </div>
      <span className="skyline-rule" />

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {photos.map((photo, i) => {
          const spanFull = photos.length > 1 && i === 0;
          return (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-xl bg-skyline-line ${
                spanFull ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  spanFull
                    ? "(max-width: 768px) 100vw, 1280px"
                    : "(max-width: 768px) 100vw, 640px"
                }
                className="object-cover"
                loading={index === 0 && i < 2 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
