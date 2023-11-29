import React from "react";

interface CardVerticalProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CardUtils: React.FC<CardVerticalProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div
      className=" mx-6 mt-10 flex flex-col items-center gap-10 
    rounded-md bg-white pt-2 text-center uppercase text-black shadow-lg lg:mx-0"
    >
      <div className="flex h-24 justify-center">{icon}</div>
      <h3 className=" font-semibold lg:text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
