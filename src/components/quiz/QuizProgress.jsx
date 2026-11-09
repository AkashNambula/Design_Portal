import React from 'react';
import { motion } from 'framer-motion';

export default function QuizProgress({ currentStep, totalSteps, score = 0 }) {
  // Calculate percentage based on current question progression
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);
  const currentNumber = currentStep + 1;

  return (
    <div className="w-full select-none mb-6">
      {/* Top Labels: Question counter & Score counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs mb-3">
        {/* Question Counter */}
        <div className="flex items-center gap-2">
          {/* Champagne Diamond Icon */}
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="0" width="5.656" height="5.656" transform="rotate(45 4 0)" fill="#C7A879" />
          </svg>
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-wine font-semibold uppercase">
            Question {currentNumber} of {totalSteps}
          </span>
        </div>

        {/* Score Counter */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="font-montserrat text-xs tracking-wide text-charcoal/80">
            Correct Answers:
          </span>
          <span className="font-cinzel text-xs sm:text-sm tracking-wider text-wine bg-dusty-rose/60 border border-champagne/60 px-2.5 py-0.5 rounded-full font-bold shadow-2xs">
            {score} / {totalSteps}
          </span>
        </div>
      </div>

      {/* Clean horizontal progress bar with Champagne & Wine colours */}
      <div className="w-full h-2.5 rounded-full bg-dusty-rose/80 border border-champagne/40 overflow-hidden relative shadow-inner">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: 'linear-gradient(90deg, #542D38 0%, #C7A879 100%)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Subtle champagne shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory/20 to-transparent opacity-60" />
        </motion.div>
      </div>
    </div>
  );
}
