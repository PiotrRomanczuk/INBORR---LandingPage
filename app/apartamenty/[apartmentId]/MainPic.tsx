"use client";

import React from "react";
import Image from "next/image";
import GalleryLightbox from "../../../components/gallery/GalleryLightbox";
import { ReserveDialog } from "@/app/apartamenty/[apartmentId]/ReserveDialog";

export const Mainpic = ({
  imageSrc,
  slides,
}: {
  imageSrc: string;
  slides: { src: string; alt: string }[];
}) => {
  return (
    <div className=" items-center justify-center px-10">
      <Image
        src={imageSrc}
        width={1600}
        height={800}
        alt="main-picture"
        className="h-auto w-auto rounded-3xl"
        loading="lazy"
      />
      <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
        <GalleryLightbox slides={slides} />
        <ReserveDialog />
      </div>
    </div>
  );
};
