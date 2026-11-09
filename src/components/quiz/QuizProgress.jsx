import React from 'react';
import { motion } from 'framer-motion';

export default function QuizProgress({ currentStep, totalSteps }) {
  // Calculate percentage
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);
  const formattedCurrent = String(currentStep + 1).padStart(2, '0');
  const formattedTotal = String(totalSteps).padStart(2, '0');

  return (
    <div className="w-full select-none">
      {/* Top Labels */}
      <div className="flex items-center justify-between text-xs mb-2.5">
        <div className="flex items-center gap-2">
          {/* Subtle Champagne Diamond SVG */}
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="0" width="5.656" height="5.656" transform="rotate(45 4 0)" fill="#C7A879" />
          </svg>
          <span className="font-cinzel text-xs tracking-[0.22em] text-wine font-semibold uppercase">
            QUESTION {formattedCurrent} OF {formattedTotal}
          </span>
        </div>

        <div className="font-cinzel text-xs tracking-widest text-muted-rose font-medium">
          Progress: <span className="text-wine font-semibold">{percentage}%</span>
        </div>
      </div>

      {/* Progress Track (Dusty Rose #E8D5D0) with Champagne (#C7A879) Fill */}
      <div className="w-full h-2 rounded-full bg-dusty-rose overflow-hidden relative shadow-inner">
        <motion.div
          className="h-full bg-champagne rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Subtle shimmer effect on the progress fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory/25 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

