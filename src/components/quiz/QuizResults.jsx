import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ArrowLeft, Award, Sparkles, Check, HelpCircle, CheckCircle2 } from 'lucide-react';
import { quizConfig, quizQuestions } from '../../data/quizData';

export default function QuizResults({
  score,
  totalQuestions = 7,
  selectedAnswers = {},
  isConfigured = false,
  onRestart,
  onBackToAbout,
}) {
  const [displayScore, setDisplayScore] = useState(0);
  const [demoMode, setDemoMode] = useState(!isConfigured); // Allows previewing the score interface if answers are pending

  // Effective score to display
  const effectiveScore = isConfigured ? score : (demoMode ? score : 0);
  const percentage = Math.round((effectiveScore / totalQuestions) * 100);

  // Animated counter effect
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const steps = 30;
    const increment = effectiveScore / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= effectiveScore) {
        setDisplayScore(effectiveScore);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [effectiveScore]);

  // Determine personalized message based on score
  const getResultMessage = (val) => {
    if (val >= 6) return quizConfig.resultMessages.high;
    if (val >= 4) return quizConfig.resultMessages.medium;
    return quizConfig.resultMessages.low;
  };

  const resultMeta = getResultMessage(effectiveScore);

  // SVG circle calculations for progress ring
  const circleRadius = 58;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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
        Your Results
      </motion.h1>

      {/* Subtitle: Charcoal */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-cormorant italic text-lg sm:text-xl text-charcoal/80 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed"
      >
        Let's see how well you know Harshii.
      </motion.p>

      {/* Circular Score Indicator & Information Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-dusty-rose/40 border border-champagne/50 rounded-3xl p-6 sm:p-10 shadow-sm relative mb-8 sm:mb-10"
      >
        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

        {/* ELEGANT CIRCULAR PROGRESS RING */}
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-6 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
            {/* Background track: Dusty Rose / Champagne Tint */}
            <circle
              cx="70"
              cy="70"
              r={circleRadius}
              stroke="#E8D5D0"
              strokeWidth="9"
              fill="transparent"
            />
            {/* Champagne Progress Ring */}
            <motion.circle
              cx="70"
              cy="70"
              r={circleRadius}
              stroke="#C7A879"
              strokeWidth="9"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: strokeDashoffset }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            />
          </svg>

          {/* Score Display in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-cormorant text-5xl sm:text-6xl text-wine font-bold leading-none">
              {displayScore}
            </span>
            <span className="font-cinzel text-[11px] tracking-[0.25em] text-muted-rose uppercase font-semibold mt-1">
              OUT OF {totalQuestions}
            </span>
          </div>
        </div>

        {/* Headline & Personalized Message */}
        <div className="max-w-md mx-auto mb-8">
          <h3 className="font-cormorant text-2xl sm:text-3xl text-wine font-medium mb-2">
            {resultMeta.headline}
          </h3>
          <p className="font-cormorant italic text-base sm:text-lg text-charcoal/90 leading-relaxed">
            "{resultMeta.message}"
          </p>
        </div>

        {/* 4 Detail Metric Cards in Ivory with Champagne Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 text-center">
          {/* Card 1: Total */}
          <div className="p-3.5 rounded-2xl bg-ivory border border-champagne/40 shadow-xs">
            <span className="block font-cinzel text-[10px] tracking-wider text-muted-rose uppercase font-semibold mb-1">
              TOTAL
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-wine">
              {totalQuestions}
            </span>
          </div>

          {/* Card 2: Correct */}
          <div className="p-3.5 rounded-2xl bg-ivory border border-champagne/40 shadow-xs">
            <span className="block font-cinzel text-[10px] tracking-wider text-muted-rose uppercase font-semibold mb-1">
              CORRECT
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-wine">
              {effectiveScore}
            </span>
          </div>

          {/* Card 3: Incorrect */}
          <div className="p-3.5 rounded-2xl bg-ivory border border-champagne/40 shadow-xs">
            <span className="block font-cinzel text-[10px] tracking-wider text-muted-rose uppercase font-semibold mb-1">
              INCORRECT
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-wine">
              {totalQuestions - effectiveScore}
            </span>
          </div>

          {/* Card 4: Percentage */}
          <div className="p-3.5 rounded-2xl bg-ivory border border-champagne/40 shadow-xs">
            <span className="block font-cinzel text-[10px] tracking-wider text-muted-rose uppercase font-semibold mb-1">
              ACCURACY
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-wine">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Development & Config Note when answers are pending */}
        {!isConfigured && (
          <div className="mt-6 pt-5 border-t border-champagne/30 text-xs font-montserrat text-charcoal/80 flex flex-col sm:flex-row items-center justify-between gap-3 bg-ivory/60 p-3.5 rounded-xl border border-champagne/30">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-4 h-4 text-wine shrink-0" />
              <span>
                <strong>Answer Key Status:</strong> Questions configured in <code className="text-wine bg-dusty-rose/40 px-1 py-0.5 rounded">src/data/quizData.js</code>. All 7 choices successfully recorded!
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDemoMode(!demoMode)}
              className="text-[11px] font-cinzel tracking-wider text-wine hover:text-muted-rose underline shrink-0 font-semibold"
            >
              {demoMode ? 'View Raw Status' : 'Preview Demo Score (5/7)'}
            </button>
          </div>
        )}
      </motion.div>

      {/* Answers Summary Breakdown Accordion/List */}
      <div className="w-full bg-dusty-rose/25 border border-champagne/35 rounded-2xl p-5 mb-8 text-left">
        <span className="block font-cinzel text-xs tracking-[0.2em] text-muted-rose uppercase font-semibold mb-3">
          Your Recorded Selections
        </span>
        <div className="space-y-2">
          {quizQuestions.map((q) => {
            const chosenIndex = selectedAnswers[q.id];
            const optionLetters = ['A', 'B', 'C', 'D'];
            const chosenOptionText = chosenIndex !== undefined && chosenIndex !== null ? q.options[chosenIndex] : 'Not answered';
            const chosenLetter = chosenIndex !== undefined && chosenIndex !== null ? optionLetters[chosenIndex] : '—';

            return (
              <div
                key={q.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-ivory border border-champagne/25 text-xs font-montserrat"
              >
                <div className="flex items-center gap-2.5 truncate mr-3">
                  <span className="font-cinzel text-[11px] text-muted-rose font-bold shrink-0">
                    Q{q.questionNumber}:
                  </span>
                  <span className="text-charcoal/90 truncate font-cormorant text-base">
                    {q.question}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="px-2 py-0.5 rounded bg-dusty-rose/40 text-wine font-cinzel font-semibold text-[10px]">
                    {chosenLetter}: {chosenOptionText}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-wine" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TWO PRIMARY BUTTONS: TRY AGAIN & BACK TO ABOUT */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        {/* TRY AGAIN BUTTON (Wine Background with SVG Rotate Icon) */}
        <motion.button
          type="button"
          onClick={onRestart}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-wine text-ivory border-2 border-champagne shadow-sm hover:bg-[#43232c] font-cinzel text-xs tracking-[0.2em] uppercase font-semibold transition-all"
        >
          <RotateCcw className="w-4 h-4 text-champagne" />
          <span>TRY AGAIN</span>
        </motion.button>

        {/* BACK TO ABOUT BUTTON (Ivory / Dusty Rose Background with SVG Arrow Icon) */}
        <motion.button
          type="button"
          onClick={onBackToAbout}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-dusty-rose/60 text-wine border-2 border-champagne/60 hover:bg-dusty-rose font-cinzel text-xs tracking-[0.2em] uppercase font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-wine" />
          <span>BACK TO ABOUT</span>
        </motion.button>
      </div>
    </div>
  );
}

