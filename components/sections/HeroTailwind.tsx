"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

export const HeroTailwind = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            {/* // Horizontal cut */}
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Twój dom z dala od domu
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Krótkoterminowe wynajmy mieszkań dla wyjątkowego pobytu w
                  Warszawie!
                </p>
                {/* <p className="text-black">Media query: useMediaQuery(768)</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
          <Image
            className="mx-auto aspect-[3/2] w-full object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/warsaw.jpg"
            width={800}
            height={1200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
