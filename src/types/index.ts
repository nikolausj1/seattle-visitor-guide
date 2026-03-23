export interface Place {
  id: string;
  name: string;
  category: CategoryValue;
  tags: string[];
  neighborhood: string;
  description: string;
  heroImage: string;
  yelpUrl?: string;
  websiteUrl?: string;
  googleMapsUrl: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "restaurant", label: "Restaurants" },
  { value: "bar", label: "Bars & Drinks" },
  { value: "coffee", label: "Coffee" },
  { value: "park", label: "Parks & Outdoors" },
  { value: "activity", label: "Activities & Sightseeing" },
] as const;

export type CategoryValue =
  | "restaurant"
  | "bar"
  | "coffee"
  | "park"
  | "activity";

export type FilterCategory = CategoryValue | "all";
