"use client";

import React from "react";
import Image from "next/image";

interface CardVerticalProps {
  title: string;
  icon: any;
}

export const CardUtils: React.FC<CardVerticalProps> = ({ title, icon }) => {
  return (
    <div className="mx-auto  w-72 max-w-xs rounded-lg bg-white p-6 shadow-md transition duration-300 ease-in-out hover:shadow-xl">
      <div className="mb-6">
        <Image
          src={icon}
          alt="icon"
          width={100}
          height={100}
          className="mx-auto h-16 w-16"
          loading="lazy"
        />
      </div>
      <div className="text-center text-xl font-semibold">{title}</div>
    </div>
  );
};
