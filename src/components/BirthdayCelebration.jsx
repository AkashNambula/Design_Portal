import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, RotateCcw, ArrowLeft } from 'lucide-react';
import BalloonGame from './BalloonGame';
import BirthdayCake from './BirthdayCake';
import BirthdayMessage from './BirthdayMessage';

export default function BirthdayCelebration() {
  const navigate = useNavigate();

  // Game and interaction state
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [gameResetKey, setGameResetKey] = useState(0);

  const handleGameComplete = () => {
    setIsGameCompleted(true);
  };

  const handleNextSection = () => {
    // Navigate to the existing About section
    navigate('/experience?tab=about');
  };

  const handleReplayBalloons = () => {
    setIsGameCompleted(false);
    setCandleBlown(false);
    setGameResetKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen w-full bg-ivory text-charcoal flex flex-col items-center justify-between p-3 sm:p-6 md:p-10 relative overflow-x-hidden select-none">
      
      {/* Luxury Ambient Glows - Strictly Champagne & Dusty Rose */}
      <div 
        className="fixed -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: '#C7A879' }} 
      />
      <div 
        className="fixed -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: '#E8D5D0' }} 
      />

      {/* Decorative Outer Double Border for Fullscreen Luxury Editorial Aesthetic */}
      <div className="fixed inset-2 sm:inset-4 md:inset-6 border border-champagne/35 rounded-2xl pointer-events-none z-10" />
      <div className="fixed inset-3 sm:inset-5 md:inset-7 border border-champagne/20 rounded-xl pointer-events-none z-10" />

      {/* Subtle Corner Accents */}
      <div className="hidden md:block fixed top-6 left-6 text-champagne/50 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 0,16 L 0,0 L 16,0" />
          <circle cx="6" cy="6" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed top-6 right-6 text-champagne/50 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 24,16 L 24,0 L 8,0" />
          <circle cx="18" cy="6" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed bottom-6 left-6 text-champagne/50 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 0,8 L 0,24 L 16,24" />
          <circle cx="6" cy="18" r="1.5" fill="#C7A879" />
        </svg>
      </div>
      <div className="hidden md:block fixed bottom-6 right-6 text-champagne/50 pointer-events-none z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 24,8 L 24,24 L 8,24" />
          <circle cx="18" cy="18" r="1.5" fill="#C7A879" />
        </svg>
      </div>

      {/* TOP HEADER SECTION */}
      <header className="relative z-20 w-full max-w-4xl text-center pt-4 sm:pt-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Small Decorative Text: "A SPECIAL DAY • A BEAUTIFUL SOUL" */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-6 sm:w-10 h-px bg-champagne/60" />
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
              A SPECIAL DAY • A BEAUTIFUL SOUL
            </span>
            <span className="w-6 sm:w-10 h-px bg-champagne/60" />
          </div>

          {/* Main Heading: "Happy Birthday Harshii" */}
          <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-normal text-wine tracking-wide mb-2 sm:mb-3 leading-tight drop-shadow-xs">
            Happy Birthday Harshii
          </h1>

          {/* Subtitle: "Today is all about you and your beautiful smile." */}
          <p className="font-cormorant italic text-base sm:text-xl md:text-2xl text-charcoal/90 max-w-xl mx-auto leading-relaxed">
            Today is all about you and your beautiful smile.
          </p>

          {/* Elegant Champagne Divider */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-14 sm:w-20 h-px bg-champagne/60" />
            <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
              <div className="w-0.5 h-0.5 bg-champagne" />
            </div>
            <span className="w-14 sm:w-20 h-px bg-champagne/60" />
          </div>
        </motion.div>
      </header>

      {/* MAIN INTERACTIVE STAGE */}
      <main className="relative z-20 w-full max-w-5xl my-auto flex flex-col items-center justify-center py-4">
        <AnimatePresence mode="wait">
          {!isGameCompleted ? (
            /* STAGE 1: Interactive Balloon Popping Game */
            <motion.div
              key={`balloon-stage-${gameResetKey}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-center"
            >
              <BalloonGame onComplete={handleGameComplete} />
            </motion.div>
          ) : (
            /* STAGE 2: Birthday Cake Reveal & Interactions */
            <motion.div
              key="cake-stage"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center justify-center"
            >
              {/* Central Birthday Cake */}
              <BirthdayCake
                candleBlown={candleBlown}
                onCandleBlown={() => setCandleBlown(true)}
              />

              {/* BUTTONS 1 & 2: THANK YOU AND NEXT BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md px-4"
              >
                {/* Button 1: "THANK YOU" */}
                <motion.button
                  onClick={() => setIsThankYouOpen(true)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-xl bg-ivory text-wine border-2 border-champagne shadow-sm hover:shadow-md hover:border-wine transition-all flex items-center justify-center gap-2.5 font-cinzel text-xs sm:text-sm tracking-[0.24em] font-semibold uppercase"
                >
                  <Heart className="w-4 h-4 text-champagne" />
                  <span>THANK YOU</span>
                </motion.button>

                {/* Button 2: "NEXT" */}
                <motion.button
                  onClick={handleNextSection}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-xl bg-wine text-ivory border-2 border-champagne shadow-[0_6px_20px_rgba(84,45,56,0.25)] hover:shadow-[0_10px_28px_rgba(84,45,56,0.35)] transition-all flex items-center justify-center gap-2.5 font-cinzel text-xs sm:text-sm tracking-[0.24em] font-semibold uppercase group"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-4 h-4 text-champagne group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Replay Option */}
              <div className="mt-5">
                <button
                  onClick={handleReplayBalloons}
                  className="inline-flex items-center gap-1.5 text-charcoal/60 hover:text-wine font-cinzel text-[11px] tracking-wider transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-champagne" />
                  <span>Replay Balloons</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-20 w-full max-w-4xl text-center pt-2 pb-3 border-t border-champagne/25 flex flex-col sm:flex-row items-center justify-between px-4 text-charcoal/70 text-xs gap-2">
        <button
          onClick={() => navigate('/invitation')}
          className="inline-flex items-center gap-1.5 font-cinzel text-[11px] tracking-wider text-muted-rose hover:text-wine transition-colors"
        >
          <ArrowLeft className="w-3 h-3 text-champagne" />
          <span>Return to Invitation</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-muted-rose text-[10px] tracking-[0.22em] font-cinzel uppercase">
          <span>Harshii’s Special Day</span>
          <span>•</span>
          <span>A Beautiful Soul</span>
        </div>

        <button
          onClick={handleNextSection}
          className="inline-flex items-center gap-1.5 font-cinzel text-[11px] tracking-wider text-wine hover:text-muted-rose font-semibold transition-colors"
        >
          <span>Explore Story</span>
          <ArrowRight className="w-3 h-3 text-champagne" />
        </button>
      </footer>

      {/* THANK YOU MODAL POPUP */}
      <BirthdayMessage
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />

    </div>
  );
}

