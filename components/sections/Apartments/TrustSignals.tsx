"use client";

import { Users, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
  { icon: Users, value: "500+", label: "gości", delay: 0 },
  { icon: Star, value: "4.8", label: "na Booking.com", delay: 0.1 },
  { icon: Award, value: "Superhost", label: "na Airbnb", delay: 0.2 },
];

export const TrustSignals = () => {
  return (
    <section className="bg-muted/50 px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
        {signals.map((s) => (
          <motion.div
            key={s.label}
            className="flex items-center gap-3 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: s.delay }}
          >
            <s.icon className="h-6 w-6 shrink-0 text-muted-foreground" />
            <div className="text-left">
              <p className="text-lg font-semibold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
