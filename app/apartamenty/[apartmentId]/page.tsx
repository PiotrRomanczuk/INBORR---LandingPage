"use client";

import { apartmentsList } from "../apartmentsList";

import { Mainpic } from "./MainPic";
import { UtilsSection } from "@/components/sections/Apartments/UtilsSection";
import { AccordionComp } from "@/components/AccordionComp";
import { GoogleMaps } from "@/components/GoogleMaps";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { ReserveDialog } from "./ReserveDialog";

import ApartNotFound from "./ApartNotFound";
import CalendarComponent from "./calendar/Calendar";

// import CalendarComponent from "./calendar/Calendar";

export default function Page({ params }: { params: { apartmentId: string } }) {
  const apartment = apartmentsList.find(
    (apartment) => apartment.shortName === params.apartmentId,
  );

  return (
    <>
      {apartment === undefined ? (
        <ApartNotFound />
      ) : (
        <div className="px-4">
          <div className="flex w-full flex-col justify-between rounded-md bg-white pb-4 md:flex-row-reverse">
            <div className="md:w-2/3 lg:ml-8 xl:ml-16">
              <Mainpic imageSrc={apartment.mainPic} />
              <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
                <GalleryLightbox slides={apartment.pics} />
                <ReserveDialog className="rounded-md bg-primary px-6 py-2 text-primary-foreground transition duration-300 hover:bg-primary/90" 
                bookingLink={apartment.reservedLinks.bookingLink}
                airbnbLink={apartment.reservedLinks.airbnbLink}
                bookableLink={apartment.reservedLinks.bookableLink}
                />
              </div>
            </div>

            <div className="flex flex-col items-start py-4 text-lg text-black md:w-1/3 md:text-xl">
              <h1 className="text-lg font-semibold md:text-xl">{apartment.name}</h1>
              <div className="text-sm font-light text-muted-foreground xl:text-lg">
                {apartment.location}
              </div>

              <UtilsSection
                bedroomsNb={apartment.bedrooms}
                area={apartment.area}
                floor={apartment.floor}
                kitchenStyle={apartment.kitchenStyle}
                buildingType={apartment.buildingType}
                // builtYear={apartment.builtYear}
                localization={apartment.localization}
              />
            </div>
          </div>
          <div className="border-y-2 border-border py-4">
            {apartment.description.long.map((paragraph, idx) => {
              return (
                <div className="pt-2 text-sm text-foreground" key={idx}>
                  {paragraph}
                </div>
              );
            })}
          </div>
          <AccordionComp data={apartment.accordionData} />
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <CalendarComponent apartmentName={apartment.shortName} />
            <GoogleMaps lat={apartment.lattitude} lng={apartment.longitude} />
          </div>
        </div>
      )}
    </>
  );
}
