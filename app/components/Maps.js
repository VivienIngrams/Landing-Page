'use client'


import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat:41.165811 , lng: -8.603408 }), []);
  return (
      <div className="w-full h-full absolute top-0 left-0">
            <GoogleMap zoom={25} center={center} mapContainerClassName="w-full h-full absolute">
              <MarkerF position={{ lat:41.165811 , lng: -8.603408 }} />
            </GoogleMap>
          </div>
  );
}
