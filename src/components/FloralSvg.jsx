import React from 'react';
import { motion } from 'framer-motion';

export default function FloralSvg({ className = "w-full h-full" }) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 1) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.12, duration: 2.2, ease: "easeInOut" },
        opacity: { delay: i * 0.12, duration: 0.6 }
      }
    })
  };

  return (
    <div className={`relative flex items-center justify-center p-2 sm:p-4 ${className}`}>
      <motion.svg
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[460px] drop-shadow-sm select-none"
        initial="hidden"
        animate="visible"
      >
        {/* Soft background glow halo */}
        <defs>
          <radialGradient id="champagneGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#C7A879" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#C7A879" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="220" r="140" fill="url(#champagneGlow)" />

        {/* Outer subtle decorative frame arch */}
        <motion.path
          d="M 60,400 C 60,180 80,80 160,80 C 240,80 260,180 260,400"
          stroke="#C7A879"
          strokeWidth="0.75"
          strokeDasharray="4 4"
          custom={0}
          variants={pathVariants}
        />

        {/* Central main stem */}
        <motion.path
          d="M 160,440 Q 155,360 170,280 T 150,140 Q 158,95 160,70"
          stroke="#C7A879"
          strokeWidth="1.6"
          strokeLinecap="round"
          custom={1}
          variants={pathVariants}
        />

        {/* Secondary graceful winding vine */}
        <motion.path
          d="M 160,430 Q 175,340 145,260 Q 170,180 155,100"
          stroke="#E8D5D0"
          strokeWidth="1"
          strokeLinecap="round"
          custom={2}
          variants={pathVariants}
        />

        {/* Top central blossom - Ivory petals with Champagne accents */}
        {/* Petal 1 - Central bloom */}
        <motion.path
          d="M 160,70 C 145,45 130,55 140,75 C 148,90 160,100 160,100 C 160,100 172,90 180,75 C 190,55 175,45 160,70 Z"
          stroke="#F8F3EF"
          strokeWidth="1.25"
          fill="#F8F3EF"
          fillOpacity="0.08"
          strokeLinejoin="round"
          custom={3}
          variants={pathVariants}
        />
        {/* Inner petal folds */}
        <motion.path
          d="M 160,70 C 152,58 150,78 160,88 C 170,78 168,58 160,70 Z"
          stroke="#C7A879"
          strokeWidth="1"
          custom={4}
          variants={pathVariants}
        />
        {/* Upper delicate buds */}
        <motion.path
          d="M 160,70 Q 160,40 164,30"
          stroke="#C7A879"
          strokeWidth="1"
          strokeLinecap="round"
          custom={5}
          variants={pathVariants}
        />
        <motion.circle cx="164" cy="28" r="2.5" stroke="#F8F3EF" strokeWidth="1" fill="#C7A879" fillOpacity="0.4" />
        <motion.circle cx="156" cy="38" r="1.5" stroke="#C7A879" strokeWidth="0.75" />

        {/* Left main flower bloom (around y=190) */}
        <motion.path
          d="M 152,210 C 115,195 100,165 125,150 C 140,140 160,165 152,210 Z"
          stroke="#F8F3EF"
          strokeWidth="1.2"
          fill="#F8F3EF"
          fillOpacity="0.06"
          custom={6}
          variants={pathVariants}
        />
        <motion.path
          d="M 125,150 C 110,135 90,150 102,175 C 110,190 135,198 152,210"
          stroke="#C7A879"
          strokeWidth="1"
          custom={7}
          variants={pathVariants}
        />
        {/* Fine petal veins */}
        <motion.path
          d="M 152,210 Q 130,175 125,150 M 138,185 Q 115,170 105,165"
          stroke="#C7A879"
          strokeWidth="0.75"
          strokeOpacity="0.8"
          custom={8}
          variants={pathVariants}
        />

        {/* Right blooming rose / peony blossom (around y=240) */}
        <motion.path
          d="M 165,250 C 205,235 220,205 195,190 C 180,180 160,205 165,250 Z"
          stroke="#F8F3EF"
          strokeWidth="1.2"
          fill="#F8F3EF"
          fillOpacity="0.06"
          custom={9}
          variants={pathVariants}
        />
        <motion.path
          d="M 195,190 C 210,175 230,190 218,215 C 210,230 185,238 165,250"
          stroke="#C7A879"
          strokeWidth="1"
          custom={10}
          variants={pathVariants}
        />
        <motion.path
          d="M 165,250 Q 190,215 195,190 M 178,225 Q 205,210 215,205"
          stroke="#C7A879"
          strokeWidth="0.75"
          strokeOpacity="0.8"
          custom={11}
          variants={pathVariants}
        />

        {/* Left elegant leaves */}
        <motion.path
          d="M 163,310 C 120,300 100,325 110,345 C 125,355 155,340 163,310 Z"
          stroke="#F8F3EF"
          strokeWidth="1"
          custom={12}
          variants={pathVariants}
        />
        <motion.path
          d="M 163,310 Q 128,328 110,345"
          stroke="#C7A879"
          strokeWidth="0.75"
          custom={13}
          variants={pathVariants}
        />

        {/* Lower Left slender leaf */}
        <motion.path
          d="M 160,370 C 130,375 115,395 125,410 C 140,415 155,395 160,370 Z"
          stroke="#C7A879"
          strokeWidth="1"
          custom={14}
          variants={pathVariants}
        />

        {/* Right delicate leaf sprig */}
        <motion.path
          d="M 165,335 C 195,330 215,348 210,365 C 195,375 175,360 165,335 Z"
          stroke="#F8F3EF"
          strokeWidth="1"
          custom={15}
          variants={pathVariants}
        />
        <motion.path
          d="M 165,335 Q 190,350 210,365"
          stroke="#C7A879"
          strokeWidth="0.75"
          custom={16}
          variants={pathVariants}
        />

        {/* Delicate tendril flourishes and small stardust sparkles */}
        <motion.path
          d="M 155,120 Q 125,115 120,130 Q 115,145 130,145"
          stroke="#C7A879"
          strokeWidth="0.8"
          strokeLinecap="round"
          custom={17}
          variants={pathVariants}
        />
        <motion.path
          d="M 168,160 Q 200,150 205,135 Q 210,120 195,122"
          stroke="#C7A879"
          strokeWidth="0.8"
          strokeLinecap="round"
          custom={18}
          variants={pathVariants}
        />

        {/* Small sparkling champagne stars / diamond accents */}
        <motion.g
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <path d="M 85,120 L 88,128 L 96,131 L 88,134 L 85,142 L 82,134 L 74,131 L 82,128 Z" fill="#C7A879" />
          <path d="M 235,140 L 237,146 L 243,148 L 237,150 L 235,156 L 233,150 L 227,148 L 233,146 Z" fill="#F8F3EF" />
          <path d="M 100,260 L 102,264 L 106,266 L 102,268 L 100,272 L 98,268 L 94,266 L 98,264 Z" fill="#C7A879" opacity="0.85" />
          <path d="M 225,290 L 227,294 L 231,296 L 227,298 L 225,302 L 223,298 L 219,296 L 223,294 Z" fill="#F8F3EF" opacity="0.7" />
        </motion.g>

        {/* Base flourish anchor */}
        <motion.path
          d="M 120,440 Q 160,432 200,440"
          stroke="#C7A879"
          strokeWidth="1.2"
          strokeLinecap="round"
          custom={19}
          variants={pathVariants}
        />
        <motion.circle cx="160" cy="440" r="3" fill="#C7A879" stroke="#F8F3EF" strokeWidth="0.75" />
      </motion.svg>
    </div>
  );
}

