"use client";

import Image from "next/image";
import { ITestimonial } from "./ITestimonial";

export function Testimonial({
  testimonial,
  index,
}: {
  testimonial: ITestimonial;
  index: number;
}) {
  return (
    <div
      className={`animate-slide-in-right delay-${
        index * 1200
      } pt-8 sm:inline-block sm:w-full sm:px-4`}
    >
      <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
        <blockquote className="text-gray-900">
          <p>{`"${testimonial.body}"`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <Image
            alt=""
            src={testimonial.author.imageUrl}
            className="size-10 rounded-full bg-gray-50"
            width={40}
            height={40}
          />
          <div>
            <div className="font-semibold text-gray-900">
              {testimonial.author.name}
            </div>
            {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
