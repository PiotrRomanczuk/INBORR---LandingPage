import React, { FC } from "react";

import Image from "next/image";
import deskIcon from "../public/icons/furniture-desk.svg";
import realEstatePlanIcon from "../public/icons/real-estate-plan.svg";
import securityKeyIcon from "../public/icons/security-key.svg";
import weatherIcon from "../public/icons/weather-snow.svg";

import bedIcon from "../public/icons/bedroom.svg";

interface CardHorizontalProps {
  imageSrc?: string;
  title: string;
  description: string;
  icon?: () => void;
  // onClick: () => void;
}

export const CardApartment: FC<CardHorizontalProps> = ({
  imageSrc,
  title,
  description,
  // onClick,
  icon,
}) => {
  return (
    <div className=" flex w-full flex-col rounded-md bg-white ">
      <div className="items-center justify-center">
        <Image
          src={imageSrc || ""}
          width={1600}
          height={800}
          alt="image"
          className="h-auto w-auto"
        />
      </div>
      <div className="flex flex-col items-start pt-4 text-lg">
        <div>Skyline Cool Space at Chłodna</div>

        <div className="text-sm font-light text-gray-700">
          Warszawa, Śródmieście, Chłodna
        </div>
        <div className="flex gap-3 pt-4 text-sm text-gray-900">
          <div className="flex justify-center">
            <Image
              src={bedIcon}
              alt="desk"
              width={30}
              height={30}
              className="mr-2"
            />
            <div className="pt-1">2 sypialnie</div>
          </div>
          <div className="flex content-center">
            <Image
              src={realEstatePlanIcon}
              alt="desk"
              width={30}
              height={30}
              className="mr-2"
            />
            <div className="pt-1">40m2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
