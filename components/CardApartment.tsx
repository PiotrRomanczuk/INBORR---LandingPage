import React, { FC } from "react";
import Link from "next/link";

import Image from "next/image";
import deskIcon from "../public/icons/furniture-desk.svg";
import realEstatePlanIcon from "../public/icons/real-estate-plan.svg";
import securityKeyIcon from "../public/icons/security-key.svg";
import weatherIcon from "../public/icons/weather-snow.svg";

import bedIcon from "../public/icons/bedroom.svg";

interface CardHorizontalProps {
  imageSrc?: string;
  title: string;
  location: string;
  description: string;
  hrefLink: string;
  icon?: () => void;
  // onClick: () => void;
}

export const CardApartment: FC<CardHorizontalProps> = ({
  imageSrc,
  title,
  description,
  location,
  hrefLink,
  // onClick,
  // icon,
}) => {
  return (
    <div className=" flex w-full flex-col rounded-md bg-white ">
      <div className="items-center justify-center">
        <Link href={hrefLink} className="pointer">
          <Image
            src={imageSrc || ""}
            width={1600}
            height={800}
            alt="image"
            className="h-auto w-auto"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start pt-4 text-lg">
        <Link href={hrefLink} className="pointer">
          <div>{title}</div>
        </Link>

        <Link href={hrefLink} className="pointer">
          <div className="text-sm font-light text-gray-700">{location}</div>
        </Link>
        <div className="flex gap-3 pt-4 text-sm text-gray-900">
          <Link href={hrefLink} className="pointer">
            <div className="flex justify-center">
              <Image
                src={bedIcon}
                alt="desk"
                width={30}
                height={30}
                className="mr-2"
              />
              <div className="pt-2">2 bedrooms</div>
            </div>
          </Link>
          <Link href={hrefLink} className="pointer">
            <div className="flex content-center">
              <Image
                src={realEstatePlanIcon}
                alt="desk"
                width={30}
                height={30}
                className="mr-2"
              />
              <div className="pt-2">40m2</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
