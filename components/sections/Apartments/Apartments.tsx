"use client";

import { apartmentsList } from "@/app/apartamenty/apartmentsList";
import { CardApartment } from "@/components/sections/Apartments/CardApartment";
import { motion } from "framer-motion";

export const Apartments = () => {
  return (
    <section className="my-6 flex flex-col gap-12 px-6">
      {apartmentsList.map((apartment, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={apartment.name}
            initial={{ x: isEven ? -150 : 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <CardApartment
              title={apartment.name}
              location={apartment.location}
              description={apartment.description}
              imageSrc={apartment.mainPic}
              bedroomsNb={apartment.bedrooms}
              area={apartment.area}
              floor={apartment.floor}
              kitchenStyle={apartment.kitchenStyle}
              buildingType={apartment.buildingType}
              localization={apartment.localization}
              hrefLink={apartment.hrefLink}
              imagePosition={isEven ? "left" : "right"}
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
