"use client";

import { Testimonials_data } from "./testimonials_data";
import { Testimonial } from "./Testimonial";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./Variants";

export function Testimonials() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-base/7 font-semibold text-primary">
            Gość jest dla nas najważniejszy
          </h2>
          <p className="text-l mt-2 text-balance font-semibold tracking-tight text-foreground sm:text-2xl">
            Cenimy każdą wystawioną opinię i bardzo dziękujemy, że dzielicie się
            Państwo z nami odczuciami i radami.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <motion.div
            className="-mt-8 columns-1 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {Testimonials_data.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <Testimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
