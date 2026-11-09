import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function EditorialImage({
  photo,
  className = '',
  aspectRatio,
  onClick,
  showPlaceholderInfo = true,
  overlay = true,
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasValidPath = Boolean(photo?.imagePath);
  const positionClass = photo?.objectPosition || 'object-center';
  const effectiveAspectRatio = photo?.aspectRatio || aspectRatio || 'aspect-[4/3]';

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl bg-dusty-rose/20 border border-champagne/40 transition-all duration-500 ${
        onClick ? 'cursor-pointer hover:border-champagne hover:shadow-[0_12px_32px_rgba(199,168,121,0.25)]' : ''
      } ${effectiveAspectRatio} ${className}`}
    >
      {/* Decorative inner frame */}
      <div className="absolute inset-2 border border-champagne/25 rounded-lg pointer-events-none z-10" />

      {/* Decorative corners */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-champagne/70 z-10 pointer-events-none" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-champagne/70 z-10 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-champagne/70 z-10 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-champagne/70 z-10 pointer-events-none" />

      {/* Actual Image if available */}
      {hasValidPath && !imageError && (
        <img
          src={photo.imagePath}
          alt={photo.altText || photo.title || 'Photograph'}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover ${positionClass} transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Editorial Luxury Fallback Placeholder (when image is not yet uploaded) */}
      {(!hasValidPath || imageError || !imageLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-dusty-rose/30 via-ivory to-dusty-rose/20 select-none">
          {/* Subtle champagne radial glow */}
          <div className="absolute inset-0 bg-radial-champagne opacity-10 pointer-events-none" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-full border border-champagne/50 bg-ivory flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Camera className="w-5 h-5 text-wine stroke-[1.5]" />
          </div>

          {/* Title or Memory Tag */}
          <span className="font-cinzel text-xs tracking-[0.22em] text-wine uppercase font-semibold">
            {photo?.title || '[Photo Placeholder]'}
          </span>

          {/* Caption / Helper Info */}
          {showPlaceholderInfo && (
            <p className="font-montserrat text-[11px] text-charcoal/80 tracking-wide mt-1.5 max-w-[220px] line-clamp-2">
              {photo?.caption || 'Photo slot prepared for your memory'}
            </p>
          )}

          {/* Image path hint */}
          <div className="mt-3 px-2.5 py-1 rounded-md border border-champagne/30 bg-white/70 text-[9px] font-montserrat text-muted-rose tracking-wider">
            {photo?.imagePath || '/images/[filename].jpg'}
          </div>
        </div>
      )}

      {/* Hover overlay hint */}
      {overlay && onClick && (
        <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-ivory/95 border border-champagne text-wine font-cinzel text-[10px] tracking-[0.2em] uppercase font-semibold shadow-md">
            View Photo
          </div>
        </div>
      )}
    </div>
  );
}

