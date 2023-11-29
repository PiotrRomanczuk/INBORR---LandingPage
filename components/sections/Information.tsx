import React from "react";
import { CardUtils } from "../CardUtils";

import { wifiSVG } from "./InformationListIcon";

export const Information = () => {
  return (
    <div className=" grid w-full max-w-7xl grid-cols-2 flex-row justify-between bg-white text-sm lg:grid-cols-4 lg:gap-2">
      <CardUtils icon={wifiSVG} title="Szybkie Wi-Fi" description="" />
      <CardUtils icon={wifiSVG} title="Wygodne łóżka" description="" />
      <CardUtils icon={wifiSVG} title="Klimatyzowane" description="" />
      <CardUtils icon={wifiSVG} title="W pełni wyposażone" description="" />
    </div>
  );
};
