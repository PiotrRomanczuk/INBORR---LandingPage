"use client";

import { testimonials_data } from "./testimonials_data";
import { Testimonial } from "./Testimonial";
import { motion } from "framer-motion";
import { cardVariants } from "./Variants";

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl animate-fade-in text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Testimonials
          </h2>
          <p className="text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials_data.map((testimonial, index) => (
              <motion.div
                key={index}
                // className="w-full px-4 md:w-1/3"
                variants={cardVariants}
              >
                <Testimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
