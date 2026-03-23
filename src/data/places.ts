import placesData from "./places.json";
import type { Place, FilterCategory } from "@/types";

export function getPlaces(): Place[] {
  return placesData as Place[];
}

export function getPlacesByCategory(category: FilterCategory): Place[] {
  if (category === "all") return getPlaces();
  return getPlaces().filter((p) => p.category === category);
}

export function getPlaceById(id: string): Place | undefined {
  return getPlaces().find((p) => p.id === id);
}
