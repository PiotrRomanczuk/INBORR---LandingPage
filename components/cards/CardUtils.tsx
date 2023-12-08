import React from "react";
import Image from "next/image";

interface CardVerticalProps {
  title: string;
  description: string;
  icon: any;
}

export const CardUtils: React.FC<CardVerticalProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div
      className="flex flex-col items-center rounded-md 
    bg-white p-2 text-center uppercase text-black shadow-lg lg:mx-0"
    >
      <Image
        src={icon}
        alt="desk"
        width={30}
        height={30}
        className="h-10 w-10"
        loading="lazy"
      />
      <div className=" font-semibold lg:text-xl">{title}</div>
      {/* <p>{description}</p> */}
    </div>
  );
};
