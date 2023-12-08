import { apartmentsList } from "../apartmentsList";

import { GoogleMaps } from "@/components/sections/GoogleMaps";
import { Mainpic } from "../../../components/Mainpic";
import { ReserveExt } from "../../../components/ReserveExt";
import { UtilsSection } from "@/components/sections/UtilsSection";
import { AccordionComp } from "../../../components/AccordionComp";

export default function Home() {
  const apartment = apartmentsList[0];

  console.log(apartment.airbnbLink);
  console.log(apartment.bookingLink);

  return (
    <div className="px-4">
      <div className=" flex w-full flex-col rounded-md bg-white ">
        <Mainpic imageSrc={apartment.mainPic} />

        <div className="flex flex-col items-start py-4 text-lg text-black">
          {apartment.name}
          <div className="text-sm font-light text-gray-700">
            {apartment.location}
          </div>
          {/* <div className="w-full">
            <ReserveExt
              airbnbHref={apartment.airbnbLink}
              bookingHref={apartment.bookingHref}
            />
          </div> */}

          <UtilsSection
            bedroomsNb={apartment.bedrooms}
            area={apartment.area}
            floor={apartment.floor}
            kitchenStyle={apartment.kitchenStyle}
            buildingType={apartment.buildingType}
            builtYear={apartment.builtYear}
          />
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
      </div>

      <AccordionComp data={apartment.accordionData} />

      <GoogleMaps />
    </div>
  );
}
