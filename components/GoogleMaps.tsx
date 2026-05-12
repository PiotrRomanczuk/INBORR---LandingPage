"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

interface GoogleMapsProps {
  lat: number;
  lng: number;
  address?: string;
}

function IframeMap({ lat, lng }: { lat: number; lng: number }) {
  const t = useTranslations("map");
  return (
    <iframe
      title={t("iframeTitle")}
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[50vh] min-h-[250px] w-full border-0"
    />
  );
}

export const GoogleMaps = ({ lat, lng }: GoogleMapsProps) => {
  const [markerRef] = useMarkerRef();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <IframeMap lat={lat} lng={lng} />;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{
          width: "100%",
          height: "50vh",
          minHeight: "250px",
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={15}
        gestureHandling="greedy"
        disableDefaultUI
      >
        <Marker ref={markerRef} position={{ lat, lng }} />
      </Map>
    </APIProvider>
  );
};
