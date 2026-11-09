import React from 'react';
import { motion } from 'framer-motion';

export default function EnvelopeAnimation({ isOpen, onOpen }) {
  return (
    <div className="relative w-72 sm:w-88 md:w-96 h-48 sm:h-56 mx-auto select-none perspective-[1000px]">
      {/* Outer Envelope Wrapper */}
      <div className="relative w-full h-full">
        
        {/* ENVELOPE BACK (Ivory #F8F3EF with Wine inner liner) */}
        <div className="absolute inset-0 bg-ivory rounded-xl border border-champagne/40 shadow-[0_20px_45px_rgba(41,35,38,0.4)] overflow-hidden">
          {/* Subtle Wine pattern inside envelope liner */}
          <div className="absolute inset-2 bg-wine/90 rounded-lg flex items-center justify-center">
            <div className="w-16 h-16 border border-champagne/30 rotate-45 flex items-center justify-center">
              <span className="font-cinzel text-[10px] tracking-[0.2em] text-champagne">H</span>
            </div>
          </div>
        </div>

        {/* LETTER PEEKING INSIDE (Before Opening & Sliding Out) */}
        <motion.div
          initial={{ y: 0, scale: 0.92, opacity: 0.8 }}
          animate={
            isOpen
              ? { y: -80, scale: 1, opacity: 1, zIndex: 30 }
              : { y: 0, scale: 0.92, opacity: 0.8, zIndex: 5 }
          }
          transition={{ duration: 0.85, delay: isOpen ? 0.35 : 0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-4 top-2 h-44 bg-ivory rounded-lg border border-champagne/50 p-4 shadow-md flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-champagne/30 pb-2">
            <span className="font-cinzel text-[9px] tracking-[0.2em] text-muted-rose uppercase">
              Private Note
            </span>
            <span className="font-cinzel text-[9px] tracking-[0.2em] text-wine font-semibold">
              18 NOV
            </span>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="w-24 h-1.5 bg-wine/20 rounded" />
            <div className="w-36 h-1.5 bg-charcoal/15 rounded" />
            <div className="w-28 h-1.5 bg-charcoal/15 rounded" />
          </div>

          <div className="flex justify-end">
            <span className="font-cormorant italic text-xs text-wine font-medium">
              For Harshii
            </span>
          </div>
        </motion.div>

        {/* ENVELOPE LOWER BODY & POCKET (Folds created with SVG) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 384 224"
            className="w-full h-full drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left triangle fold */}
            <path
              d="M 0,0 L 192,120 L 0,224 Z"
              fill="#F8F3EF"
              stroke="#C7A879"
              strokeWidth="0.75"
            />
            {/* Right triangle fold */}
            <path
              d="M 384,0 L 192,120 L 384,224 Z"
              fill="#F8F3EF"
              stroke="#C7A879"
              strokeWidth="0.75"
            />
            {/* Bottom triangle fold */}
            <path
              d="M 0,224 L 192,110 L 384,224 Z"
              fill="#F8F3EF"
              stroke="#C7A879"
              strokeWidth="1"
            />
            {/* Wine decorative border stitches along bottom */}
            <path
              d="M 12,216 L 192,118 L 372,216"
              stroke="#542D38"
              strokeWidth="0.75"
              strokeDasharray="4 3"
              strokeOpacity="0.4"
            />
          </svg>
        </div>

        {/* TOP FLAP (With 3D Flip Animation) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'top center' }}
          className="absolute inset-x-0 top-0 h-32 z-20"
        >
          <svg
            viewBox="0 0 384 128"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Triangular Flap */}
            <path
              d="M 0,0 L 192,128 L 384,0 Z"
              fill="#F8F3EF"
              stroke="#C7A879"
              strokeWidth="1"
            />
            {/* Wine stitching line */}
            <path
              d="M 16,8 L 192,118 L 368,8"
              stroke="#542D38"
              strokeWidth="0.75"
              strokeDasharray="4 3"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Champagne Decorative Seal on flap vertex */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={onOpen}
              className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-champagne border-2 border-ivory shadow-[0_4px_12px_rgba(84,45,56,0.35)] flex items-center justify-center cursor-pointer z-30"
              title="Click to Open Letter"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-wine/40 flex items-center justify-center">
                <span className="font-cinzel text-xs font-bold text-wine tracking-widest">
                  H
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}

