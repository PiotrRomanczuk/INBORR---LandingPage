import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ReserveExt = (airbnbHref: URL, bookingHref: URL) => {
  return (
    <div className="flex flex-col justify-between gap-4 text-sm text-black">
      <div className="text-bold  pb-4">Zarezerwuj na:</div>
      <div className="align-center flex items-center justify-between border-y-2 border-blue-400 py-6">
        <Link href={airbnbHref || ""} className="pointer h-8 w-8">
          <Image
            src="/icons/airbnb.svg"
            width={100}
            height={100}
            alt="image"
            className="h-auto w-auto"
            loading="lazy"
          />
        </Link>
        <Link href={bookingHref || ""} className="pointer h-10 w-28">
          <Image
            src="/icons/bookingcom.svg"
            width={100}
            height={100}
            alt="image"
            className="align-center flex h-auto w-auto items-center"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};
