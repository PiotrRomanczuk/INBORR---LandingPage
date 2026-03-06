"use client";

import React from "react";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

function MapFallback() {
  return (
    <div className="flex h-[50vh] min-h-[250px] w-full items-center justify-center rounded-lg border border-border bg-muted m-[2vh]">
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <p className="text-lg font-semibold text-foreground">Mapa niedostepna</p>
        <p className="text-sm text-muted-foreground">
          Ul. Ludwiki 4, 01-226 Warszawa
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Ludwiki+4+Warszawa"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90"
        >
          Otworz w Google Maps
        </a>
      </div>
    </div>
  );
}

export const GoogleMaps = ({ lat, lng }: { lat: number; lng: number }) => {
  const [markerRef] = useMarkerRef();

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-between">
        <MapFallback />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-between">
      <APIProvider apiKey={apiKey}>
        <Map
          style={{
            width: "100%",
            height: "50vh",
            minHeight: "250px",
            margin: "2vh",
            padding: "0",
          }}
          defaultCenter={{ lat: lat, lng: lng }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker
            ref={markerRef}
            position={{ lat: lat, lng: lng }}
          />
        </Map>
      </APIProvider>
    </div>
  );
};
