import React, { FC } from "react";

import Image from "next/image";

interface CardHorizontalProps {
  imageSrc?: string;
  title: string;
  description: string;
  icon?: () => void;
  // onClick: () => void;
}

const CardHorizontal: FC<CardHorizontalProps> = ({
  imageSrc,
  title,
  description,
  // onClick,
  icon,
}) => {
  return (
    <div className="flex rounded-md bg-white p-12 shadow-md">
      <Image
        src={imageSrc}
        alt="image"
        width={300}
        height={100}
        className="mr-12"
      />
      <div className="flex flex-col ">
        <h3 className="mb-10 text-xl font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="m-auto">Info</button>
    </div>
  );
};

export default CardHorizontal;
