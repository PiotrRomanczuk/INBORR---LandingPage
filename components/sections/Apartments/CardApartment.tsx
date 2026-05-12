"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BedDouble, Maximize, ArrowUp10, Users, Heart } from "lucide-react";
import { Link } from "@/i18n/routing";

interface CardApartmentProps {
  imageSrc: string;
  title: string;
  district: string;
  description: string;
  hrefLink: string;
  bedroomsNb: number;
  area: number;
  floor: number;
  sleeps: number;
  priceFrom: number;
  rating?: number;
  galleryCount?: number;
}

const Spec = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center gap-3">
    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-skyline-blue-soft text-skyline-blue">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-skyline-muted">
        {label}
      </div>
      <div className="text-[14px] font-semibold text-skyline-ink">{value}</div>
    </div>
  </div>
);

export const CardApartment: FC<CardApartmentProps> = ({
  imageSrc,
  title,
  district,
  description,
  hrefLink,
  bedroomsNb,
  area,
  floor,
  sleeps,
  priceFrom,
  rating = 4.9,
  galleryCount = 18,
}) => {
  const t = useTranslations("apartmentsHome");

  return (
    <article className="overflow-hidden rounded-xl border border-skyline-line bg-white">
      <div className="relative aspect-[16/10] w-full">
        <Link href={hrefLink} className="block h-full w-full">
          <Image
            src={imageSrc}
            alt={t("cardImageAlt", { title })}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Link>
        <div className="absolute left-4 top-4 rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-skyline-blue">
          {t("perNight", { price: priceFrom })}
        </div>
        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-skyline-ink/70 transition hover:text-skyline-blue"
          aria-label={t("favorite")}
        >
          <Heart className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-skyline-muted">
              {district}
            </div>
            <h3 className="font-display mt-1 text-[22px] font-semibold leading-tight tracking-tight text-skyline-ink sm:text-[24px]">
              <Link href={hrefLink}>{title}</Link>
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-md bg-skyline-gold-soft px-2 py-1 text-[12px] font-semibold text-skyline-ink">
            <span className="text-skyline-gold" aria-hidden>
              ★
            </span>
            {rating.toFixed(1)}
          </div>
        </div>

        <p className="mt-3 text-[13px] leading-relaxed text-skyline-muted">
          {description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-skyline-line py-4 sm:grid-cols-4">
          <Spec
            icon={<Maximize className="h-4 w-4" aria-hidden />}
            label={t("specArea")}
            value={`${area} m²`}
          />
          <Spec
            icon={<BedDouble className="h-4 w-4" aria-hidden />}
            label={t("specBedrooms")}
            value={bedroomsNb}
          />
          <Spec
            icon={<ArrowUp10 className="h-4 w-4" aria-hidden />}
            label={t("specFloor")}
            value={floor}
          />
          <Spec
            icon={<Users className="h-4 w-4" aria-hidden />}
            label={t("specGuests")}
            value={sleeps}
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            href={hrefLink}
            className="inline-flex items-center gap-2 rounded-md bg-skyline-blue px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-skyline-blue-deep"
          >
            {t("viewApartment")}
            <span aria-hidden>→</span>
          </Link>
          <span className="text-[12px] font-medium text-skyline-muted">
            {t("gallery")} · {galleryCount}
          </span>
        </div>
      </div>
    </article>
  );
};
