import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizFeedback({
  feedback, // { type: 'correct' | 'wrong', message: string, subMessage: string } | null
  onDismiss,
}) {
  useEffect(() => {
    if (!feedback) return;

    // For wrong answer, auto-dismiss after 2.2s if user doesn't click "Try Again"
    if (feedback.type === 'wrong') {
      const timer = setTimeout(() => {
        if (onDismiss) onDismiss();
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [feedback, onDismiss]);

  if (!feedback) return null;

  const isCorrect = feedback.type === 'correct';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={
            isCorrect
              ? { opacity: 1, scale: 1, y: 0 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: [-8, 8, -6, 6, -3, 3, 0],
                  transition: {
                    x: { duration: 0.5, ease: 'easeInOut' },
                    duration: 0.35,
                  },
                }
          }
          exit={{ opacity: 0, scale: 0.9, y: -15, transition: { duration: 0.25 } }}
          className={`relative w-full max-w-sm rounded-3xl p-6 sm:p-8 text-center border-2 shadow-[0_20px_50px_rgba(41,35,38,0.4)] ${
            isCorrect
              ? 'bg-[#1b4332] text-ivory border-champagne'
              : 'bg-[#5c1d24] text-ivory border-champagne'
          }`}
        >
          {/* Champagne Corner Accents */}
          <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-champagne/80 pointer-events-none" />
          <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-champagne/80 pointer-events-none" />
          <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-champagne/80 pointer-events-none" />
          <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-champagne/80 pointer-events-none" />

          {/* Central Animated SVG Icon */}
          <div className="mx-auto mb-4 flex items-center justify-center">
            {isCorrect ? (
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="w-16 h-16 rounded-full bg-ivory/15 border-2 border-champagne flex items-center justify-center shadow-inner"
              >
                {/* Inline SVG Green Checkmark */}
                <svg
                  className="w-8 h-8 text-[#52b788]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="w-16 h-16 rounded-full bg-ivory/15 border-2 border-champagne flex items-center justify-center shadow-inner"
              >
                {/* Inline SVG Red Cross Icon */}
                <svg
                  className="w-8 h-8 text-[#ff6b6b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.div>
            )}
          </div>

          {/* Popup Heading */}
          <h3 className="font-cormorant text-3xl font-semibold text-ivory mb-1 tracking-wide">
            {isCorrect ? 'Correct Answer!' : "Oops! That's not right!"}
          </h3>

          {/* Subtitle / Feedback Message */}
          <p className="font-montserrat text-sm text-ivory/90 mb-5 leading-relaxed">
            {isCorrect
              ? 'Yay! You know Harshii so well!'
              : 'Think twice and try again!'}
          </p>

          {/* Optional manual dismiss button for Wrong answer to immediately retry */}
          {!isCorrect && (
            <motion.button
              type="button"
              onClick={onDismiss}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 rounded-full bg-ivory text-[#5c1d24] font-cinzel text-xs tracking-[0.2em] uppercase font-bold border border-champagne shadow-md hover:bg-ivory/90 transition-all cursor-pointer"
            >
              Try Again
            </motion.button>
          )}

          {/* Tiny decorative diamond at bottom */}
          <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
            <span className="w-6 h-px bg-champagne" />
            <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
            <span className="w-6 h-px bg-champagne" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
