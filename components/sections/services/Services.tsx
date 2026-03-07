"use client";

import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./serviceVariants";
import ServiceHeader from "./ServiceHeader";
import servicesData from "./ServicesData";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Services = () => {
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
    <section className="dark:bg-background py-16 md:py-24">
      <div className="container mx-auto overflow-hidden">
        <ServiceHeader />
        <motion.div className="-mx-4 flex flex-wrap" {...containerProps}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="my-2 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
              {...cardProps}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
