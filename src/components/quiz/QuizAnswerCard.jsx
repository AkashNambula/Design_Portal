import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function QuizAnswerCard({
  optionText,
  optionIndex,
  isSelected,
  onSelect,
}) {
  const optionLetters = ['A', 'B', 'C', 'D'];
  const letter = optionLetters[optionIndex] || '•';

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2 }}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative flex items-center justify-between gap-4 cursor-pointer select-none group shadow-xs ${
        isSelected
          ? 'bg-dusty-rose/70 border-2 border-champagne shadow-md ring-1 ring-champagne/40'
          : 'bg-dusty-rose/30 hover:bg-dusty-rose/50 border-champagne/40 hover:border-champagne'
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
        {/* Option Letter Badge (A, B, C, D) */}
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center font-cinzel text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
            isSelected
              ? 'bg-wine text-ivory border-wine'
              : 'bg-ivory text-wine border-champagne/60 group-hover:border-champagne'
          }`}
        >
          {letter}
        </div>

        {/* Option Text in Wine typography */}
        <span
          className={`font-cormorant text-lg sm:text-xl font-medium tracking-wide transition-colors ${
            isSelected ? 'text-wine font-semibold' : 'text-wine/90 group-hover:text-wine'
          }`}
        >
          {optionText}
        </span>
      </div>

      {/* SVG Selection Indicator (Radio / Checkmark) */}
      <div
        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
          isSelected
            ? 'bg-wine border-wine shadow-xs'
            : 'border-champagne/60 bg-ivory group-hover:border-champagne'
        }`}
      >
        {isSelected ? (
          <Check className="w-3.5 h-3.5 text-ivory stroke-[2.5]" aria-hidden="true" />
        ) : (
          <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-champagne/40 transition-colors" />
        )}
      </div>
    </motion.button>
  );
}

