import { apartmentsList } from "../apartmentsList";

import { GoogleMaps } from "@/components/sections/GoogleMaps";
import { Mainpic } from "../../../components/Mainpic";
import { ReserveExt } from "../../../components/ReserveExt";
import { UtilsSection } from "../../../components/sections/UtilsSection";
import { AccordionComp } from "../../../components/AccordionComp";

import { LightboxImage } from "../../../components/YARL/LightboxImage";

export default function Home() {
  const apartment = apartmentsList[0];

  return (
    <div className="px-4">
      <div className=" flex w-full flex-col rounded-md bg-white ">
        <Mainpic imageSrc={apartment.mainPic} />

        <ReserveExt />

        <div className="flex flex-col items-start pt-4 text-lg text-black">
          {apartment.name}
          <div className="text-sm font-light text-gray-700">
            {apartment.location}
          </div>
          <UtilsSection
            bedroomsNb={apartment.bedrooms}
            area={apartment.area}
            floor={apartment.floor}
            kitchenStyle={apartment.kitchenStyle}
            buildingType={apartment.buildingType}
            builtYear={apartment.builtYear}
          />
        </div>
        <div className="my-2 border-y-2 border-black py-4">
          {apartment.description.long.map((paragraph, idx) => {
            return (
              <div className="pt-4 text-sm text-gray-900" key={idx}>
                {paragraph}
              </div>
            );
          })}
        </div>
      </div>

      <AccordionComp data={apartment.accordionData} />

      <LightboxImage />
      <GoogleMaps />
    </div>
  );
}
