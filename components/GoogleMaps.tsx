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
      <div>To mieszkanie znajduje się: </div>
      {/* <div>{apiKey}</div> */}
      {/* <div>{process.env.NODE_ENV}</div> */}
      <APIProvider apiKey={apiKey}>
        <Map
          style={{
            width: "50vw",
            height: "50vh",
            margin: "4vh 0 4vh 0",
            padding: "0 0 0 4vh",
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
