import React from "react";
import { CardVertical } from "../reusable/CardVertical";

import { wifiSVG } from "./InformationListIcon";

export const Information = () => {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 flex-row justify-between justify-between bg-white md:grid-cols-2 lg:grid-cols-4 lg:gap-24">
      <CardVertical icon={wifiSVG} title="Szybkie Wi-Fi" description="" />
      <CardVertical icon={wifiSVG} title="Wygodne łóżka" description="" />
      <CardVertical icon={wifiSVG} title="Klimatyzowane" description="" />
      <CardVertical icon={wifiSVG} title="W pełni wyposażone" description="" />
    </div>
  );
};
