import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { UtilsSection } from "./UtilsSection";

interface CardVerticalProps {
  imageSrc?: string;
  title: string;
  location: string;
  description: any;
  hrefLink: string;
  icon?: () => void;
  imagePosition?: "left" | "right";
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
    <Link href={hrefLink} className="pointer w-full sm:w-3/5">
      <div className="relative h-64 sm:h-auto">
        <Image
          src={imageSrc || "/default-image.jpg"} // Provide a default image
          alt={`Image of ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          loading="lazy"
        />
      </div>
    </Link>
  );

  const ContentSection = (
    <div className="flex w-full flex-col justify-between p-4 sm:w-2/5 sm:p-6">
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
      <div
        className={`mt-4 flex justify-center gap-4 rounded-md border border-blue-500 px-4 py-6 text-center text-3xl transition-colors ${
          imagePosition === "left" ? "sm:ml-2" : "sm:mr-2"
        }`}
      >
        <Link
          href="https://rezerwacje.inborr.pl"
          className="flex items-center justify-center border p-2"
        >
          {/* <Image
            src="/bookable.png"
            alt="bookable"
            width={320}
            height={800}
            className="h-4 w-4"
          /> */}
          Zarezerwuj
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col transition duration-300 hover:scale-105 sm:flex-row">
      {imagePosition === "left" ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </div>
  );
};
