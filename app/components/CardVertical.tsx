import React, { FC } from "react";
import Image from "next/image";

interface CardVerticalProps {
  imageSrc?: string;
  title: string;
  description: string;
  icon?: () => void;
  // onClick: () => void;
}

const CardVertical: FC<CardVerticalProps> = ({
  imageSrc,
  title,
  description,
  // onClick,
  icon,
}) => {
  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-md">
      <Image
        src={imageSrc}
        alt={title}
        className="mb-4 h-auto w-full rounded-md"
      />
      {/* <FontAwesomeIcon icon="fa-solid fa-ruler-combined" /> */}
      {/* {icon} */}
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardVertical;
