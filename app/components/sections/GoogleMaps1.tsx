"use client";

import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMaps1 = (): JSX.Element => {
  //   useEffect(() => {
  //     const loader = new Loader({
  //       apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  //       version: "weekly",
  //     });

  //     const initializeMap = async () => {
  //       const position = { lat: 52.23780815166671, lng: 20.991911280983203 };

  //       //   await loader.load();
  //       const { Map } = (await google.maps.importLibrary(
  //         "maps",
  //       )) as google.maps.MapsLibrary;
  //       const map = new Map(document.getElementById("map") as HTMLElement, {
  //         center: position,
  //         zoom: 8,
  //       });
  //     };

  //     initializeMap();
  //   }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default GoogleMaps1;
