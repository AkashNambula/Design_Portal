import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, CheckCircle2 } from 'lucide-react';

export default function BirthdayCake({ onCandleBlown, candleBlown = false }) {
  const [isBlown, setIsBlown] = useState(candleBlown);
  const [isHovered, setIsHovered] = useState(false);

  const handleBlowCandle = () => {
    if (isBlown) return;
    setIsBlown(true);
    if (onCandleBlown) {
      onCandleBlown();
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center select-none py-4">
      {/* Interactive Birthday Cake Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Soft Ambient Glow Behind Cake */}
        <div 
          className="absolute -top-10 w-72 h-72 sm:w-88 sm:h-88 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: '#C7A879' }}
        />

        {/* SVG ILLUSTRATION OF THE BIRTHDAY CAKE */}
        <div className="relative w-72 sm:w-84 md:w-96 max-w-full">
          <svg
            viewBox="0 0 540 520"
            className="w-full h-auto drop-shadow-md overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient for soft flame aura */}
              <radialGradient id="flameAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C7A879" stopOpacity="0.75" />
                <stop offset="45%" stopColor="#F8F3EF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C7A879" stopOpacity="0" />
              </radialGradient>

              {/* Flame body warm vertical gradient */}
              <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#F8F3EF" />
                <stop offset="30%" stopColor="#C7A879" />
                <stop offset="75%" stopColor="#A66C70" />
                <stop offset="100%" stopColor="#542D38" />
              </linearGradient>

              {/* Tier shading gradient: Ivory base with subtle Dusty Rose depth at edges */}
              <linearGradient id="cakeIvoryShade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E8D5D0" stopOpacity="0.7" />
                <stop offset="15%" stopColor="#F8F3EF" />
                <stop offset="85%" stopColor="#F8F3EF" />
                <stop offset="100%" stopColor="#E8D5D0" stopOpacity="0.7" />
              </linearGradient>

              {/* Cake Stand Metallic Champagne Gradient */}
              <linearGradient id="champagneGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C7A879" />
                <stop offset="40%" stopColor="#F8F3EF" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#C7A879" />
                <stop offset="100%" stopColor="#A66C70" stopOpacity="0.6" />
              </linearGradient>

              {/* Candle Diagonal Striping Pattern */}
              <pattern id="candleStripePattern" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="10" stroke="#C7A879" strokeWidth="5" />
                <line x1="5" y1="0" x2="5" y2="10" stroke="#F8F3EF" strokeWidth="5" />
              </pattern>
            </defs>

            {/* 1. CAKE STAND / PEDESTAL */}
            {/* Stand Base */}
            <ellipse cx="270" cy="485" rx="115" ry="16" fill="url(#champagneGold)" stroke="#C7A879" strokeWidth="1.5" />
            <ellipse cx="270" cy="483" rx="95" ry="11" fill="#C7A879" opacity="0.6" />

            {/* Stand Stem */}
            <path
              d="M 252,483 C 252,462 262,448 262,440 L 278,440 C 278,448 288,462 288,483 Z"
              fill="url(#champagneGold)"
              stroke="#C7A879"
              strokeWidth="1.2"
            />
            {/* Decorative stem ring */}
            <rect x="256" y="456" width="28" height="6" rx="3" fill="#F8F3EF" stroke="#C7A879" strokeWidth="1" />

            {/* Platter Plate */}
            <ellipse cx="270" cy="430" rx="195" ry="24" fill="url(#cakeIvoryShade)" stroke="#C7A879" strokeWidth="2.5" />
            <ellipse cx="270" cy="428" rx="180" ry="20" fill="#F8F3EF" stroke="#C7A879" strokeWidth="1" opacity="0.7" />

            {/* Platter Scalloped Champagne Pearl Rim */}
            {Array.from({ length: 27 }).map((_, i) => {
              const angle = ((i + 1) / 28) * Math.PI;
              const px = 270 - Math.cos(angle) * 190;
              const py = 432 + Math.sin(angle) * 20;
              return (
                <circle
                  key={`stand-pearl-${i}`}
                  cx={px}
                  cy={py}
                  r="3"
                  fill="#C7A879"
                  stroke="#F8F3EF"
                  strokeWidth="0.75"
                />
              );
            })}

            {/* 2. LOWER TIER (Base Cake) */}
            {/* Lower Tier Body */}
            <path
              d="M 120,320 C 120,305 420,305 420,320 L 420,410 C 420,428 120,428 120,410 Z"
              fill="url(#cakeIvoryShade)"
              stroke="#C7A879"
              strokeWidth="1.5"
            />

            {/* Lower Tier Top Surface Ellipse */}
            <ellipse cx="270" cy="320" rx="150" ry="18" fill="#F8F3EF" stroke="#C7A879" strokeWidth="1.2" />

            {/* Lower Tier Dusty Rose Swag Drapery */}
            <g stroke="#E8D5D0" strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M 135,335 Q 180,365 225,335" />
              <path d="M 225,335 Q 270,368 315,335" />
              <path d="M 315,335 Q 360,365 405,335" />
            </g>
            {/* Fine Wine-accented secondary swag line */}
            <g stroke="#A66C70" strokeWidth="1.2" fill="none" strokeDasharray="3 3">
              <path d="M 140,342 Q 180,370 220,342" />
              <path d="M 230,342 Q 270,373 310,342" />
              <path d="M 320,342 Q 360,370 400,342" />
            </g>

            {/* Champagne Pearls at Swag Junctions */}
            <circle cx="135" cy="335" r="4.5" fill="#C7A879" stroke="#F8F3EF" strokeWidth="1" />
            <circle cx="225" cy="335" r="4.5" fill="#C7A879" stroke="#F8F3EF" strokeWidth="1" />
            <circle cx="315" cy="335" r="4.5" fill="#C7A879" stroke="#F8F3EF" strokeWidth="1" />
            <circle cx="405" cy="335" r="4.5" fill="#C7A879" stroke="#F8F3EF" strokeWidth="1" />

            {/* Center Filigree Ornament on Bottom Tier */}
            <path
              d="M 255,395 C 262,388 270,388 270,384 C 270,388 278,388 285,395 M 270,384 L 270,402"
              stroke="#542D38"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="270" cy="382" r="2" fill="#C7A879" />

            {/* Lower Tier Base Pearl Piping */}
            {Array.from({ length: 23 }).map((_, i) => {
              const angle = ((i + 1) / 24) * Math.PI;
              const px = 270 - Math.cos(angle) * 148;
              const py = 412 + Math.sin(angle) * 14;
              const isChampagne = i % 2 === 0;
              return (
                <circle
                  key={`lower-pearl-${i}`}
                  cx={px}
                  cy={py}
                  r="3.5"
                  fill={isChampagne ? '#C7A879' : '#E8D5D0'}
                  stroke="#542D38"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* 3. UPPER TIER (Top Cake) */}
            {/* Upper Tier Body */}
            <path
              d="M 170,222 C 170,208 370,208 370,222 L 370,300 C 370,314 170,314 170,300 Z"
              fill="url(#cakeIvoryShade)"
              stroke="#C7A879"
              strokeWidth="1.5"
            />

            {/* Upper Tier Top Surface Ellipse */}
            <ellipse cx="270" cy="222" rx="100" ry="14" fill="#F8F3EF" stroke="#C7A879" strokeWidth="1.2" />

            {/* Top Tier Dusty Rose Icing Trim */}
            <path
              d="M 170,224 C 185,232 205,232 220,226 C 235,232 255,232 270,226 C 285,232 305,232 320,226 C 335,232 355,232 370,224"
              stroke="#E8D5D0"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Upper Tier Base Pearl Piping */}
            {Array.from({ length: 17 }).map((_, i) => {
              const angle = ((i + 1) / 18) * Math.PI;
              const px = 270 - Math.cos(angle) * 98;
              const py = 301 + Math.sin(angle) * 11;
              return (
                <circle
                  key={`upper-pearl-${i}`}
                  cx={px}
                  cy={py}
                  r="3"
                  fill="#C7A879"
                  stroke="#F8F3EF"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* ========================================================= */}
            {/* IMPORTANT REQUIRED CAKE TEXT: "Happy Bday Harshi"           */}
            {/* ========================================================= */}
            {/* Decorative filigree above text */}
            <path
              d="M 215,248 Q 242,242 270,248 Q 298,242 325,248"
              stroke="#C7A879"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <polygon points="270,244 273,248 270,252 267,248" fill="#C7A879" />

            {/* The Cake Inscription */}
            <text
              x="270"
              y="268"
              textAnchor="middle"
              fill="#542D38"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Happy Bday Harshi
            </text>

            {/* Decorative filigree below text */}
            <path
              d="M 220,281 Q 245,286 270,281 Q 295,286 320,281"
              stroke="#C7A879"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <polygon points="270,278 273,281 270,284 267,281" fill="#C7A879" />

            {/* 4. TOP ROSETTES */}
            {[-60, -30, 0, 30, 60].map((offset, i) => (
              <g key={`rosette-${i}`} transform={`translate(${270 + offset}, 221)`}>
                <circle cx="0" cy="0" r="5" fill="#E8D5D0" stroke="#C7A879" strokeWidth="0.75" />
                <circle cx="0" cy="0" r="2" fill="#F8F3EF" />
              </g>
            ))}

            {/* 5. THE CANDLE (Interactive click zone) */}
            <g
              onClick={handleBlowCandle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={!isBlown ? "cursor-pointer group" : ""}
              tabIndex={!isBlown ? 0 : -1}
              role={!isBlown ? "button" : undefined}
              aria-label={!isBlown ? "Blow out birthday candle" : "Birthday candle"}
              onKeyDown={(e) => {
                if (!isBlown && (e.key === 'Enter' || e.key === ' ')) {
                  handleBlowCandle();
                }
              }}
            >
              {/* Invisible extended hit area for easy clicking */}
              {!isBlown && (
                <rect
                  x="235"
                  y="50"
                  width="70"
                  height="180"
                  fill="transparent"
                  className="cursor-pointer"
                />
              )}

              {/* Candle Stand / Base Ring */}
              <ellipse cx="270" cy="222" rx="10" ry="4" fill="#542D38" />

              {/* Candle Body */}
              <rect
                x="263"
                y="160"
                width="14"
                height="62"
                rx="3"
                fill="url(#candleStripePattern)"
                stroke="#C7A879"
                strokeWidth="1.2"
              />

              {/* Candle Top Cup */}
              <ellipse cx="270" cy="160" rx="7" ry="2.5" fill="#F8F3EF" stroke="#C7A879" strokeWidth="0.75" />

              {/* Candle Wick */}
              <path
                d="M 270,160 Q 268,154 270,148"
                stroke="#292326"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* FLAME OR SMOKE */}
              {!isBlown ? (
                /* Glowing realistic animated flame */
                <g className="animate-flame">
                  {/* Outer pulsating radial glow */}
                  <circle cx="270" cy="126" r="38" fill="url(#flameAura)" />

                  {/* Outer Teardrop Flame */}
                  <path
                    d="M 270,98 C 256,122 256,140 270,148 C 284,140 284,122 270,98 Z"
                    fill="url(#flameGrad)"
                    stroke="#C7A879"
                    strokeWidth="0.75"
                  />

                  {/* Inner Bright Flame Core */}
                  <path
                    d="M 270,114 C 263,128 263,139 270,144 C 277,139 277,128 270,114 Z"
                    fill="#F8F3EF"
                    opacity="0.9"
                  />

                  {/* Extra micro sparkle near tip */}
                  <polygon
                    points="270,92 271.5,95 274.5,96.5 271.5,98 270,101 268.5,98 265.5,96.5 268.5,95"
                    fill="#C7A879"
                  />
                </g>
              ) : (
                /* Realistic curling smoke wisps after candle is extinguished */
                <g>
                  {/* Smoke wisp 1 */}
                  <path
                    d="M 270,148 Q 260,126 272,106 T 263,72"
                    stroke="#A66C70"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 3"
                    strokeLinecap="round"
                    className="animate-smoke-wisp"
                  />
                  {/* Smoke wisp 2 */}
                  <path
                    d="M 270,148 Q 278,124 266,100 T 275,68"
                    stroke="#C7A879"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    className="animate-smoke-wisp"
                    style={{ animationDelay: '0.2s' }}
                  />
                  {/* Dissipated smoke core */}
                  <circle cx="270" cy="146" r="3" fill="#A66C70" opacity="0.4" />
                </g>
              )}
            </g>
          </svg>
        </div>

        {/* CANDLE INTERACTION & INSTRUCTIONS SECTION */}
        <div className="mt-5 text-center flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isBlown ? (
              <motion.div
                key="candle-burning"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Candle Instruction Text */}
                <p className="font-montserrat text-xs sm:text-sm text-charcoal/85 tracking-wide max-w-xs sm:max-w-md">
                  Make a birthday wish and blow out the candle.
                </p>

                {/* Clickable Action Button for Mobile & Desktop convenience */}
                <motion.button
                  onClick={handleBlowCandle}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-ivory text-wine border border-champagne hover:border-wine shadow-xs hover:shadow-sm transition-all"
                  title="Blow out candle"
                >
                  <Wind className="w-3.5 h-3.5 text-champagne group-hover:text-wine transition-colors" />
                  <span className="font-cinzel text-xs tracking-[0.2em] font-semibold uppercase">
                    BLOW OUT CANDLE
                  </span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="candle-extinguished"
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-2"
              >
                {/* Extinguished Affirmation Message */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-dusty-rose/40 border border-champagne/70 shadow-xs">
                  <Sparkles className="w-4 h-4 text-champagne" />
                  <span className="font-cormorant italic text-base sm:text-lg text-wine font-medium">
                    May all your wishes come true, Harshii.
                  </span>
                  <Sparkles className="w-4 h-4 text-champagne" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

