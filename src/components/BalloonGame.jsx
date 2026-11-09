import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BALLOON_DEFINITIONS = [
  { id: 1, color: '#542D38', stroke: '#542D38', floatDelay: 0, floatDuration: 3.8, yOffset: -10, scale: 1.0 },
  { id: 2, color: '#C7A879', stroke: '#C7A879', floatDelay: 0.6, floatDuration: 4.2, yOffset: 12, scale: 1.0 },
  { id: 3, color: '#F8F3EF', stroke: '#C7A879', floatDelay: 1.2, floatDuration: 3.6, yOffset: -14, scale: 1.0 },
  { id: 4, color: '#E8D5D0', stroke: '#C7A879', floatDelay: 0.3, floatDuration: 4.5, yOffset: 14, scale: 1.0 },
  { id: 5, color: '#A66C70', stroke: '#A66C70', floatDelay: 0.9, floatDuration: 4.0, yOffset: -8, scale: 1.0 },
];

export default function BalloonGame({ onComplete }) {
  const [isStarted, setIsStarted] = useState(false);
  const [poppedIds, setPoppedIds] = useState(new Set());
  const [particles, setParticles] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const remainingCount = BALLOON_DEFINITIONS.length - poppedIds.size;

  const handleStartGame = () => {
    setIsStarted(true);
  };

  const handlePop = (id, event) => {
    if (poppedIds.has(id)) return;

    // Calculate click coordinates for particle origin
    const rect = event.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height * 0.35;

    // Generate 12 champagne & ivory particle shapes
    const newParticles = Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 + Math.random() * 15) * (Math.PI / 180);
      const distance = 45 + Math.random() * 40;
      return {
        id: `${id}-${i}-${Date.now()}`,
        startX: originX,
        startY: originY,
        targetX: originX + Math.cos(angle) * distance,
        targetY: originY + Math.sin(angle) * distance,
        color: i % 2 === 0 ? '#C7A879' : '#F8F3EF',
        type: i % 3,
        size: 4 + Math.random() * 4,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles after animation finishes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 700);

    const nextPopped = new Set(poppedIds);
    nextPopped.add(id);
    setPoppedIds(nextPopped);

    // If all 5 balloons popped
    if (nextPopped.size === BALLOON_DEFINITIONS.length) {
      setIsCompleted(true);
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 1200);
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center select-none py-2 sm:py-6">
      
      {/* 1. INITIAL POPUP CARD: "Your Birthday Surprise Is Waiting!" */}
      <AnimatePresence>
        {!isStarted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-ivory rounded-3xl p-6 sm:p-10 border-2 border-champagne/60 shadow-[0_20px_50px_rgba(41,35,38,0.35)] text-center"
            >
              {/* Corner Ornamental Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-champagne pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-champagne pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-champagne pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-champagne pointer-events-none" />

              {/* Top Sparkle Ornament */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-8 h-px bg-champagne/60" />
                <div className="w-2 h-2 rotate-45 bg-champagne" />
                <span className="w-8 h-px bg-champagne/60" />
              </div>

              {/* Popup Title */}
              <h3 className="font-cormorant text-3xl sm:text-4xl text-wine font-semibold mb-3 leading-tight">
                Your Birthday Surprise Is Waiting!
              </h3>

              {/* Popup Message */}
              <p className="font-montserrat text-xs sm:text-sm text-charcoal/85 leading-relaxed max-w-md mx-auto mb-6">
                Hey Harshii! A little surprise is waiting for you. Pop all the balloons to reveal your birthday celebration.
              </p>

              {/* Start Button: "LET'S CELEBRATE" */}
              <motion.button
                onClick={handleStartGame}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 sm:px-10 py-3.5 rounded-xl bg-ivory text-wine border-2 border-champagne shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 font-cinzel text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase flex items-center justify-center gap-2.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-champagne group-hover:bg-wine transition-colors" />
                  LET'S CELEBRATE
                  <span className="w-1.5 h-1.5 rotate-45 bg-champagne group-hover:bg-wine transition-colors" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. GAME PROGRESS & REMAINING COUNTER HEADER */}
      <div className="w-full max-w-2xl text-center mb-6 px-4">
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-muted-rose uppercase font-semibold block mb-1">
          Pop all the balloons!
        </span>

        {/* Dynamic Remaining Counter */}
        <div className="inline-flex items-center justify-center gap-2 py-1 px-4 rounded-full bg-dusty-rose/30 border border-champagne/50 my-1">
          <span className="font-cinzel text-xs sm:text-sm tracking-wider text-wine font-semibold">
            {remainingCount} {remainingCount === 1 ? 'balloon' : 'balloons'} remaining
          </span>
        </div>

        {/* Elegant Champagne Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-dusty-rose/50 rounded-full border border-champagne/40 mx-auto mt-2 overflow-hidden">
          <motion.div
            className="h-full bg-wine rounded-full transition-all duration-300"
            style={{ width: `${((BALLOON_DEFINITIONS.length - remainingCount) / BALLOON_DEFINITIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 3. BALLOON FIELD: 5 FLOATING BALLOONS */}
      <div className="w-full max-w-4xl px-2 sm:px-6">
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-8 py-2 sm:py-6">
          {BALLOON_DEFINITIONS.map((balloon) => {
            const isPopped = poppedIds.has(balloon.id);

            return (
              <div
                key={balloon.id}
                className="relative flex flex-col items-center justify-center min-w-[70px] sm:min-w-[95px] min-h-[220px]"
                style={{
                  transform: `translateY(${balloon.yOffset}px)`,
                }}
              >
                <AnimatePresence>
                  {!isPopped && (
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{
                        scale: balloon.scale,
                        opacity: 1,
                        y: [0, -14, 0],
                        rotate: [-2, 2, -2],
                      }}
                      exit={{
                        scale: 1.25,
                        opacity: 0,
                        transition: { duration: 0.18, ease: 'easeOut' },
                      }}
                      transition={{
                        scale: { duration: 0.35 },
                        opacity: { duration: 0.3 },
                        y: {
                          repeat: Infinity,
                          duration: balloon.floatDuration,
                          ease: 'easeInOut',
                          delay: balloon.floatDelay,
                        },
                        rotate: {
                          repeat: Infinity,
                          duration: balloon.floatDuration * 1.1,
                          ease: 'easeInOut',
                          delay: balloon.floatDelay,
                        },
                      }}
                      onClick={(e) => handlePop(balloon.id, e)}
                      whileHover={{ scale: balloon.scale * 1.08 }}
                      whileTap={{ scale: balloon.scale * 0.94 }}
                      className="cursor-pointer group flex flex-col items-center justify-center relative select-none"
                      role="button"
                      tabIndex={0}
                      aria-label={`Balloon ${balloon.id}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handlePop(balloon.id, e);
                        }
                      }}
                    >
                      {/* SVG BALLOON SHAPE + STRING with Explicit Dimensions & Valid Tailwind Classes */}
                      <svg
                        viewBox="0 0 90 220"
                        width="90"
                        height="220"
                        className="w-20 sm:w-24 md:w-28 h-auto drop-shadow-sm group-hover:drop-shadow-md transition-shadow"
                        style={{ minWidth: '70px', maxWidth: '115px' }}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Balloon Body: realistic teardrop oval */}
                        <path
                          d="M 45,15 C 20,15 10,40 10,65 C 10,95 35,115 45,120 C 55,115 80,95 80,65 C 80,40 70,15 45,15 Z"
                          fill={balloon.color}
                          stroke={balloon.stroke}
                          strokeWidth="1.5"
                        />

                        {/* Top-Left Gloss Highlight for 3D realism */}
                        <ellipse
                          cx="30"
                          cy="45"
                          rx="7"
                          ry="18"
                          fill="#F8F3EF"
                          fillOpacity="0.4"
                          transform="rotate(-28 30 45)"
                        />
                        <circle cx="22" cy="70" r="3" fill="#F8F3EF" fillOpacity="0.3" />

                        {/* Tied Knot at base */}
                        <polygon
                          points="40,119 50,119 53,126 37,126"
                          fill={balloon.color}
                          stroke="#C7A879"
                          strokeWidth="1"
                        />

                        {/* Delicate Champagne bow knot */}
                        <path
                          d="M 42,125 C 34,128 32,135 38,136 C 44,137 45,126 45,126"
                          stroke="#C7A879"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M 48,125 C 56,128 58,135 52,136 C 46,137 45,126 45,126"
                          stroke="#C7A879"
                          strokeWidth="1"
                          fill="none"
                        />

                        {/* Realistic Waving Balloon String */}
                        <path
                          d="M 45,126 Q 35,150 52,175 T 42,215"
                          stroke="#C7A879"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.85"
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. CHAMPAGNE PARTICLES BURST ON POP */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            position: 'fixed',
            left: p.startX,
            top: p.startY,
            opacity: 1,
            scale: 1,
            pointerEvents: 'none',
            zIndex: 60,
          }}
          animate={{
            left: p.targetX,
            top: p.targetY,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {p.type === 0 ? (
            /* Tiny Diamond */
            <svg width={p.size * 2} height={p.size * 2} viewBox="0 0 10 10">
              <polygon points="5,0 10,5 5,10 0,5" fill={p.color} />
            </svg>
          ) : p.type === 1 ? (
            /* Tiny 4-point sparkle star */
            <svg width={p.size * 2} height={p.size * 2} viewBox="0 0 12 12">
              <path d="M 6,0 L 7.5,4.5 L 12,6 L 7.5,7.5 L 6,12 L 4.5,7.5 L 0,6 L 4.5,4.5 Z" fill={p.color} />
            </svg>
          ) : (
            /* Tiny pearl circle */
            <div
              className="rounded-full"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* 5. SUCCESS CELEBRATION MESSAGE ON COMPLETION */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-dusty-rose/40 border border-champagne shadow-sm">
              <Sparkles className="w-4 h-4 text-champagne" />
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-wine font-semibold uppercase">
                All Balloons Popped! Revealing Your Celebration...
              </span>
              <Sparkles className="w-4 h-4 text-champagne" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
