import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ExperiencePlaceholder() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-wine text-ivory flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#C7A879' }} 
      />

      {/* Decorative Outer Border */}
      <div className="absolute inset-3 sm:inset-6 border border-champagne/30 rounded-2xl pointer-events-none" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg bg-ivory text-charcoal rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(41,35,38,0.5)] border border-champagne/40 text-center"
      >
        <div className="absolute inset-3 border border-champagne/25 rounded-xl pointer-events-none" />

        <div className="mb-2">
          <span className="font-cinzel text-xs tracking-[0.25em] text-muted-rose uppercase font-medium">
            Next Experience
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-px bg-champagne/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          <span className="w-8 h-px bg-champagne/60" />
        </div>

        <h1 className="font-cormorant text-4xl sm:text-5xl text-wine font-medium mb-3">
          The Celebration Begins
        </h1>

        <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80 mb-6 max-w-sm mx-auto">
          The next chapter of Harshii’s celebration will unlock here soon.
        </p>

        <div className="flex items-center justify-center gap-3 my-4">
          <span className="w-10 h-px bg-champagne/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          <span className="w-10 h-px bg-champagne/50" />
        </div>

        <motion.button
          onClick={() => navigate('/invitation')}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-7 py-3 rounded-xl bg-ivory text-wine border border-champagne shadow-sm hover:shadow-md transition-all duration-300"
        >
          <span className="relative z-10 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2">
            <span>Return to Invitation</span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

