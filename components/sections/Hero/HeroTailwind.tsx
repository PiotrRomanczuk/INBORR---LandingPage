"use client";

import Image from "next/image";
import { TextAnimation } from "@/components/ui/TextAnimation";

export const HeroTailwind = () => {
  return (
    <section className="bg-white">
      <div className="animate-fill-forwards relative animate-fade-in opacity-0">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl lg:pt-14">
            {/* // Horizontal cut */}
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-20 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className=" sm:mb-10 sm:flex"></div>
                <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <TextAnimation />
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Wynajem na dni i tygodnie – city break, workation , czy pobyt
                  biznesowy – zadbamy o jakość i Twój komfort.
                </p>
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
    </section>
  );
};
