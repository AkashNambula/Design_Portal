import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Sparkles, Award } from 'lucide-react';
import { harshiiQuizConfig } from '../../data/harshiiQuizData';

export default function QuizResults({
  score = 7,
  totalQuestions = 7,
  onReplay,
}) {
  const [displayScore, setDisplayScore] = useState(0);

  // Animated counter effect
  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const steps = 20;
    const increment = score / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center select-none text-center">
      {/* Small Section Label: Muted Rose */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
          QUIZ COMPLETED
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
        className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal tracking-tight mb-2"
      >
        {harshiiQuizConfig.resultHeading}
      </motion.h1>

      {/* Message: Charcoal */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-cormorant italic text-lg sm:text-xl text-charcoal/80 max-w-md mx-auto mb-8 leading-relaxed"
      >
        {harshiiQuizConfig.resultMessage}
      </motion.p>

      {/* Completion Card in Dusty Rose Frame with Champagne accents */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full bg-dusty-rose/40 border border-champagne/60 rounded-3xl p-8 sm:p-10 shadow-sm relative mb-8"
      >
        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

        {/* Central Award SVG Icon with glowing Champagne ring */}
        <div className="relative w-20 h-20 rounded-full border-2 border-champagne bg-ivory shadow-md flex items-center justify-center mx-auto mb-5">
          <Award className="w-10 h-10 text-wine stroke-[1.5]" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-champagne text-wine flex items-center justify-center shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-wine" />
          </motion.div>
        </div>

        {/* Display: 7 / 7 Correct Answers */}
        <div className="mb-3">
          <span className="font-cormorant text-4xl sm:text-5xl font-semibold text-wine tracking-tight">
            {displayScore} / {totalQuestions}
          </span>
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-muted-rose uppercase font-semibold mt-1">
            Correct Answers
          </p>
        </div>

        {/* Supporting note */}
        <p className="font-montserrat text-xs sm:text-sm text-charcoal/80 max-w-sm mx-auto leading-relaxed mt-4 pt-4 border-t border-champagne/30">
          You passed with flying colours! Every answer proves how deeply you cherish Harshii and the moments you share together.
        </p>
      </motion.div>

      {/* Button: REPLAY QUIZ */}
      <motion.button
        type="button"
        onClick={onReplay}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-wine text-ivory border border-champagne shadow-[0_6px_20px_rgba(84,45,56,0.25)] hover:bg-[#43232c] hover:shadow-[0_10px_28px_rgba(84,45,56,0.35)] transition-all duration-300 font-cinzel text-xs tracking-[0.24em] uppercase font-semibold cursor-pointer group"
      >
        <RotateCcw className="w-4 h-4 text-champagne group-hover:-rotate-45 transition-transform" />
        <span>{harshiiQuizConfig.replayButtonText}</span>
      </motion.button>
    </div>
  );
}
