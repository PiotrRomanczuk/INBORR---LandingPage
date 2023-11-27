import React, { FC } from "react";

import Image from "next/image";
import deskIcon from "../public/icons/furniture-desk.svg";
import realEstatePlanIcon from "../public/icons/real-estate-plan.svg";
import securityKeyIcon from "../public/icons/security-key.svg";
import weatherIcon from "../public/icons/weather-snow.svg";

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
    <div className=" flex w-full flex-col items-center rounded-md bg-white  shadow-md">
      <Image
        src={imageSrc || ""}
        width={1250}
        height={800}
        alt="image"
        className="h-auto w-80 rounded-2xl"
      />

      <div className="flex flex-col items-center pt-8">
        <h3 className="mb-10 text-3xl font-semibold text-gray-600 ">{title}</h3>
        <div className="grid grid-cols-2">
          <p className="p-10 text-xl text-gray-600">{description}</p>
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <Image
                src={realEstatePlanIcon}
                alt="desk"
                width={50}
                height={50}
                className="mr-2"
              />
              <div className="items-center text-center">40 m2</div>
            </div>
            <div className="flex items-center">
              <Image
                src={securityKeyIcon}
                alt="desk"
                width={50}
                height={50}
                className="mr-2"
              />
              <div className="text-center">Self Check-In</div>
            </div>
            <div className="flex items-center">
              <Image
                src={weatherIcon}
                alt="desk"
                width={50}
                height={50}
                className="mr-2"
              />
              <div className="text-center">Klimatyzowane</div>
            </div>
            <div className="flex items-center">
              <Image
                src={deskIcon}
                alt="desk"
                width={50}
                height={50}
                className="mr-2"
              />
              <div className="text-center">Miejsce do pracy</div>
            </div>
          </div>
        </div>
      </div>
      <button className="my-10 rounded-2xl bg-blue-300 px-28 py-10 text-3xl uppercase transition duration-300 hover:bg-blue-500">
        More Info
      </button>
    </div>
  );
};
