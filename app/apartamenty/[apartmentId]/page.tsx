import { apartmentsList } from "../apartmentsList";

import { Mainpic } from "./MainPic";
import { UtilsSection } from "@/components/sections/UtilsSection";
import { AccordionComp } from "../../../components/AccordionComp";
import { GoogleMaps } from "@/components/sections/GoogleMaps";
import Link from "next/link";

export default function Page({ params }: { params: { apartmentId: string } }) {
  const apartment = apartmentsList.find(
    (apartment) => apartment.shortName === params.apartmentId,
  );

  return (
    <>
      {apartment === undefined ? (
        <>
          <div>
            Przepraszamy! Najwyraźniej nie mamy w ofercie mieszkania, którego
            szukasz.
          </div>
          <div>Mieszkania, które obecnie znajdują się w naszej ofercie to:</div>
          <ul>
            {apartmentsList.map((apartment) => (
              <li key={apartment.shortName}>
                <Link href={`/apartamenty/${apartment.shortName}`}>
                  <a>{apartment.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="px-4">
          <div className="flex w-full flex-col rounded-md border bg-white pb-4 md:flex-row-reverse">
            <div className="md:w-2/3">
              <Mainpic imageSrc={apartment.mainPic} />
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
                builtYear={apartment.builtYear}
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
        </div>
      )}
    </>
  );
}
