import React, { FC } from "react";

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
    <div className="flex flex-col rounded-md bg-white p-4 shadow-md">
      {/* <img src={imageSrc} alt={title} className=" h-8 rounded-md" />
      <FontAwesomeIcon icon="fa-solid fa-ruler-combined" /> */}
      {/* {icon} */}
      <div className="m-12">
        <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardHorizontal;
