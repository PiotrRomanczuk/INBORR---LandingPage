import React from "react";
import Image from "next/image";

export const ReserveExt = () => {
  return (
    <div className="flex justify-between gap-4 text-sm text-black">
      <div className="flex items-center">Zarezerwuj na:</div>
      <button className="h-8 w-8 border-blue-400">
        <Image
          src="/icons/airbnb.svg"
          width={100}
          height={100}
          alt="image"
          className="h-auto w-auto"
          loading="lazy"
        />
      </button>
      <button className="h-10 w-28 border-blue-400">
        <Image
          src="/icons/bookingcom.svg"
          width={100}
          height={100}
          alt="image"
          className="h-auto w-auto"
          loading="lazy"
        />
      </button>
    </div>
  );
};
