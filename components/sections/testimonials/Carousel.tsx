"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    quote: "Bardzo przytulne i wygodne mieszkanie, ",
    author: "Magdalena Kowalska",
    position: "Airbnb",
    image: "/logo.png", // Add the path to the image file
  },
  {
    id: 2,
    quote: "Bardzo przytulne i wygodne mieszkanie,",
    author: "Magdalena Kowalska",
    position: "Airbnb",
    image: "/logo.png", // Add the path to the image file
  },
  {
    id: 3,
    quote: "Bardzo przytulne i wygodne mieszkanie,",
    author: "Magdalena Kowalska",
    position: "Airbnb",
    image: "/logo.png", // Add the path to the image file
  },
  {
    id: 4,
    quote:
      "Bardzo przytulne i wygodne mieszkanie, Pani Bożena jest bardzo komunikatywną osobą.",
    author: "Magdalena Kowalska",
    position: "Airbnb",
    image: "/logo.png", // Add the path to the image file
  },
  // Add more testimonial data objects as needed
  //    Dobra lokalizacja mieszkania - m2, tramwaj i autobusy pod ręką.Polecam to miejsce.Przy następnej wizycie w stolicy również je wybiorę :) ",
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
      }}
      onClick={onClick}
    />
  );
}

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // speed: 2000,
    slidesToShow: 1,
    // slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <section className="bg-white py-24 text-black sm:py-32">
      <div className="mx-auto max-w-7xl gap-8 px-6 lg:px-8">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-auto max-w-2xl  shadow-lg lg:mx-0 lg:max-w-none "
            >
              <div className="m-12 flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="mt-1 text-gray-500">
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
