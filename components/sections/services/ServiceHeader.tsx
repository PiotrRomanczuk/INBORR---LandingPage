import { motion } from "framer-motion";
import React from "react";
import { containerVariants, textVariants } from "./ServiceVariants";

const ServiceHeader = () => {
  return (
    <motion.div
      className="flex flex-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="w-full px-4">
        <motion.div
          className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"
          variants={textVariants}
        >
          <h2 className="text-dark mb-3 pt-6 text-4xl font-bold leading-[1.2] dark:text-white sm:text-5xl md:text-[48px]">
            Co zapewniamy
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            Poniżej znajduje się lista usług, które oferujemy w każdym z naszych
            apartamentów
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceHeader;
