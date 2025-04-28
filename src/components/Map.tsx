"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map({
  center,
  zoom,
}: {
  center: { lat: number; lng: number };
  zoom: number;
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="w-full h-full"
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
