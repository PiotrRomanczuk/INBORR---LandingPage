import React from "react";
import Image from "next/image";
import { apartmentsList } from "../apartmentsList";
import GalleryLightbox from "../../../components/YARL/GalleryLightbox";
import { ReserveDialog } from "@/app/apartamenty/[apartmentId]/ReserveDialog";

export const Mainpic = (imageSrc: any) => {
  return (
    <div className="items-center justify-center ">
      <Image
        //TODO  Passing the correct prop
        src={apartmentsList[0].mainPic}
        width={1600}
        height={800}
        alt="main-picture"
        className="h-auto w-auto"
        loading="lazy"
      />
      <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
        <GalleryLightbox />
        <ReserveDialog />
      </div>
    </div>
  );
};
