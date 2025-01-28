"use client";

import { ImageSideTilt } from "./ImageSideTilt";
import { TextInfoSide } from "./TextInfoSide";
import { motion } from "framer-motion";

export function Content() {
  return (
    <section className="bg-white pb-4 pt-6 md:py-24">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-6 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSideTilt />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TextInfoSide />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
