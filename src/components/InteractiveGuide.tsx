"use client";

import { useState, useMemo } from "react";
import type { Place, FilterCategory } from "@/types";
import FilterBar from "./FilterBar";
import SplitView from "./SplitView";

interface InteractiveGuideProps {
  places: Place[];
}

export default function InteractiveGuide({ places }: InteractiveGuideProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);

  const filteredPlaces = useMemo(() => {
    if (activeCategory === "all") return places;
    return places.filter((p) => p.category === activeCategory);
  }, [places, activeCategory]);

  const handleCategoryChange = (category: FilterCategory) => {
    setActiveCategory(category);
    setSelectedPlaceId(null);
    setHoveredPlaceId(null);
  };

  return (
    <div>
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SplitView
        places={filteredPlaces}
        selectedPlaceId={selectedPlaceId}
        hoveredPlaceId={hoveredPlaceId}
        onSelectPlace={setSelectedPlaceId}
        onHoverPlace={setHoveredPlaceId}
      />
    </div>
  );
}
