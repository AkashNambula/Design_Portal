import React from 'react';
import { Sparkles, Heart, Star, Layers } from 'lucide-react';

const categoryIcons = {
  all: Layers,
  harshii: Star,
  together: Heart,
  special: Sparkles,
};

export default function MemoryFilters({
  categories = [],
  activeCategory = 'all',
  onSelectCategory,
  categoryCounts = {},
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-6 sm:my-8 select-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const IconComponent = categoryIcons[cat.id] || Sparkles;
        const count = categoryCounts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`group flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 border ${
              isActive
                ? 'bg-wine text-ivory border-champagne shadow-[0_6px_20px_rgba(84,45,56,0.25)] font-semibold scale-105'
                : 'bg-dusty-rose/40 text-wine hover:bg-dusty-rose/80 border-champagne/40 hover:border-champagne'
            }`}
          >
            <IconComponent
              className={`w-3.5 h-3.5 transition-colors ${
                isActive ? 'text-champagne fill-champagne/30' : 'text-muted-rose group-hover:text-wine'
              }`}
            />
            <span>{cat.label}</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-montserrat font-bold transition-colors ${
                isActive
                  ? 'bg-ivory text-wine'
                  : 'bg-ivory/70 text-charcoal/80 group-hover:bg-ivory'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

