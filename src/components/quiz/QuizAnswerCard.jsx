import React from 'react';
import { motion } from 'framer-motion';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizAnswerCard({
  optionText,
  optionIndex,
  isSelected,
  isDisabled,
  onSelect,
}) {
  const letter = OPTION_LETTERS[optionIndex] || '•';

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative flex items-center justify-between gap-3.5 select-none shadow-xs ${
        isDisabled ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
      } ${
        isSelected
          ? 'bg-dusty-rose/70 border-2 border-champagne shadow-md ring-1 ring-champagne/40'
          : 'bg-dusty-rose/30 hover:bg-dusty-rose/55 border-champagne/40 hover:border-champagne'
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
        {/* Option Letter Badge (A, B, C, D) */}
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-cinzel text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
            isSelected
              ? 'bg-wine text-ivory border-wine'
              : 'bg-ivory text-wine border-champagne/60'
          }`}
        >
          {letter}
        </div>

        {/* Option Text in Inter / Montserrat typography */}
        <span
          className={`font-inter text-sm sm:text-base tracking-wide leading-snug transition-colors break-words ${
            isSelected ? 'text-wine font-semibold' : 'text-charcoal font-medium'
          }`}
        >
          {optionText}
        </span>
      </div>

      {/* SVG Decorative Dot Indicator */}
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
          isSelected
            ? 'bg-wine border-wine shadow-xs'
            : 'border-champagne/60 bg-ivory'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors ${
            isSelected ? 'bg-champagne' : 'bg-transparent'
          }`}
        />
      </div>
    </motion.button>
  );
}
