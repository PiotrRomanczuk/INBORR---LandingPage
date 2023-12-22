import React from "react";

export const ImageSide = () => {
  return (
    <div className="lg:pr-4">
      <div className="relative overflow-hidden rounded-3xl border-2 bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/chlodna/3.jpeg"
          alt=""
        />
        <figure className="relative isolate ml-36 mt-12 rounded-2xl bg-white bg-opacity-40 p-6 text-black backdrop-blur-lg">
          {/* <img
            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
            alt=""
            className="h-12 w-auto"
          /> */}
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
    </div>
  );
};
