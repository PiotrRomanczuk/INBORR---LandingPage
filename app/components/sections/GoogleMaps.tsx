"use client";

// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 52.23780815166671,
  lng: 20.991911280983203,
};

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);

export const GoogleMaps = () => {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10.5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* <GoogleMap /> */}
    </GoogleMap>
  ) : (
    <></>
  );
};
