import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UtilsSection } from "./UtilsSection";
import { ReserveDialog } from "@/app/apartamenty/[apartmentId]/ReserveDialog";

interface CardVerticalProps {
  imageSrc: string;
  title: string;
  location: string;
  description: { short: string; long: string[] };
  hrefLink: string;
  icon?: () => void;
  reverseOnDesktop?: boolean;
  bedroomsNb: number;
  localization: string;
  area: number;
  floor: number;
  kitchenStyle: string;
  buildingType: string;
  airbnbLink: URL;
  bookingLink: URL;
  bookableLink?: URL;
}

export const CardApartment: FC<CardVerticalProps> = ({
  imageSrc,
  title,
  description,
  location,
  hrefLink,
  reverseOnDesktop = false,
  airbnbLink,
  bookingLink,
  bedroomsNb,
  area,
  floor,
  kitchenStyle,
  buildingType,
  localization,
  bookableLink
}) => {
  const ImageSection = (
    <Link
      href={hrefLink}
      className="pointer mx-2 w-full sm:w-3/5"
    >
      <div className="relative h-64 sm:h-[400px] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={`Zdjęcie ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="rounded-lg object-cover transition-all duration-300 hover:scale-110"
        />
      </div>
    </Link>
  );

  const ContentSection = (
    <div className="flex w-full flex-col justify-between p-4 sm:w-2/5">
      <div>
        <Link href={hrefLink} className="pointer">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
            <p className="mt-2 text-sm font-light text-muted-foreground lg:text-lg">
              {location}
            </p>
          </div>
          <div className="animate-fade-in">
            <UtilsSection
              bedroomsNb={bedroomsNb}
              area={area}
              floor={floor}
              kitchenStyle={kitchenStyle}
              buildingType={buildingType}
              localization={localization}
            />
          </div>
        </Link>
      </div>
      <div
        className="flex items-center justify-center pt-2"
      >
        <ReserveDialog className="bg-foreground text-background px-8 py-3 text-base sm:text-lg font-medium rounded-md shadow-md hover:shadow-lg hover:bg-foreground/90 transition-all duration-300"
        bookingLink={bookingLink}
        airbnbLink={airbnbLink}
        bookableLink={bookableLink}
        />
      </div>
    </div>

  );

  return (
    <div className="flex w-full flex-col transition duration-300 sm:flex-row">
      {reverseOnDesktop ? (
        <>
          <div className="block sm:hidden">
            {ImageSection}
            {ContentSection}
          </div>
          <div className="hidden sm:flex">
            {ContentSection}
            {ImageSection}
          </div>
        </>
      ) : (
        <>
          {ImageSection}
          {ContentSection}
        </>
      )}
    </div>
  );
};
