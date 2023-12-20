"use client";

import React from "react";
import Image from "next/image";

interface CardVerticalProps {
  title: string;
  icon: any;
}

export const CardUtils: React.FC<CardVerticalProps> = ({ title, icon }) => {
  return (
    <div className="mx-auto my-2 h-32 w-40 max-w-xs items-center gap-4 rounded-lg bg-white p-2 py-4 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl lg:h-44  lg:w-72 lg:p-6">
      <div className="mb-2 lg:mb-6">
        <Image
          src={icon}
          alt="icon"
          width={100}
          height={100}
          className="mx-auto h-12 w-12 lg:h-16 lg:w-16"
          loading="lazy"
        />
      </div>
      <div className="text-center text-lg font-semibold lg:text-xl">
        {title}
      </div>
    </div>
  );
};
