import React, { FC } from "react";
import Link from "next/link";

import Image from "next/image";

import deskIcon from "@/public/icons/furniture-desk.svg";
import realEstatePlanIcon from "@/public/icons/real-estate-plan.svg";
import securityKeyIcon from "@/public/icons/security-key.svg";
import weatherIcon from "@/public/icons/weather-snow.svg";
import bedIcon from "@/public/icons/bedroom.svg";

interface CardHorizontalProps {
  imageSrc?: string;
  title: string;
  location: string;
  description: any;
  hrefLink: string;
  icon?: () => void;
}

export const CardApartment: FC<CardHorizontalProps> = ({
  imageSrc,
  title,
  description,
  location,
  hrefLink,
}) => {
  return (
    <div className=" border-2 px-8 transition duration-200 hover:scale-105 lg:px-0">
      <Link href={hrefLink} className="pointer">
        <Image
          src={imageSrc || ""}
          layout="responsive"
          width={1200}
          height={900}
          alt="image"
          className=" lg:rounded-2xl"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col items-center pt-4 text-center text-black lg:text-2xl">
        <Link href={hrefLink} className="pointer">
          <div>{title}</div>
        </Link>

        <Link href={hrefLink} className="pointer">
          <div className="text-sm font-light text-gray-700 lg:text-lg">
            {location}
          </div>
        </Link>
        <div className="flex gap-3 pt-4 text-sm text-gray-900">
          <div className="flex items-center justify-center lg:text-lg">
            <Link href={hrefLink} className="pointer">
              <Image
                src={securityKeyIcon}
                alt="desk"
                width={30}
                height={30}
                className="mr-2"
                loading="lazy"
              />
            </Link>
            <Link href={hrefLink} className="pointer lg:text-lg">
              <div className="pt-2">2 bedrooms</div>
            </Link>
          </div>
          <div className="flex content-center">
            <Link href={hrefLink} className="pointer ">
              <Image
                src={securityKeyIcon}
                alt="desk"
                width={30}
                height={30}
                className="mr-2"
                loading="lazy"
              />
            </Link>
            <Link href={hrefLink} className="pointer lg:text-lg">
              <div className="pt-2">40m2</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
