import React from "react";
import { CardUtils } from "@/components/cards/CardUtils";

import bed from "@/public/icons/bedroom.svg";
import wifi from "@/public/icons/mobile-full-wifi.svg";
import snow from "@/public/icons/weather-snow.svg";
import realEstate from "@/public/icons/real-estate-plan.svg";

export const Information = () => {
  return (
    <section className="grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-20">
      <CardUtils icon={wifi} title="Szybkie Wi-Fi" />
      <CardUtils icon={bed} title="Wygodne łóżka" />
      <CardUtils icon={snow} title="Klimatyzowane" />
      <CardUtils icon={realEstate} title="W pełni wyposażone" />
    </section>
  );
};
