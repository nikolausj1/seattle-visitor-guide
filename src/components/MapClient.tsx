"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Place } from "@/types";

interface MapClientProps {
  places: Place[];
  selectedPlaceId: string | null;
  hoveredPlaceId: string | null;
  onSelectPlace: (id: string) => void;
}

// Seattle center coordinates
const SEATTLE_CENTER: [number, number] = [47.6262, -122.3421];
const DEFAULT_ZOOM = 12;

function createMarkerIcon(isSelected: boolean, isHovered: boolean, index: number) {
  const size = isSelected ? 32 : isHovered ? 28 : 24;
  const color = isSelected ? "#1B365D" : "#2D5016";
  const border = isSelected
    ? "3px solid white"
    : isHovered
    ? "2px solid white"
    : "2px solid rgba(255,255,255,0.8)";
  const shadow = isSelected
    ? "0 0 0 4px rgba(27,54,93,0.3), 0 2px 8px rgba(0,0,0,0.3)"
    : "0 2px 6px rgba(0,0,0,0.3)";
  const fontSize = isSelected ? 11 : 10;

  return L.divIcon({
    className: "",
    html: `<div class="place-marker" style="
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      border: ${border};
      box-shadow: ${shadow};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: ${fontSize}px;
      font-weight: 700;
      font-family: system-ui, sans-serif;
    ">${index + 1}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

// Component to handle map flying to selected place
function MapController({
  selectedPlace,
  places,
}: {
  selectedPlace: Place | null;
  places: Place[];
}) {
  const map = useMap();

  // Fly to selected place
  useEffect(() => {
    if (selectedPlace) {
      map.flyTo(
        [selectedPlace.coordinates.lat, selectedPlace.coordinates.lng],
        15,
        { duration: 0.8 }
      );
    }
  }, [selectedPlace, map]);

  // Fit bounds when places change (filter change)
  useEffect(() => {
    if (places.length > 0) {
      const bounds = L.latLngBounds(
        places.map((p) => [p.coordinates.lat, p.coordinates.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
  }, [places, map]);

  return null;
}

export default function MapClient({
  places,
  selectedPlaceId,
  hoveredPlaceId,
  onSelectPlace,
}: MapClientProps) {
  const selectedPlace = useMemo(
    () => places.find((p) => p.id === selectedPlaceId) || null,
    [places, selectedPlaceId]
  );

  return (
    <MapContainer
      center={SEATTLE_CENTER}
      zoom={DEFAULT_ZOOM}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController selectedPlace={selectedPlace} places={places} />

      {places.map((place, index) => {
        const isSelected = place.id === selectedPlaceId;
        const isHovered = place.id === hoveredPlaceId;

        return (
          <Marker
            key={place.id}
            position={[place.coordinates.lat, place.coordinates.lng]}
            icon={createMarkerIcon(isSelected, isHovered, index)}
            eventHandlers={{
              click: () => onSelectPlace(place.id),
            }}
            zIndexOffset={isSelected ? 1000 : isHovered ? 500 : 0}
          >
            <Popup>
              <div className="text-sm">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-500">{place.neighborhood}</span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
