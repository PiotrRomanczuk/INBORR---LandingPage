import { CardApartment } from "@/components/CardApartment";
import { apartmentsList } from "../apartmentsList";
import Link from "next/link";
import Image from "next/image";

import deskIcon from "@/public/icons/furniture-desk.svg";
import realEstatePlanIcon from "@/public/icons/real-estate-plan.svg";
import securityKeyIcon from "@/public/icons/security-key.svg";
import weatherIcon from "@/public/icons/weather-snow.svg";
import bedIcon from "@/public/icons/bedroom.svg";

import { UtilsCard } from "../utilsCard";

export default function Home() {
  const chlodna = apartmentsList[0];

  return (
    <div className="px-4">
      <div className=" flex w-full flex-col rounded-md bg-white ">
        <div className="items-center justify-center ">
          <Image
            src={chlodna.mainPic || ""}
            width={1600}
            height={800}
            alt="image"
            className="h-auto w-auto"
          />
          <div className="-mt-3 flex justify-center gap-4 text-sm text-black">
            <button className="rounded-lg border border-blue-400 bg-white p-1 transition duration-300 hover:bg-blue-100">
              Galeria
            </button>
            <button className="rounded-lg border border-blue-400 bg-white p-1 transition duration-300 hover:bg-blue-100">
              Mapa
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 text-sm text-black">
          <button className="">Airbnb</button>
          <button className="">Booking</button>
        </div>
        <div className="flex flex-col items-start pt-4 text-lg text-black">
          <div>{chlodna.name}</div>

          <div className="text-sm font-light text-gray-700">
            {chlodna.location}
          </div>
          <div className="grid w-full grid-cols-2 justify-between gap-4 pt-4 text-xs text-gray-900">
            <UtilsCard
              title="Liczba pokoi:"
              description="2 pokoje"
              icon={bedIcon}
            />
            <UtilsCard
              title="Powierzchnia:"
              description={chlodna.area}
              icon={realEstatePlanIcon}
            />
            <UtilsCard title="Pietro:" description="13" icon={bedIcon} />
            <UtilsCard
              title="Typ kuchni:"
              description="aneks kuchenny"
              icon={bedIcon}
            />
            <UtilsCard title="Typ budynku:" description="blok" icon={bedIcon} />
            <UtilsCard title="Rok budowy:" description="1950" icon={bedIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
