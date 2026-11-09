import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricPattern({ className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center p-2 sm:p-4 ${className}`}>
      <motion.svg
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[460px] drop-shadow-sm select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
      >
        <defs>
          <radialGradient id="dustyRoseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8D5D0" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#E8D5D0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient subtle glow */}
        <circle cx="160" cy="240" r="140" fill="url(#dustyRoseGlow)" />

        {/* Outer decorative arched diamond frame */}
        <motion.path
          d="M 160,25 L 285,240 L 160,455 L 35,240 Z"
          stroke="#E8D5D0"
          strokeWidth="1"
          strokeDasharray="6 4"
          animate={{ strokeOpacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary nested diamond */}
        <motion.path
          d="M 160,50 L 265,240 L 160,430 L 55,240 Z"
          stroke="#F8F3EF"
          strokeWidth="1.2"
          fill="#F8F3EF"
          fillOpacity="0.02"
        />

        {/* Third inner diamond */}
        <motion.path
          d="M 160,75 L 245,240 L 160,405 L 75,240 Z"
          stroke="#E8D5D0"
          strokeWidth="0.8"
        />

        {/* Intricate Sacred Diamond Trellis (Symmetrical cross-lines) */}
        {/* Diagonal lattice set 1 */}
        <g stroke="#E8D5D0" strokeWidth="0.75" strokeOpacity="0.7">
          <line x1="160" y1="50" x2="210" y2="430" />
          <line x1="160" y1="50" x2="110" y2="430" />
          <line x1="160" y1="430" x2="210" y2="50" />
          <line x1="160" y1="430" x2="110" y2="50" />

          <line x1="55" y1="240" x2="265" y2="240" strokeDasharray="3 3" />
          <line x1="160" y1="50" x2="160" y2="430" strokeDasharray="3 3" />
        </g>

        {/* Center Diamond Focal Cluster with gentle breathing motion */}
        <motion.g
          animate={{ scale: [1, 1.04, 1], rotate: [0, 0.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "160px 240px" }}
        >
          {/* Main central medallion diamond */}
          <polygon
            points="160,140 220,240 160,340 100,240"
            stroke="#F8F3EF"
            strokeWidth="1.5"
            fill="#E8D5D0"
            fillOpacity="0.08"
          />

          <polygon
            points="160,165 202,240 160,315 118,240"
            stroke="#E8D5D0"
            strokeWidth="1"
          />

          <polygon
            points="160,190 185,240 160,290 135,240"
            stroke="#F8F3EF"
            strokeWidth="1.2"
            fill="#F8F3EF"
            fillOpacity="0.1"
          />

          <polygon
            points="160,215 172,240 160,265 148,240"
            stroke="#E8D5D0"
            strokeWidth="1"
            fill="#E8D5D0"
            fillOpacity="0.25"
          />

          {/* Center pinpoint */}
          <circle cx="160" cy="240" r="2.5" fill="#F8F3EF" />
        </motion.g>

        {/* Surrounding floating satellite diamonds */}
        {/* Top satellite diamond */}
        <g>
          <polygon points="160,85 175,105 160,125 145,105" stroke="#F8F3EF" strokeWidth="1" fill="#F8F3EF" fillOpacity="0.05" />
          <circle cx="160" cy="105" r="1.5" fill="#E8D5D0" />
        </g>

        {/* Bottom satellite diamond */}
        <g>
          <polygon points="160,355 175,375 160,395 145,375" stroke="#F8F3EF" strokeWidth="1" fill="#F8F3EF" fillOpacity="0.05" />
          <circle cx="160" cy="375" r="1.5" fill="#E8D5D0" />
        </g>

        {/* Left satellite diamond */}
        <g>
          <polygon points="80,240 95,225 110,240 95,255" stroke="#E8D5D0" strokeWidth="1" fill="#E8D5D0" fillOpacity="0.06" />
          <circle cx="95" cy="240" r="1.5" fill="#F8F3EF" />
        </g>

        {/* Right satellite diamond */}
        <g>
          <polygon points="210,240 225,225 240,240 225,255" stroke="#E8D5D0" strokeWidth="1" fill="#E8D5D0" fillOpacity="0.06" />
          <circle cx="225" cy="240" r="1.5" fill="#F8F3EF" />
        </g>

        {/* Delicate decorative finials at vertices */}
        <motion.g
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top finial */}
          <circle cx="160" cy="25" r="3" fill="#F8F3EF" stroke="#E8D5D0" strokeWidth="0.8" />
          {/* Bottom finial */}
          <circle cx="160" cy="455" r="3" fill="#F8F3EF" stroke="#E8D5D0" strokeWidth="0.8" />
          {/* Left finial */}
          <circle cx="35" cy="240" r="3" fill="#F8F3EF" stroke="#E8D5D0" strokeWidth="0.8" />
          {/* Right finial */}
          <circle cx="285" cy="240" r="3" fill="#F8F3EF" stroke="#E8D5D0" strokeWidth="0.8" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

