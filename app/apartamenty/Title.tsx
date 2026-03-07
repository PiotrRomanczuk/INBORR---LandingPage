"use client";

import { motion } from "framer-motion";

export const Title = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted px-6 py-20 text-center md:py-28">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative mx-auto max-w-3xl">
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Apartamenty w centrum Warszawy
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Komfortowe pobyty z widokiem na miasto — od weekendowego city break
          po dłuższy biznesowy pobyt
        </motion.p>
      </div>
      <div className="mt-10 h-px bg-border" />
    </section>
  );
};
