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
    <div className="m-4 flex flex-col items-center rounded-md border border-red-100  bg-white text-center uppercase text-black">
      <div className="flex h-24 justify-center">{icon}</div>
      <div className="m-12">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
