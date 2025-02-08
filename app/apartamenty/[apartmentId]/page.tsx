"use client";

import { apartmentsList } from "../apartmentsList";

import { Mainpic } from "./MainPic";
import { UtilsSection } from "@/components/sections/Apartments/UtilsSection";
import { AccordionComp } from "@/components/AccordionComp";
import { GoogleMaps } from "@/components/GoogleMaps";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { ReserveDialog } from "./ReserveDialog";

import ApartNotFound from "./ApartNotFound";

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
            <div className="md:w-2/3 lg:ml-32 xl:ml-52">
              <Mainpic imageSrc={apartment.mainPic} />
              <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
                <GalleryLightbox slides={apartment.pics} />
                <ReserveDialog className="rounded-lg border border-blue-400 bg-blue-400 px-6 py-2 text-white transition duration-300 hover:bg-pink-400" 
                bookingLink={apartment.reservedLinks.bookingLink}
                airbnbLink={apartment.reservedLinks.airbnbLink}
                bookableLink={apartment.reservedLinks.bookableLink}
                />
              </div>
            </div>

            <div className="flex flex-col items-start py-4 text-lg text-black md:w-1/3 md:text-xl">
              {apartment.name}
              <div className="text-sm font-light text-gray-700 xl:text-lg">
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
          <div className="border-y-2 border-blue-400 py-4">
            {apartment.description.long.map((paragraph, idx) => {
              return (
                <div className="pt-2 text-sm text-gray-900" key={idx}>
                  {paragraph}
                </div>
              );
            })}
          </div>

          <AccordionComp data={apartment.accordionData} />
          <GoogleMaps />
          {/* <CalendarComponent apartmentName={apartment.shortName} /> */}
        </div>
      )}
    </>
  );
}
