import React, { FC } from "react";
import Link from "next/link";

import Image from "next/image";

import { UtilsSection } from "../sections/UtilsSection";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CardVerticalProps {
  imageSrc?: string;
  title: string;
  location: string;
  description: any;
  hrefLink: string;
  icon?: () => void;
  imagePosition?: "left" | "right";
  // Add new props
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
  // Add new props
  bedroomsNb,
  area,
  floor,
  kitchenStyle,
  buildingType,
  builtYear,
}) => {
  const isSmallScreen = useMediaQuery(768);

  const ImageSection = (
    <Link href={hrefLink} className="pointer w-full md:w-3/5">
      <Image
        src={imageSrc || ""}
        width={1200}
        height={800}
        alt="image"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </Link>
  );

  const ContentSection = (
    <div className="flex w-full flex-col justify-between md:w-2/5">
      <div className="flex flex-col p-4 md:p-6">
        <Link href={hrefLink} className="pointer">
          <div className="flex flex-col">
            <div className="text-xl font-semibold lg:text-2xl">{title}</div>

            <div className="mt-2 text-sm font-light text-gray-700 lg:text-lg">
              {location}
            </div>
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
      <div
        className={`mt-4 flex flex-col justify-between gap-2 rounded-md border border-blue-500 px-2 py-4 text-center text-xl transition-colors md:flex-row md:gap-4 md:px-4 md:py-6 ${
          imagePosition === "left" ? "ml-0 md:ml-2" : "mr-0 md:mr-2"
        }`}
      >
        <Link href={airbnbLink} className="border ">
          AirBnb
        </Link>
        <Link href={bookingLink} className="border ">
          Booking
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col transition duration-300 hover:scale-105 md:flex-row">
      {!isSmallScreen && imagePosition === "left" ? (
        <>
          {ImageSection}
          {ContentSection}
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
