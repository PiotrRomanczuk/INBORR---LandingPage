"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

export const ImageSideTilt = () => {
  return (
    <Tilt
      gyroscope={true}
      scale={1.05}
      max={25}
      glareEnable={true}
      glarePosition="left"
      className="parallax-effect-glare-scale z-10 px-6 lg:px-0"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      // ReactParallaxTiltProps={
      //   children: 2
      // }
    >
      <div className="relative overflow-hidden rounded-3xl  bg-gray-900 p-6 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 lg:pr-4 lg:pt-64 xl:px-10 xl:pb-10">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/chlodna/3.jpeg"
          width={1000}
          height={1000}
          alt=""
        />

        <figure className="scale3d-90 relative isolate rounded-2xl bg-white bg-opacity-40 p-6  text-black backdrop-blur-lg lg:ml-36 lg:mt-12">
          <blockquote className="text-xl font-semibold leading-8 text-gray-900">
            <p>
              “Kochaliśmy nasz pobyt! Mieszkanie było łatwe do znalezienia;
              bardzo łatwe samodzielne zameldowanie (i wymeldowanie). Było
              bardzo czysto i mieliśmy wszystko, czego potrzebowaliśmy...”
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm leading-6 text-black">
            <strong className="font-semibold text-black">Julia T.</strong>{" "}
            Zadowolona klientka
          </figcaption>
        </figure>
      </div>
    </Tilt>
  );
};
