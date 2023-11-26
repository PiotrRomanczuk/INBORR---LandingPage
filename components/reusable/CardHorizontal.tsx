import React, { FC } from "react";

import Image from "next/image";

interface CardHorizontalProps {
  imageSrc?: string;
  title: string;
  description: string;
  icon?: () => void;
  // onClick: () => void;
}

export const CardHorizontal: FC<CardHorizontalProps> = ({
  imageSrc,
  title,
  description,
  // onClick,
  icon,
}) => {
  return (
    <div className=" flex w-full rounded-md bg-white p-6 shadow-md">
      <Image
        src={imageSrc || ""}
        width={80}
        height={80}
        alt="image"
        className="mr-12 h-12 w-20 rounded-2xl"
      />

      <div className="flex flex-col ">
        <h3 className="mb-10 text-xl font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="m-auto">Info</button>
    </div>
  );
};
