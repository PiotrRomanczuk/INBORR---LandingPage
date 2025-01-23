"use client";

import React from "react";

import {
  BedDouble,
  Building,
  Maximize,
  ArrowUp10,
  ChefHat,
} from "lucide-react";

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
    <section className="grid w-full grid-cols-2 justify-between gap-4 pt-4 text-xs text-gray-900 xl:text-xl">
      <UtilsCard
        title="Liczba sypialni:"
        description={bedroomsNb}
        icon={<BedDouble />}
      />
      <UtilsCard
        title="Powierzchnia:"
        description={area + " m2"}
        icon={<Maximize />}
      />
      <UtilsCard title="Pietro:" description={floor} icon={<ArrowUp10 />} />
      <UtilsCard
        title="Typ kuchni:"
        description={kitchenStyle}
        icon={<ChefHat />}
      />
      <UtilsCard
        title="Typ budynku:"
        description={buildingType}
        icon={<Building />}
      />
      <UtilsCard
        title="Rok budowy:"
        description={builtYear}
        icon={<BedDouble />}
      />
    </section>
  );
};
