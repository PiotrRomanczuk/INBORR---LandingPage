import React from "react";
import { CardUtils } from "@/components/cards/CardUtils";

import bed from "@/public/icons/bedroom.svg";
import wifi from "@/public/icons/mobile-full-wifi.svg";
import snow from "@/public/icons/weather-snow.svg";
import realEstate from "@/public/icons/real-estate-plan.svg";

export const Information = () => {
  return (
    <section className=" grid w-full max-w-7xl grid-cols-2 flex-row justify-between gap-2 bg-white p-2 text-sm lg:grid-cols-4 lg:gap-2">
      <CardUtils icon={wifi} title="Szybkie Wi-Fi" description="" />
      <CardUtils icon={bed} title="Wygodne łóżka" description="" />
      <CardUtils icon={snow} title="Klimatyzowane" description="" />
      <CardUtils icon={realEstate} title="W pełni wyposażone" description="" />
    </section>
  );
};
