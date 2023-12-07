import React from "react";
import Image from "next/image";
import { apartmentsList } from "../app/apartamenty/apartmentsList";

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
        <button className="rounded-lg border border-blue-400 bg-white px-6 py-2 transition duration-300 hover:bg-blue-300">
          Galeria
        </button>
        <button className="rounded-lg border border-blue-400 bg-white px-6 py-2 transition duration-300 hover:bg-blue-300">
          Mapa
        </button>
      </div>
    </div>
  );
};
