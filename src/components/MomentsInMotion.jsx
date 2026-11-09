import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motionPhotos } from '../data/photosData';
import EditorialImage from './EditorialImage';
import PhotoLightbox from './PhotoLightbox';

export default function MomentsInMotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const intervalDuration = 4500; // 4.5 seconds

  const currentPhoto = motionPhotos[currentIndex] || motionPhotos[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === motionPhotos.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? motionPhotos.length - 1 : prev - 1));
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Slideshow auto-advance timer
  useEffect(() => {
    if (!isPlaying || motionPhotos.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [isPlaying, handleNext, motionPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isLightboxOpen]);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh]">
      {/* Section Header (Matching Quiz Style) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 select-none">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow: Muted Rose */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
            Cinematic Photography
          </span>
          {/* Heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            Moments in Motion
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            Some moments are too beautiful to remain still.
          </p>
        </motion.div>

        {/* Decorative Champagne underline */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-px bg-champagne/60" />
          <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-champagne" />
          </div>
          <span className="w-16 h-px bg-champagne/60" />
        </div>
      </div>

      {/* Main Cinematic Presentation Card: Dusty Rose (#E8D5D0) matching Quiz Card style */}
      <div className="relative max-w-2xl mx-auto select-none">
        <div className="relative bg-dusty-rose/40 rounded-3xl border border-champagne/50 p-5 sm:p-7 md:p-8 shadow-sm">
          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

          {/* Top Status & Counter Bar */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.22em] text-wine uppercase font-semibold">
                Featured Cinematic Moment
              </span>
            </div>

            {/* Counter (01 / 01) in Wine & Champagne */}
            <div className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-charcoal/70 font-semibold">
              <span className="text-wine font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-champagne mx-2">/</span>
              <span>{String(motionPhotos.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Large Featured Photograph Frame with Tailored Aspect Ratio */}
          <div className={`relative rounded-2xl overflow-hidden ${currentPhoto?.aspectRatio || 'aspect-[4/5]'} bg-ivory border-2 border-champagne/60 shadow-md`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full h-full relative cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <EditorialImage
                  photo={currentPhoto}
                  aspectRatio="w-full h-full"
                  className="rounded-none border-0"
                  overlay={false}
                />

                {/* Subtle dark gradient overlay at bottom for caption legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent pointer-events-none" />

                {/* In-photo Caption Bar */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
                  <div>
                    <h3 className="font-cormorant text-2xl sm:text-3xl text-ivory font-normal leading-tight drop-shadow-sm">
                      {currentPhoto.title}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-dusty-rose mt-1">
                      {currentPhoto.caption}
                    </p>
                  </div>
                  {currentPhoto.date && (
                    <div className="self-start sm:self-auto font-cinzel text-[10px] sm:text-xs tracking-[0.2em] text-wine bg-ivory font-semibold uppercase px-3.5 py-1 rounded-full border border-champagne shadow-xs">
                      {currentPhoto.date}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation Arrows on the photo (only if multiple photos) */}
            {motionPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-wine text-ivory border border-champagne hover:scale-110 transition-all opacity-85 hover:opacity-100 shadow-md"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5 text-champagne" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-wine text-ivory border border-champagne hover:scale-110 transition-all opacity-85 hover:opacity-100 shadow-md"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5 text-champagne" />
                </button>
              </>
            )}
          </div>

          {/* Controls Bar */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-champagne/30">
            {/* Play/Pause Button: Wine Background with Ivory Text & Champagne Border */}
            <div className="flex items-center gap-3">
              {motionPhotos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={togglePlayPause}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-wine text-ivory border-2 border-champagne hover:bg-[#43232c] transition-all text-xs font-cinzel tracking-[0.2em] uppercase font-bold shadow-sm"
                    title="Spacebar to toggle"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-ivory text-ivory" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-ivory text-ivory" />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                  <span className="hidden sm:inline font-montserrat text-xs text-charcoal/70 tracking-wider">
                    Interval: 4.5s
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                  <span className="font-cinzel text-xs tracking-wider text-wine font-semibold uppercase">
                    Featured Cinematic Capture
                  </span>
                </div>
              )}
            </div>

            {/* Pagination Indicators in Wine & Champagne */}
            {motionPhotos.length > 1 && (
              <div className="flex items-center gap-2">
                {motionPhotos.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? 'w-7 sm:w-8 h-1.5 bg-wine'
                        : 'w-2 h-1.5 bg-champagne/60 hover:bg-champagne'
                    }`}
                    title={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Fullscreen Lightbox Button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ivory text-wine border border-champagne/70 hover:bg-dusty-rose/40 transition-all text-xs font-cinzel tracking-[0.18em] uppercase font-semibold shadow-xs"
              title="Fullscreen Mode"
            >
              <Maximize2 className="w-3.5 h-3.5 text-wine" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>

          {/* Interactive Thumbnail Ribbon in Ivory & Champagne (if multiple) */}
          {motionPhotos.length > 1 && (
            <div className="mt-5 pt-4 border-t border-champagne/25">
              <span className="block font-cinzel text-[10px] tracking-[0.2em] text-muted-rose uppercase mb-3 text-center sm:text-left font-bold">
                Quick Gallery Preview
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {motionPhotos.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all p-0.5 ${
                      idx === currentIndex
                        ? 'border-champagne bg-ivory scale-105 shadow-[0_4px_12px_rgba(199,168,121,0.4)]'
                        : 'border-champagne/40 bg-ivory/60 opacity-70 hover:opacity-100 hover:border-champagne'
                    }`}
                  >
                    <EditorialImage
                      photo={item}
                      aspectRatio="aspect-[4/3]"
                      showPlaceholderInfo={false}
                      overlay={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        photos={motionPhotos}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
