"use client";
import Image from "next/image";

import React from "react";
// import Tilt from "react-vanilla-tilt";

export const ImageSide = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 bg-gray-900 p-6 shadow-2xl transition duration-200 hover:scale-105 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 lg:pr-4 lg:pt-64 xl:px-10 xl:pb-10">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/chlodna/3.jpeg"
        alt=""
      />
      <figure className="relative isolate rounded-2xl bg-white bg-opacity-40 p-6 text-black backdrop-blur-lg lg:ml-36 lg:mt-12">
        {/* <img
            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
            alt=""
            className="h-12 w-auto"
          /> */}
        <blockquote className="text-xl font-semibold leading-8 text-gray-900">
          <p>
            “Kochaliśmy nasz pobyt! Mieszkanie było łatwe do znalezienia; bardzo
            łatwe samodzielne zameldowanie (i wymeldowanie). Było bardzo czysto
            i mieliśmy wszystko, czego potrzebowaliśmy...”
          </p>
        </blockquote>
        <figcaption className="mt-6 text-sm leading-6 text-black">
          <strong className="font-semibold text-black">Julia T.</strong>{" "}
          Zadowolona klientka
        </figcaption>
      </figure>
    </div>
  );
};
