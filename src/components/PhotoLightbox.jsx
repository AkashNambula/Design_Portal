import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function PhotoLightbox({
  isOpen,
  onClose,
  photos = [],
  currentIndex = 0,
  onPrev,
  onNext,
  renderImageFallback,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || {};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 select-none"
      >
        {/* Subtle decorative champagne border */}
        <div className="absolute inset-3 sm:inset-6 border border-champagne/20 pointer-events-none rounded-2xl" />

        {/* Top Controls Bar */}
        <div className="absolute top-4 sm:top-8 left-6 right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-xs tracking-[0.25em] text-champagne uppercase font-medium">
              Cinematic Lightbox
            </span>
            <span className="text-champagne/40">•</span>
            <span className="font-montserrat text-xs tracking-wider text-dusty-rose">
              {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-wine/80 text-ivory border border-champagne/40 hover:bg-wine hover:border-champagne hover:scale-105 transition-all"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 text-champagne" />
          </button>
        </div>

        {/* Navigation Arrow - Left */}
        {photos.length > 1 && onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-wine/80 text-ivory border border-champagne/40 hover:bg-wine hover:border-champagne hover:scale-110 transition-all"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6 text-champagne" />
          </button>
        )}

        {/* Navigation Arrow - Right */}
        {photos.length > 1 && onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-wine/80 text-ivory border border-champagne/40 hover:bg-wine hover:border-champagne hover:scale-110 transition-all"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6 text-champagne" />
          </button>
        )}

        {/* Main Display Container */}
        <div className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center p-2 sm:p-6 z-10">
          <motion.div
            key={currentPhoto.id || currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full flex flex-col items-center"
          >
            {/* The Image or Fallback */}
            <div className="relative rounded-xl overflow-hidden border border-champagne/40 bg-charcoal/80 shadow-[0_20px_50px_rgba(41,35,38,0.8)] max-h-[65vh] flex items-center justify-center">
              {currentPhoto?.imagePath ? (
                <img
                  src={currentPhoto.imagePath}
                  alt={currentPhoto.altText || currentPhoto.title || 'Photograph'}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
                />
              ) : renderImageFallback ? (
                renderImageFallback(currentPhoto, true)
              ) : (
                <div className="w-full h-80 sm:h-96 md:h-[500px] flex flex-col items-center justify-center p-8 text-center bg-wine">
                  <div className="w-16 h-16 rounded-full border border-champagne/50 flex items-center justify-center mb-4">
                    <Maximize2 className="w-7 h-7 text-champagne" />
                  </div>
                  <h3 className="font-cormorant text-2xl text-ivory font-medium mb-1">
                    {currentPhoto.title || '[Photo Slot]'}
                  </h3>
                  <p className="font-montserrat text-xs text-dusty-rose tracking-wider">
                    {currentPhoto.caption || '[Add your photograph to public/images]'}
                  </p>
                </div>
              )}
            </div>

            {/* Captions and Details below */}
            <div className="mt-4 text-center max-w-2xl px-4">
              {currentPhoto.title && (
                <h4 className="font-cormorant text-xl sm:text-2xl text-ivory font-normal">
                  {currentPhoto.title}
                </h4>
              )}
              {currentPhoto.caption && (
                <p className="font-montserrat text-xs sm:text-sm text-dusty-rose mt-1">
                  {currentPhoto.caption}
                </p>
              )}
              {currentPhoto.date && (
                <span className="inline-block mt-2 font-cinzel text-[10px] tracking-[0.2em] text-champagne uppercase">
                  {currentPhoto.date}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

