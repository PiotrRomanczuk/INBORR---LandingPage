"use client";

import React from "react";
import Image from "next/image";

export const Mainpic = ({
  imageSrc,
}: {
  imageSrc: string;
}) => {
  return (
    <div className="items-center justify-center px-10">
      <Image
        src={imageSrc}
        width={1600}
        height={800}
        alt="main-picture"
        className="h-auto w-auto rounded-3xl"
        loading="lazy"
      />
    </div>
  );
};
