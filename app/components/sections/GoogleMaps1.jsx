"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

export const GoogleMaps1 = () => {
  return (
    <div className="w-full items-center">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
        height={400}
        width="100%"
        mode="place"
        q="Chlodna 22, Warszawa, Polska"
        zoom="16"
        style={""}
        allowfullscreen={false}
        loading={"eager"}
      />
    </div>
  );
};
