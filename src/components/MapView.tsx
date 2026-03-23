"use client";

import dynamic from "next/dynamic";
import type { Place } from "@/types";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-pnw-sand/50 flex items-center justify-center">
      <div className="text-pnw-slate text-sm">Loading map...</div>
    </div>
  ),
});

interface MapViewProps {
  places: Place[];
  selectedPlaceId: string | null;
  hoveredPlaceId: string | null;
  onSelectPlace: (id: string) => void;
}

export default function MapView(props: MapViewProps) {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <MapClient {...props} />
    </div>
  );
}
