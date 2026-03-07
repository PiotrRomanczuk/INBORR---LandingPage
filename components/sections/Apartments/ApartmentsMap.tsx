"use client";

import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { apartmentsList } from "@/app/apartamenty/apartmentsList";

const markers = apartmentsList.map((a) => ({
  name: a.name,
  lat: a.lattitude,
  lng: a.longitude,
}));

const center = {
  lat: (markers[0].lat + markers[1].lat) / 2,
  lng: (markers[0].lng + markers[1].lng) / 2,
};

function MapFallback() {
  return (
    <div className="flex h-[50vh] min-h-[250px] w-full items-center justify-center rounded-lg border border-border bg-muted">
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <p className="text-lg font-semibold text-foreground">Mapa niedostępna</p>
        <p className="text-sm text-muted-foreground">
          Nasze apartamenty znajdują się w Śródmieściu Warszawy
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90"
        >
          Otwórz w Google Maps
        </a>
      </div>
    </div>
  );
}

export const ApartmentsMap = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Lokalizacje
      </h2>

      {!apiKey ? (
        <MapFallback />
      ) : (
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "100%", height: "50vh", minHeight: "300px" }}
            defaultCenter={center}
            defaultZoom={14}
            gestureHandling="greedy"
            disableDefaultUI
            mapId="apartments-map"
          >
            {markers.map((m) => (
              <AdvancedMarker key={m.name} position={{ lat: m.lat, lng: m.lng }} title={m.name}>
                <Pin background="#000" borderColor="#000" glyphColor="#fff" />
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>
      )}
    </section>
  );
};
