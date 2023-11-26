import React from "react";

interface CardVerticalProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CardVertical: React.FC<CardVerticalProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="mx-10 mt-10 flex flex-col items-center rounded-md bg-white py-16 text-center uppercase text-black shadow-lg lg:mx-4">
      <div className="flex h-24 justify-center">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
