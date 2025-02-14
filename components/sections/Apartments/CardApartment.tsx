import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UtilsSection } from "./UtilsSection";
import { ReserveDialog } from "@/app/apartamenty/[apartmentId]/ReserveDialog";

interface CardVerticalProps {
  imageSrc: string;
  title: string;
  location: string;
  description: any;
  hrefLink: string;
  icon?: () => void;
  imagePosition?: "left" | "right" | "sm:left" | "sm:right";
  bedroomsNb: number;
  localization: string;
  area: number;
  floor: number;
  kitchenStyle: string;
  buildingType: string;
  // builtYear: number;
  airbnbLink: URL;
  bookingLink: URL;
  bookableLink: URL;
}

export const CardApartment: FC<CardVerticalProps> = ({
  imageSrc,
  title,
  description,
  location,
  hrefLink,
  imagePosition = "left",
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
          priority
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
            <p className="mt-2 text-sm font-light text-gray-700 lg:text-lg">
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
        className="flex items-center justify-center pt-2 text-xl font-bold md:text-3xl"
      >

        <ReserveDialog className="bg-white text-black py-8 hover:bg-black hover:text-white transition-colors text-4xl duration-300 border border-black rounded-sm px-6 font-medium" 
        bookingLink={bookingLink}
        airbnbLink={airbnbLink}
        bookableLink={bookableLink}
        />
      </div>
    </div>

  );

  return (
    <div className="flex w-full flex-col transition duration-300  sm:flex-row">
      {imagePosition.includes("sm:right") ? (
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
