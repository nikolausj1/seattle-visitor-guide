"use client";

import { forwardRef } from "react";
import Image from "next/image";
import type { Place } from "@/types";

interface PlaceCardProps {
  place: Place;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  index: number;
}

const categoryLabels: Record<string, string> = {
  restaurant: "Restaurant",
  park: "Parks & Outdoors",
  activity: "Activity & Sightseeing",
};

const PlaceCard = forwardRef<HTMLDivElement, PlaceCardProps>(
  function PlaceCard({ place, isSelected, isHovered, onSelect, onHover, index }, ref) {
    return (
      <div
        ref={ref}
        onClick={() => onSelect(place.id)}
        onMouseEnter={() => onHover(place.id)}
        onMouseLeave={() => onHover(null)}
        className={`cursor-pointer rounded-lg overflow-hidden bg-white transition-all duration-200 ${
          isSelected
            ? "ring-2 ring-pnw-forest shadow-lg"
            : isHovered
            ? "shadow-md"
            : "shadow-sm hover:shadow-md"
        }`}
      >
        {/* Hero image */}
        <div className="relative h-44 overflow-hidden bg-pnw-sand">
          <Image
            src={`/images/places/${place.id}.jpg`}
            alt={place.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 440px"
          />
          {/* Number badge */}
          <span className="absolute top-3 left-3 bg-pnw-forest text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-md z-10">
            {index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg font-semibold text-pnw-charcoal leading-snug">
              {place.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-pnw-slate mb-3">
            <span>{place.neighborhood}</span>
            <span className="text-pnw-sand">·</span>
            <span className="text-pnw-bark">
              {categoryLabels[place.category]}
            </span>
          </div>

          <p className="text-sm text-pnw-charcoal/80 leading-relaxed mb-4">
            {place.description}
          </p>

          {/* Action links */}
          <div className="flex items-center gap-4 text-xs">
            {place.yelpUrl && (
              <a
                href={place.yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-pnw-slate hover:text-pnw-forest transition-colors"
              >
                Yelp
              </a>
            )}
            {place.websiteUrl && (
              <a
                href={place.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-pnw-slate hover:text-pnw-forest transition-colors"
              >
                Website
              </a>
            )}
            <a
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-pnw-slate hover:text-pnw-forest transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default PlaceCard;
