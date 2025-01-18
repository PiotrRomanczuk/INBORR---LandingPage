import React from "react";
import Image from "next/image";
import { apartmentsList } from "../apartmentsList";
import GalleryLightbox from "../../../components/gallery/GalleryLightbox";
import { ReserveDialog } from "@/app/apartamenty/pereca/ReserveDialog";

export const Mainpic = (imageSrc: any) => {
  return (
    <div className=" items-center justify-center px-10">
      <Image
        //TODO  Passing the correct prop
        src={apartmentsList[0].mainPic}
        width={1600}
        height={800}
        alt="main-picture"
        className="h-auto w-auto rounded-3xl"
        loading="lazy"
      />
      <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
        <GalleryLightbox />
        <ReserveDialog />
      </div>
    </div>
  );
};
