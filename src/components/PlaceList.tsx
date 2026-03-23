"use client";

import { useRef, useEffect, useCallback } from "react";
import type { Place } from "@/types";
import PlaceCard from "./PlaceCard";

interface PlaceListProps {
  places: Place[];
  selectedPlaceId: string | null;
  hoveredPlaceId: string | null;
  onSelectPlace: (id: string) => void;
  onHoverPlace: (id: string | null) => void;
}

export default function PlaceList({
  places,
  selectedPlaceId,
  hoveredPlaceId,
  onSelectPlace,
  onHoverPlace,
}: PlaceListProps) {
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setCardRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) {
        cardRefs.current.set(id, el);
      } else {
        cardRefs.current.delete(id);
      }
    },
    []
  );

  // Scroll to selected card when a pin is clicked on the map
  useEffect(() => {
    if (selectedPlaceId) {
      const el = cardRefs.current.get(selectedPlaceId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedPlaceId]);

  return (
    <div className="p-4 space-y-4">
      <p className="text-sm text-pnw-slate mb-2">
        {places.length} {places.length === 1 ? "place" : "places"}
      </p>
      {places.map((place, index) => (
        <PlaceCard
          key={place.id}
          ref={setCardRef(place.id)}
          place={place}
          isSelected={selectedPlaceId === place.id}
          isHovered={hoveredPlaceId === place.id}
          onSelect={onSelectPlace}
          onHover={onHoverPlace}
          index={index}
        />
      ))}
    </div>
  );
}
