import React from "react";
import { CardVertical } from "../reusable/CardVertical";

import { wifiSVG } from "./InformationListIcon";

export const Information = () => {
  return (
    <div className="grid w-full grid-cols-1 flex-row items-center justify-center gap-4 bg-white shadow-lg md:grid-cols-2 lg:grid-cols-4">
      <CardVertical icon={wifiSVG} title="Szybkie Wi-Fi" description="" />
      <CardVertical icon={wifiSVG} title="Wygodne łóżka" description="" />
      <CardVertical icon={wifiSVG} title="Klimatyzowane" description="" />
      <CardVertical icon={wifiSVG} title="W pełni wyposażone" description="" />
    </div>
  );
};
