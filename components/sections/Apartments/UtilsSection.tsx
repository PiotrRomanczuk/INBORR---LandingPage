"use client";

import React from "react";

import {
  BedDouble,
  Building,
  Maximize,
  ArrowUp10,
  ChefHat,
  MapPin,
} from "lucide-react";

import { UtilsCard } from "@/components/cards/utilsCard";

interface UtilsSectionProps {
  bedroomsNb: number;
  area: number;
  floor: number;
  kitchenStyle: string;
  buildingType: string;
  localization: string;
}

// TODO: Make every utilSection comes after another
export const UtilsSection: React.FC<UtilsSectionProps> = ({
  bedroomsNb,
  area,
  floor,
  kitchenStyle,
  buildingType,
  localization,
}) => {
  return (
    <section className="grid w-full grid-cols-2 justify-between gap-4 pt-4 text-xs sm:text-sm text-foreground xl:text-xl">
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
      <UtilsCard title="Piętro:" description={floor} icon={<ArrowUp10 />} />
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
        title="Lokalizacja:"
        description={localization}
        icon={<MapPin />}
      />
    </section>
  );
};
