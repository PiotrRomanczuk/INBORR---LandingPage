"use client";

import { Testimonials_data } from "./testimonials_data";
import { Testimonial } from "./Testimonial";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./Variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  const containerProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true },
        variants: containerVariants,
      };

  const cardProps = prefersReducedMotion ? {} : { variants: cardVariants };

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          {...containerProps}
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
          {/* sm:text-[0] eliminates whitespace between inline-block children in CSS columns layout */}
          <motion.div
            className="-mt-8 columns-1 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3"
            {...containerProps}
          >
            {Testimonials_data.map((testimonial, index) => (
              <motion.div
                key={index}
                {...cardProps}
              >
                <Testimonial
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
