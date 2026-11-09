import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-wine text-ivory flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#C7A879' }} 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#E8D5D0' }} 
      />

      {/* Decorative Fullscreen Border */}
      <div className="absolute inset-3 sm:inset-6 border border-champagne/30 rounded-2xl pointer-events-none" />

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg bg-ivory text-charcoal rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(41,35,38,0.5)] border border-champagne/40 text-center"
      >
        <div className="absolute inset-3 border border-champagne/25 rounded-xl pointer-events-none" />

        <div className="mb-3">
          <span className="font-cinzel text-xs tracking-[0.25em] text-muted-rose uppercase font-medium">
            A Moment To Remember
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-px bg-champagne/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          <span className="w-8 h-px bg-champagne/60" />
        </div>

        <h1 className="font-cormorant text-4xl sm:text-5xl text-wine font-medium mb-3">
          Welcome
        </h1>

        <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80 mb-6 max-w-sm mx-auto">
          A personal, handcrafted celebration crafted with deep love and affection.
        </p>

        <div className="flex items-center justify-center gap-3 my-4">
          <span className="w-10 h-px bg-champagne/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          <span className="w-10 h-px bg-champagne/50" />
        </div>

        <p className="font-cormorant text-sm sm:text-base text-charcoal/70 mb-8 max-w-xs mx-auto">
          Please confirm your special date to unlock your personal invitation.
        </p>

        <motion.button
          onClick={() => navigate('/verify')}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-8 py-3.5 rounded-xl bg-wine text-ivory border border-champagne shadow-[0_8px_20px_rgba(84,45,56,0.25)] hover:bg-[#43232c] transition-all duration-300"
        >
          <span className="relative z-10 font-cinzel text-xs tracking-[0.22em] uppercase font-semibold flex items-center justify-center gap-2 text-ivory">
            <span>Proceed to Verification</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

