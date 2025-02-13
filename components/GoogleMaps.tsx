"use client";

import React from "react";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

export const GoogleMaps = ({ lat, lng }: { lat: number; lng: number }) => {
  const [markerRef, marker] = useMarkerRef();

  const apiKey = "AIzaSyBYUnqb46_-4Rpwcxf7yxMVvQwOG8Ikp40";

  if (!apiKey) {
    return <div> Google Maps API key not found</div>;
  }

  return (
    <div className="flex h-full w-full items-center justify-between">
      <APIProvider apiKey={apiKey}>
        <Map
          style={{
            width: "100%",
            height: "50vh",
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
