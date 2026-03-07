"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BedDouble, Maximize, ArrowUp10 } from "lucide-react";
import { ReserveDialog } from "@/app/apartamenty/[apartmentId]/ReserveDialog";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

interface CardApartmentProps {
  imageSrc: string;
  title: string;
  location: string;
  description: { short: string; long: string[] };
  pics: { src: string; alt: string }[];
  hrefLink: string;
  reverseOnDesktop?: boolean;
  bedroomsNb: number;
  area: number;
  floor: number;
  priceFrom: number;
  airbnbLink: URL;
  bookingLink: URL;
  bookableLink?: URL;
}

export const CardApartment: FC<CardApartmentProps> = ({
  imageSrc,
  title,
  description,
  location,
  pics,
  hrefLink,
  reverseOnDesktop = false,
  airbnbLink,
  bookingLink,
  bookableLink,
  bedroomsNb,
  area,
  floor,
  priceFrom,
}) => {
  const ImageSection = (
    <div className="w-full sm:w-3/5">
      <Link href={hrefLink} className="block">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-[400px]">
          <Image
            src={imageSrc}
            alt={`Zdjęcie ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="rounded-lg object-cover transition-all duration-300 hover:scale-110"
          />
        </div>
      </Link>
      <div className="mt-3">
        <GalleryLightbox slides={pics} showThumbnails />
      </div>
    </div>
  );

  const ContentSection = (
    <div className="flex w-full flex-col justify-between p-4 sm:w-2/5">
      <div>
        <Link href={hrefLink}>
          <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
          <p className="mt-1 text-sm font-light text-muted-foreground lg:text-base">
            {location}
          </p>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description.short}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" />
            {bedroomsNb} {bedroomsNb === 1 ? "sypialnia" : "sypialnie"}
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4" />
            {area} m²
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <ArrowUp10 className="h-4 w-4" />
            {floor} piętro
          </span>
        </div>

        <p className="mt-3 text-lg font-semibold">
          od {priceFrom} PLN{" "}
          <span className="text-sm font-normal text-muted-foreground">/ noc</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <ReserveDialog
          className="rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg sm:text-lg"
          bookingLink={bookingLink}
          airbnbLink={airbnbLink}
          bookableLink={bookableLink}
        />
        <Link
          href={hrefLink}
          className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Zobacz szczegóły →
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className={`flex w-full flex-col transition duration-300 sm:flex-row ${
        reverseOnDesktop ? "sm:flex-row-reverse" : ""
      }`}
    >
      {ImageSection}
      {ContentSection}
    </div>
  );
};
