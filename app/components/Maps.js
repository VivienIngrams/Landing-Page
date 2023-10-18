'use client'


import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center}  mapContainerClassName="w-full h-full absolute">
      <Marker position={center} />
    </GoogleMap>
  );
}

// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Maps() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyA-yh-Tw6rg7ZFr72mXw9VH5IAJMBeU_x4",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <GoogleMap zoom={10} center={center} className="w-full h-screen ">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyA-yh-Tw6rg7ZFr72mXw9VH5IAJMBeU_x4",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} className="w-full h-screen ">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }