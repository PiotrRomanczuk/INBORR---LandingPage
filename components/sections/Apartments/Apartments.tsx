"use client";

import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/sections/Apartments/CardApartment";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Apartments = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="flex flex-col gap-12 px-6 py-16 md:py-24">
      {apartmentsList.map((apartment, index) => {
        const isEven = index % 2 === 0;
        const animationProps = prefersReducedMotion
          ? {}
          : {
              initial: { x: isEven ? -150 : 150, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              viewport: { once: true },
              transition: { duration: 1, delay: index * 0.2 },
            };

        return (
          <motion.div key={apartment.name} {...animationProps}>
            <CardApartment
              title={apartment.name}
              location={apartment.location}
              description={apartment.description}
              imageSrc={apartment.mainPic}
              pics={apartment.pics}
              bedroomsNb={apartment.bedrooms}
              area={apartment.area}
              floor={apartment.floor}
              priceFrom={apartment.priceFrom}
              hrefLink={apartment.hrefLink}
              reverseOnDesktop={!isEven}
              airbnbLink={apartment.reservedLinks.airbnbLink}
              bookingLink={apartment.reservedLinks.bookingLink}
              bookableLink={apartment.reservedLinks.bookableLink}
            />
          </motion.div>
        );
      })}
    </section>
  );
};
