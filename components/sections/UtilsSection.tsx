import React from "react";

import deskIcon from "@/public/icons/furniture-desk.svg";
import realEstatePlanIcon from "@/public/icons/real-estate-plan.svg";
import securityKeyIcon from "@/public/icons/security-key.svg";
import weatherIcon from "@/public/icons/weather-snow.svg";
import bedIcon from "@/public/icons/bedroom.svg";

import { UtilsCard } from "@/components/cards/utilsCard";

interface UtilsSectionProps {
  bedroomsNb: any;
  area: any;
  floor: any;
  kitchenStyle: any;
  buildingType: any;
  builtYear: any;
}

export const UtilsSection: React.FC<UtilsSectionProps> = ({
  bedroomsNb,
  area,
  floor,
  kitchenStyle,
  buildingType,
  builtYear,
}) => {
  return (
    <div className="grid w-full grid-cols-2 justify-between gap-4 pt-4 text-xs text-gray-900">
      <UtilsCard
        title="Liczba sypialni:"
        description={bedroomsNb}
        icon={realEstatePlanIcon}
      />
      <UtilsCard
        title="Powierzchnia:"
        description={area + " m2"}
        icon={realEstatePlanIcon}
      />
      <UtilsCard
        title="Pietro:"
        description={floor}
        icon={realEstatePlanIcon}
      />
      <UtilsCard
        title="Typ kuchni:"
        description={kitchenStyle}
        icon={realEstatePlanIcon}
      />
      <UtilsCard
        title="Typ budynku:"
        description={buildingType}
        icon={realEstatePlanIcon}
      />
      <UtilsCard
        title="Rok budowy:"
        description={builtYear}
        icon={realEstatePlanIcon}
      />
    </div>
  );
};
