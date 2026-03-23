"use client";

import { CATEGORIES, type FilterCategory } from "@/types";

interface FilterBarProps {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export default function FilterBar({
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-40 bg-pnw-cream/95 backdrop-blur-sm border-b border-pnw-sand">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value as FilterCategory)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? "bg-pnw-forest text-white"
                  : "text-pnw-slate hover:bg-pnw-sand hover:text-pnw-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
