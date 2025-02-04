import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UtilsSection } from "./UtilsSection";

interface CardVerticalProps {
  imageSrc: string;
  title: string;
  location: string;
  description: any;
  hrefLink: string;
  icon?: () => void;
  imagePosition?: "left" | "right" | "sm:left" | "sm:right";
  bedroomsNb: number;
  area: number;
  floor: number;
  kitchenStyle: string;
  buildingType: string;
  builtYear: number;
  airbnbLink: URL;
  bookingLink: URL;
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
  builtYear,
}) => {
  const ImageSection = (
    <Link
      href={hrefLink}
      className="pointer mx-2 w-full transition-all duration-300 hover:scale-105 sm:w-3/5"
    >
      <div className="relative h-64 sm:h-[400px]">
        <Image
          src={imageSrc}
          alt={`Zdjęcie ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="rounded-lg object-cover"
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
              builtYear={builtYear}
            />
          </div>
        </Link>
      </div>
      <Link
        href="https://rezerwacje.inborr.pl"
        className="flex items-center justify-center p-2 text-xl font-bold md:text-3xl"
      >
        <div className="mt-4 flex justify-center gap-4 rounded-md px-4 py-6 text-center text-3xl transition-all duration-300 hover:scale-105 hover:bg-blue-500 ">
          Zarezerwuj
        </div>
      </Link>
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
