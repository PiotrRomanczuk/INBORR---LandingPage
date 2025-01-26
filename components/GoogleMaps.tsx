"use client";

import React from "react";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

export const GoogleMaps = () => {
  const [markerRef, marker] = useMarkerRef();

  let apiKey;

  if (process.env.NODE_ENV === "development") {
    apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  } else {
    apiKey = process.env.GOOGLE_MAPS_API_KEY;
  }

  if (!apiKey) {
    return <div> Google Maps API key not found</div>;
  }

  return (
    <div className="flex h-full w-full items-center justify-between">
      <div>To mieszkanie znajduje się: </div>
      <div>{apiKey}</div>
      <div>{process.env.NODE_ENV}</div>
      <APIProvider apiKey={apiKey}>
        <Map
          style={{
            width: "50vw",
            height: "50vh",
            margin: "4vh 0 4vh 0",
            padding: "0 0 0 4vh",
          }}
          defaultCenter={{ lat: 52.237769375971396, lng: 20.989952066912494 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker
            ref={markerRef}
            position={{ lat: 52.237769375971396, lng: 20.989952066912494 }}
          />
        </Map>
      </APIProvider>
    </div>
  );
};
