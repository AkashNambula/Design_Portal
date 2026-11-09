import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FloralSvg from './FloralSvg';
import GeometricPattern from './GeometricPattern';

export default function InvitationPage() {
  const navigate = useNavigate();

  const handleOpenInvitation = () => {
    navigate('/celebration');
  };

  // Staggered reveal animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden select-none flex flex-col justify-between items-center p-2.5 sm:p-5 md:p-7 text-charcoal">
      
      {/* ========================================================================= */}
      {/* 1. FULLSCREEN BRIGHT BACKGROUND IMAGE                                     */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/invitation-bg.jpg"
          alt="Harshii Celebration Background"
          className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000"
          style={{
            filter: 'brightness(1.25) contrast(1.08) saturate(1.15)',
          }}
        />

        {/* Luminous Bright Radiance Overlay (Bright, warm, celebratory Ivory & Champagne) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(248, 243, 239, 0.48) 0%, rgba(248, 243, 239, 0.65) 55%, rgba(232, 213, 208, 0.75) 100%)',
          }}
        />

        {/* Subtle Ambient Golden Glows */}
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: '#C7A879' }} 
        />
        <div 
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: '#E8D5D0' }} 
        />
      </div>

      {/* Decorative Outer Border for Fullscreen Luxury Editorial Feel */}
      <div className="fixed inset-1.5 sm:inset-3 md:inset-4 border border-champagne/45 rounded-2xl md:rounded-3xl pointer-events-none z-20" />
      <div className="fixed inset-2.5 sm:inset-4.5 md:inset-6 border border-champagne/25 rounded-xl md:rounded-2xl pointer-events-none z-20" />

      {/* Subtle Corner Accents on fullscreen corners */}
      <div className="hidden md:block fixed top-5 left-5 text-champagne/60 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 0,16 L 0,0 L 16,0" />
          <circle cx="6" cy="6" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed top-5 right-5 text-champagne/60 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 24,16 L 24,0 L 8,0" />
          <circle cx="18" cy="6" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed bottom-5 left-5 text-champagne/60 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 0,8 L 0,24 L 16,24" />
          <circle cx="6" cy="18" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed bottom-5 right-5 text-champagne/60 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 24,8 L 24,24 L 8,24" />
          <circle cx="18" cy="18" r="1.5" fill="#C7A879" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULLSCREEN INVITATION EDITORIAL PANEL                                  */}
      {/* ========================================================================= */}
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex-1 flex flex-col justify-between items-center bg-ivory/65 backdrop-blur-[2px] rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(84,45,56,0.18)] border-2 border-champagne/60 p-4 sm:p-7 md:p-10 my-auto"
      >
        {/* Inner Ornamental Double Frame with Corner Flourishes */}
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-champagne/40 rounded-xl md:rounded-2xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 md:inset-5 border border-champagne/20 rounded-lg md:rounded-xl pointer-events-none" />

        {/* Card Corner Ornaments */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-5 h-5 border-t border-l border-champagne pointer-events-none" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-5 h-5 border-t border-r border-champagne pointer-events-none" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-5 h-5 border-b border-l border-champagne pointer-events-none" />
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-5 h-5 border-b border-r border-champagne pointer-events-none" />

        {/* Content Container: Balanced 3-Section Layout on Desktop, Vertically Stacked on Mobile */}
        <div className="relative z-20 w-full my-auto flex flex-col lg:grid lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8 items-center">
          
          {/* LEFT SECTION: Delicate floral illustration */}
          <div className="w-full lg:col-span-3 flex justify-center items-center py-1 lg:py-0">
            <div className="w-36 sm:w-44 lg:w-full max-h-[140px] sm:max-h-[180px] lg:max-h-[440px] overflow-hidden flex items-center justify-center">
              <FloralSvg />
            </div>
          </div>

          {/* CENTER SECTION: Editorial Typography & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-6 text-center flex flex-col items-center justify-center px-2 sm:px-4"
          >
            {/* Small Heading: YOU ARE CORDIALLY INVITED */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.28em] text-muted-rose uppercase font-semibold">
                YOU ARE CORDIALLY INVITED
              </span>
            </motion.div>

            {/* Small Decorative Flourish Above Name */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <span className="w-8 sm:w-12 h-px bg-champagne/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
              <span className="w-8 sm:w-12 h-px bg-champagne/60" />
            </motion.div>

            {/* Main Heading: Harshii */}
            <motion.h1
              variants={itemVariants}
              className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-wine tracking-wide mb-2 sm:mb-3 leading-none drop-shadow-sm"
              style={{ letterSpacing: '0.04em' }}
            >
              Harshii
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="font-cormorant italic text-base sm:text-lg md:text-xl text-charcoal/90 max-w-md mx-auto mb-3 sm:mb-4 leading-relaxed font-normal"
            >
              To a little celebration of a very special day.
            </motion.p>

            {/* Small Elegant Divider */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 my-2 sm:my-3">
              <span className="w-12 sm:w-16 h-px bg-champagne/60" />
              <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
                <div className="w-0.5 h-0.5 bg-champagne" />
              </div>
              <span className="w-12 sm:w-16 h-px bg-champagne/60" />
            </motion.div>

            {/* Additional Text */}
            <motion.p
              variants={itemVariants}
              className="font-cormorant text-sm sm:text-base md:text-lg text-charcoal/80 max-w-sm mx-auto mb-4 sm:mb-5 leading-relaxed font-normal"
            >
              Some days are special, and some people make every day special.
            </motion.p>

            {/* Date Badge: 18 NOVEMBER */}
            <motion.div variants={itemVariants} className="my-1 sm:my-2">
              <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-2 rounded-full border border-champagne/70 bg-dusty-rose/40 shadow-sm">
                <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
                <span className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.25em] font-semibold text-wine">
                  18 NOVEMBER
                </span>
                <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION: Decorative geometric diamond pattern */}
          <div className="w-full lg:col-span-3 flex justify-center items-center py-1 lg:py-0">
            <div className="w-36 sm:w-44 lg:w-full max-h-[140px] sm:max-h-[180px] lg:max-h-[440px] overflow-hidden flex items-center justify-center">
              <GeometricPattern />
            </div>
          </div>

        </div>

        {/* BOTTOM CENTER: MAIN CALL-TO-ACTION BUTTON */}
        <div className="relative z-20 w-full flex justify-center mt-6 sm:mt-8 pt-4 border-t border-champagne/30">
          <motion.button
            onClick={handleOpenInvitation}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="group relative px-8 sm:px-11 py-3.5 sm:py-4 rounded-xl bg-ivory text-wine border-2 border-champagne shadow-[0_8px_25px_rgba(84,45,56,0.18)] hover:shadow-[0_12px_32px_rgba(199,168,121,0.35)] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Elegant Champagne highlight shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10 font-cinzel text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-champagne group-hover:bg-wine transition-colors duration-300" />
              OPEN YOUR INVITATION
              <span className="w-1.5 h-1.5 rotate-45 bg-champagne group-hover:bg-wine transition-colors duration-300" />
            </span>
          </motion.button>
        </div>

        {/* Refined Bottom Micro Detail */}
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-rose text-[10px] tracking-[0.2em] font-cinzel uppercase text-center">
          <span>Harshii’s Special Day</span>
          <span>•</span>
          <span>A Celebration of Grace</span>
        </div>
      </motion.main>

    </div>
  );
}
