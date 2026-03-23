"use client";

import type { Place } from "@/types";
import PlaceList from "./PlaceList";
import MapView from "./MapView";

interface SplitViewProps {
  places: Place[];
  selectedPlaceId: string | null;
  hoveredPlaceId: string | null;
  onSelectPlace: (id: string) => void;
  onHoverPlace: (id: string | null) => void;
}

export default function SplitView({
  places,
  selectedPlaceId,
  hoveredPlaceId,
  onSelectPlace,
  onHoverPlace,
}: SplitViewProps) {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100dvh-52px)] overflow-hidden">
      {/* Map - top on mobile, right on desktop */}
      <div className="shrink-0 h-[35vh] md:h-full md:flex-1 order-1 md:order-2">
        <MapView
          places={places}
          selectedPlaceId={selectedPlaceId}
          hoveredPlaceId={hoveredPlaceId}
          onSelectPlace={onSelectPlace}
        />
      </div>

      {/* List - bottom on mobile, left on desktop */}
      <div className="min-h-0 flex-1 md:w-[440px] md:flex-none order-2 md:order-1 border-r border-pnw-sand/50 overflow-y-auto">
        <PlaceList
          places={places}
          selectedPlaceId={selectedPlaceId}
          hoveredPlaceId={hoveredPlaceId}
          onSelectPlace={onSelectPlace}
          onHoverPlace={onHoverPlace}
        />
      </div>
    </div>
  );
}
