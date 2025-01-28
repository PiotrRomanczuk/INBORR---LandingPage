"use client";

import { testimonials_data } from "./testimonials_data";
import { Testimonial } from "./Testimonial";
import { motion } from "framer-motion";
import { cardVariants } from "./Variants";
import { containerVariants } from "../Services/ServiceVariants";

export function Testimonials() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl animate-fade-in text-center"
          variants={containerVariants}
        >
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Każdy Gość jest dla nas bardzo ważny
          </h2>
          <p className="text-balance text-l mt-2 font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Cenimy każdą wystawioną opinię i bardzo dziękujemy, że dzielicie się
            Państwo z nami odczuciami i radami.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials_data.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants}>
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
