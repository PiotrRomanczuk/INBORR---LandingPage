"use client";

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
      <figure className="rounded-2xl bg-card p-8 text-sm/6">
        <blockquote className="text-card-foreground">
          <p>{`"${testimonial.body}"`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <div
            className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold text-white ${testimonial.author.accentColor}`}
            aria-hidden="true"
          >
            {testimonial.author.initials}
          </div>
          <div>
            <div className="font-semibold text-card-foreground">
              {testimonial.author.name}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
