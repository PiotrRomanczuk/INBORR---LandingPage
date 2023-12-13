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

      className="max-w-40 flex flex-col items-center border border-black"
    //   className="max-w-40 flex flex-col items-center
    // rounded-md p-2 text-center uppercase text-black shadow-xl "
    >
      <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="h-48 w-48"
        loading="lazy"
      />
      <div className=" font-semibold lg:text-xl">{title}</div>
      {/* <p>{description}</p> */}
    </div>
  );
};
