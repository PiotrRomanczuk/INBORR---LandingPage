import React from "react";
import { CardVertical } from "../reusable/CardVertical";

import { wifiSVG } from "./InformationListIcon";

export const Information = () => {
  return (
    <div className="grid w-full grid-cols-1 flex-row items-center justify-center gap-4 bg-white md:grid-cols-2 lg:grid-cols-4">
      <CardVertical
        icon={wifiSVG}
        title="Szybkie Wi-Fi"
        description="Some Wi-Fi description."
      />
      <CardVertical
        icon={wifiSVG}
        title="Another Title"
        description="Another description."
      />
      <CardVertical
        icon={wifiSVG}
        title="House Icon"
        description="Description for the house."
      />
      <CardVertical
        icon={wifiSVG}
        title="Szybkie Wi-Fi"
        description="Some Wi-Fi description."
      />
    </div>
  );
};
