import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';

// SVG Champagne Push Pin / Pin Decoration
function ChampagnePin({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="7" r="4.5" fill="#C7A879" stroke="#542D38" strokeWidth="1.2" />
      <circle cx="10.5" cy="5.5" r="1.5" fill="#F8F3EF" opacity="0.8" />
      <path d="M12 11.5V20" stroke="#292326" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="7" r="2" fill="#542D38" opacity="0.25" />
    </svg>
  );
}

// SVG Washi Tape Component with jagged edges
function PaperTape({ position = 'top-center', className = '' }) {
  const positionClasses = {
    'top-center': '-top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24',
    'top-left': '-top-3 left-4 w-20 sm:w-22 -rotate-12',
    'top-right': '-top-3 right-4 w-20 sm:w-22 rotate-12',
    'diagonal-left': '-top-2 -left-3 w-18 rotate-[-35deg]',
  };

  return (
    <div
      className={`absolute h-4 sm:h-5 z-20 pointer-events-none bg-gradient-to-r from-champagne/45 via-dusty-rose/70 to-champagne/45 border-y border-champagne/50 backdrop-blur-xs shadow-2xs ${
        positionClasses[position] || positionClasses['top-center']
      } ${className}`}
      style={{
        clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)',
      }}
    />
  );
}

export default function PolaroidCard({
  memory,
  index = 0,
  onClick,
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasImage = Boolean(memory.imagePath) && !imageError;
  const rotation = memory.rotation || '0deg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
      whileHover={{
        scale: 1.04,
        rotate: 0,
        zIndex: 25,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      onClick={onClick}
      className="relative group cursor-pointer select-none transition-all duration-300"
      style={{
        transform: `rotate(${rotation})`,
      }}
    >
      {/* Decorative Washi Tape on Top */}
      <PaperTape position={memory.tapeStyle || 'top-center'} />

      {/* Optional Decorative Champagne Push Pin */}
      {memory.pin && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-sm">
          <ChampagnePin className="w-5 h-5" />
        </div>
      )}

      {/* Main Polaroid Frame (Ivory / Pure Photo Paper with realistic borders & shadow) */}
      <div className="relative bg-white rounded-md p-3 sm:p-4 pb-7 sm:pb-9 border border-[#e3dcd0] shadow-[0_12px_28px_rgba(41,35,38,0.12)] group-hover:shadow-[0_20px_45px_rgba(84,45,56,0.22)] transition-shadow duration-300">
        
        {/* Subtle photo frame border */}
        <div className="relative overflow-hidden rounded-xs bg-[#f4eee6] border border-champagne/25 shadow-inner">
          
          {/* Actual Photograph */}
          {hasImage ? (
            <div 
              className={`relative w-full ${memory.aspectRatio || 'aspect-[4/3]'} overflow-hidden bg-[#e8ded1]`}
              style={memory.aspectRatioStyle ? { aspectRatio: memory.aspectRatioStyle } : undefined}
            >
              <img
                src={memory.imagePath}
                alt={memory.altText || memory.title || 'Photograph'}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Quick View Hover Hint */}
              <div className="absolute inset-0 bg-charcoal/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory/95 border border-champagne text-wine font-cinzel text-[10px] tracking-widest uppercase font-semibold shadow-md">
                  <Maximize2 className="w-3 h-3 text-wine" />
                  <span>Enlarge</span>
                </div>
              </div>
            </div>
          ) : (
            /* Elegant Placeholder (when photo is awaiting upload) */
            <div className={`w-full ${memory.aspectRatio || 'aspect-[4/3]'} flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-dusty-rose/40 via-ivory to-dusty-rose/30`}>
              <div className="w-12 h-12 rounded-full border border-champagne/60 bg-ivory flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-wine stroke-[1.5]" />
              </div>
              <span className="font-cinzel text-xs tracking-widest text-wine uppercase font-semibold">
                {memory.title || 'Photo Placeholder'}
              </span>
              <p className="font-montserrat text-[10px] text-charcoal/70 mt-1 max-w-[200px]">
                Slot ready for your special moment
              </p>
            </div>
          )}
        </div>

        {/* Polaroid Lower Margin (Classic Handwritten Marker Area) */}
        <div className="mt-3.5 px-1 flex flex-col">
          {/* Memory Tag & Date Header */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-cinzel text-[10px] tracking-widest text-muted-rose font-bold uppercase">
              Memory {memory.memoryNumber || '•'}
            </span>
            {memory.date && (
              <span className="font-cinzel text-[10px] tracking-wider text-wine bg-dusty-rose/40 px-2 py-0.5 rounded-full border border-champagne/40 font-semibold">
                {memory.date}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-cormorant text-xl text-wine font-semibold leading-tight group-hover:text-muted-rose transition-colors">
            {memory.title}
          </h3>

          {/* Personal Caption in Handwritten Serif */}
          <p className="font-cormorant italic text-sm text-charcoal/85 mt-1 leading-snug">
            "{memory.caption}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

