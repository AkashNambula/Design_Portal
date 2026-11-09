import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';

export default function BirthdayMessage({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-ivory rounded-3xl p-6 sm:p-10 border-2 border-champagne/70 shadow-[0_25px_60px_rgba(41,35,38,0.4)] text-center"
        >
          {/* Corner Ornamental Accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-champagne pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-champagne pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-champagne pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-champagne pointer-events-none" />

          {/* Close Button at top-right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-charcoal/60 hover:text-wine hover:bg-dusty-rose/30 transition-colors"
            aria-label="Close message"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Delicate Flourish */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 sm:w-12 h-px bg-champagne/60" />
            <div className="w-2 h-2 rotate-45 bg-champagne" />
            <span className="w-8 sm:w-12 h-px bg-champagne/60" />
          </div>

          {/* Label */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold block mb-2">
            A Note From The Heart
          </span>

          {/* Script Name */}
          <div className="mb-4">
            <span className="font-script text-4xl sm:text-5xl text-wine font-normal leading-none">
              Harshii
            </span>
          </div>

          {/* The Exact Message Card Text */}
          <div className="p-4 sm:p-6 rounded-2xl bg-dusty-rose/30 border border-champagne/50 mb-6">
            <p className="font-cormorant italic text-lg sm:text-2xl text-wine font-normal leading-relaxed">
              "Thank you for being you, Harshii. I hope this little surprise brings a smile to your face."
            </p>
          </div>

          {/* Close / Acknowledge Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-ivory text-wine border border-champagne hover:border-wine font-cinzel text-xs tracking-[0.22em] font-semibold uppercase shadow-xs hover:shadow-sm transition-all"
          >
            CLOSE
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

