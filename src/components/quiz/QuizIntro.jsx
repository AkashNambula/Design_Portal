import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { harshiiQuizConfig } from '../../data/harshiiQuizData';

export default function QuizIntro({ onStart }) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center select-none text-center">
      {/* Small Section Label: Muted Rose */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
          {harshiiQuizConfig.sectionLabel}
        </span>
      </motion.div>

      {/* Decorative Champagne Diamond Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <span className="w-12 sm:w-16 h-px bg-champagne/60" />
        <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-champagne" />
        </div>
        <span className="w-12 sm:w-16 h-px bg-champagne/60" />
      </motion.div>

      {/* Main Heading: Wine */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal tracking-tight mb-3"
      >
        {harshiiQuizConfig.mainHeading}
      </motion.h1>

      {/* Subtitle: Charcoal */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-cormorant italic text-lg sm:text-xl text-charcoal/80 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
      >
        {harshiiQuizConfig.subtitle}
      </motion.p>

      {/* Beautiful Introductory Card: Dusty Rose (#E8D5D0) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-dusty-rose/40 border border-champagne/50 rounded-3xl p-6 sm:p-10 shadow-sm relative mb-8 sm:mb-10"
      >
        {/* Decorative Champagne Corner Accents */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

        {/* Central SVG Badge */}
        <div className="w-14 h-14 rounded-full border border-champagne/60 bg-ivory shadow-xs flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-wine stroke-[1.6]" />
        </div>

        {/* Additional Text / Card Headline */}
        <p className="font-cormorant text-2xl sm:text-3xl text-wine font-medium max-w-md mx-auto leading-snug mb-3">
          {harshiiQuizConfig.additionalText}
        </p>

        {/* Supporting Charcoal Description */}
        <p className="font-montserrat text-xs sm:text-sm text-charcoal/85 max-w-lg mx-auto leading-relaxed">
          Test how well you remember Harshii's favourite tastes, places, loved ones, and what brings the brightest smile to her face.
        </p>

        {/* Three Micro Feature Badges in Champagne & Ivory */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-champagne/30 text-center">
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xs tracking-wider text-muted-rose font-bold">07</span>
            <span className="font-montserrat text-[11px] text-charcoal/80">Curated Questions</span>
          </div>
          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-champagne/25 py-2 sm:py-0">
            <span className="font-cinzel text-xs tracking-wider text-muted-rose font-bold">04</span>
            <span className="font-montserrat text-[11px] text-charcoal/80">Choices Each</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xs tracking-wider text-muted-rose font-bold">100%</span>
            <span className="font-montserrat text-[11px] text-charcoal/80">All About Harshii</span>
          </div>
        </div>
      </motion.div>

      {/* Primary Button: START QUIZ */}
      <motion.button
        type="button"
        onClick={onStart}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-wine text-ivory border border-champagne shadow-[0_6px_20px_rgba(84,45,56,0.25)] hover:bg-[#43232c] hover:shadow-[0_10px_28px_rgba(84,45,56,0.35)] transition-all duration-300 font-cinzel text-xs tracking-[0.24em] uppercase font-semibold cursor-pointer group"
      >
        <span>{harshiiQuizConfig.startButtonText}</span>
        <ArrowRight className="w-4 h-4 text-champagne group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
