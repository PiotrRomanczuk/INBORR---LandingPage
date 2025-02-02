"use client";

import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./ServiceVariants";
import ServiceHeader from "./ServiceHeader";
import servicesData from "./ServicesData";

export const Services = () => {
  return (
    <section className="dark:bg-dark pb-12 lg:pb-[90px] lg:pt-[60px]">
      <div className="container mx-auto">
        <ServiceHeader />
        <motion.div
          className="-mx-4 flex flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="w-full px-4 md:w-1/3"
              variants={cardVariants}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
