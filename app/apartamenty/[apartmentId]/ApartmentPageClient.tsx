"use client";

import { IApartment } from "@/interfaces/IApartment";
import { Mainpic } from "./MainPic";
import { UtilsSection } from "@/components/sections/Apartments/UtilsSection";
import { AccordionComp } from "@/components/AccordionComp";
import { GoogleMaps } from "@/components/GoogleMaps";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { ReserveDialog } from "./ReserveDialog";
import CalendarComponent from "./calendar/Calendar";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function ApartmentPageClient({ apartment }: { apartment: IApartment }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="space-y-16 md:space-y-24">
        {/* Hero Image */}
        <motion.section {...fadeUp}>
          <Mainpic imageSrc={apartment.mainPic} />
          <div className="mt-4">
            <GalleryLightbox slides={apartment.pics} />
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
                {apartment.name}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                {apartment.location}
              </p>
            </div>
            <ReserveDialog
              className="rounded-md bg-primary px-6 py-2 text-primary-foreground transition duration-300 hover:bg-primary/90"
              bookingLink={apartment.reservedLinks.bookingLink}
              airbnbLink={apartment.reservedLinks.airbnbLink}
              bookableLink={apartment.reservedLinks.bookableLink}
            />
          </div>
        </motion.section>

        {/* Details Card */}
        <motion.section {...fadeUp}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Szczegóły
          </p>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <UtilsSection
              bedroomsNb={apartment.bedrooms}
              area={apartment.area}
              floor={apartment.floor}
              kitchenStyle={apartment.kitchenStyle}
              buildingType={apartment.buildingType}
              localization={apartment.localization}
            />
          </div>
        </motion.section>

        {/* Description */}
        <motion.section {...fadeUp} className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Opis
          </p>
          <div className="space-y-4">
            {apartment.description.long.map((paragraph, idx) => (
              <p
                className={`text-base leading-relaxed text-foreground ${
                  idx === 0
                    ? "first-letter:float-left first-letter:mr-2 first-letter:text-4xl first-letter:font-bold first-letter:leading-none first-letter:text-primary"
                    : ""
                }`}
                key={idx}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section {...fadeUp} className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Często zadawane pytania
          </p>
          <AccordionComp data={apartment.accordionData} />
        </motion.section>

        {/* Calendar + Map */}
        <motion.section {...fadeUp}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Dostępność
              </p>
              <CalendarComponent apartmentName={apartment.shortName} />
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Lokalizacja
              </p>
              <GoogleMaps lat={apartment.lattitude} lng={apartment.longitude} />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
