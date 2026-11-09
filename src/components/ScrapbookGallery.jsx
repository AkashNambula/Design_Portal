import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Camera, Layers } from 'lucide-react';
import { scrapbookConfig, memoriesList } from '../data/memoriesData';
import MemoryFilters from './MemoryFilters';
import PolaroidCard from './PolaroidCard';
import PhotoLightbox from './PhotoLightbox';

// SVG Decorative Dried Palm / Botanical Branch at Canvas Corner
function ScrapbookFoliage({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 20 Q100 40 190 90"
        stroke="#C7A879"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M40 24 C32 10 52 6 70 12 C64 22 52 26 40 24Z" fill="#E8D5D0" opacity="0.85" />
      <path d="M65 30 C60 14 80 12 95 20 C88 28 78 32 65 30Z" fill="#C7A879" opacity="0.8" />
      <path d="M90 38 C90 20 110 20 122 30 C114 38 102 41 90 38Z" fill="#E8D5D0" opacity="0.85" />
      <path d="M115 48 C120 30 140 30 152 42 C142 50 128 51 115 48Z" fill="#A66C70" opacity="0.75" />
      <path d="M140 60 C150 42 170 44 178 58 C168 64 154 64 140 60Z" fill="#E8D5D0" opacity="0.85" />
      <path d="M165 72 C178 56 195 58 200 72 C190 78 176 76 165 72Z" fill="#C7A879" opacity="0.75" />
    </svg>
  );
}

// Sparkle Star SVG
function ScrapbookStar({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export default function ScrapbookGallery() {
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Filter memories by category
  const filteredMemories = useMemo(() => {
    if (activeCategoryId === 'all') return memoriesList;
    if (activeCategoryId === 'harshii') return memoriesList.filter((m) => m.category === 'Harshii');
    if (activeCategoryId === 'together') return memoriesList.filter((m) => m.category === 'Together');
    if (activeCategoryId === 'special') return memoriesList.filter((m) => m.category === 'Special Moments');
    return memoriesList;
  }, [activeCategoryId]);

  // Calculate memory count per category for filter badges
  const categoryCounts = useMemo(() => {
    return {
      all: memoriesList.length,
      harshii: memoriesList.filter((m) => m.category === 'Harshii').length,
      together: memoriesList.filter((m) => m.category === 'Together').length,
      special: memoriesList.filter((m) => m.category === 'Special Moments').length,
    };
  }, []);

  const handleOpenLightbox = (memoryId) => {
    const idx = filteredMemories.findIndex((m) => m.id === memoryId);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? filteredMemories.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === filteredMemories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-screen select-none">
      
      {/* SECTION HEADER: Editorial Luxury matching Section 1 specifications */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Decorative Label */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-champagne" />
            <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
              {scrapbookConfig.sectionLabel}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          </div>

          {/* Main Heading */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mb-2 leading-tight">
            {scrapbookConfig.mainHeading}
          </h2>

          {/* Subtitle */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            {scrapbookConfig.subtitle}
          </p>
        </motion.div>

        {/* Decorative Champagne Underline */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-px bg-champagne/60" />
          <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-champagne" />
          </div>
          <span className="w-16 h-px bg-champagne/60" />
        </div>

        {/* Category Filters Component */}
        <MemoryFilters
          categories={scrapbookConfig.categories}
          activeCategory={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* SCRAPBOOK CANVAS BOARD (Ivory Paper with Subtle Craft Texture) */}
      <div className="max-w-6xl mx-auto relative bg-[#FAF7F2] rounded-3xl p-5 sm:p-8 md:p-12 border-2 border-champagne/45 shadow-[0_20px_60px_rgba(41,35,38,0.12)] overflow-hidden">
        
        {/* Subtle Paper Craft Texture Grid Pattern using CSS */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#C7A879 0.8px, transparent 0.8px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Subtle Decorative Corners */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-champagne/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-champagne/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-champagne/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-champagne/60 pointer-events-none" />

        {/* Corner Foliage SVG illustration */}
        <div className="absolute top-3 right-8 w-44 sm:w-60 pointer-events-none z-10 opacity-80">
          <ScrapbookFoliage className="w-full h-auto drop-shadow-xs" />
        </div>

        {/* Decorative Sparkle Stars */}
        <ScrapbookStar className="absolute top-12 left-10 w-4 h-4 text-champagne pointer-events-none opacity-70" />
        <ScrapbookStar className="absolute bottom-20 right-14 w-4 h-4 text-champagne pointer-events-none opacity-65" />
        <ScrapbookStar className="absolute top-1/2 left-4 w-3.5 h-3.5 text-champagne pointer-events-none opacity-60" />

        {/* SCRAPBOOK MASONRY / THREE-COLUMN GRID (Desktop 3-cols, Mobile 2/1 cols) */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 lg:gap-10 items-start pt-4 pb-8">
          
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((memory, index) => (
              <PolaroidCard
                key={memory.id}
                memory={memory}
                index={index}
                onClick={() => handleOpenLightbox(memory.id)}
              />
            ))}
          </AnimatePresence>

          {/* Scrapbook Keepsake Sticky Note: "You Are My Best" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: 0 }}
            className="relative self-center justify-self-center max-w-xs w-full p-6 sm:p-7 rounded-2xl bg-[#EED8CC] border border-[#d8beae] shadow-[0_12px_28px_rgba(84,45,56,0.12)] z-15"
            style={{ transform: 'rotate(-2deg)' }}
          >
            {/* Top Washi Tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-gradient-to-r from-dusty-rose/70 via-ivory/80 to-dusty-rose/70 border-y border-champagne/40 z-20 pointer-events-none shadow-2xs"
              style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' }}
            />

            {/* Note Header */}
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-3.5 h-3.5 text-wine fill-wine" />
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-muted-rose uppercase font-bold">
                A PERSONAL NOTE
              </span>
            </div>

            {/* Handwritten Script Title */}
            <h3 className="font-script text-4xl sm:text-5xl text-wine font-normal leading-tight">
              You Are My Best
            </h3>

            {/* Note Body */}
            <div className="mt-3 pt-2 border-t border-wine/20 space-y-2">
              <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/90 leading-snug">
                "Some days are special, and some people make every single day special."
              </p>
              <div className="pt-2 flex items-center justify-between text-xs border-t border-wine/15">
                <span className="font-cinzel text-[10px] text-wine font-semibold">18 NOVEMBER</span>
                <span className="font-script text-xl text-wine">Forever Yours</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* SCRAPBOOK FOOTER STATUS */}
        <div className="mt-6 pt-6 border-t border-champagne/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <Camera className="w-4 h-4 text-wine" />
            <span className="font-cinzel text-xs tracking-wider text-charcoal/80 font-medium">
              Displaying {filteredMemories.length} of {memoriesList.length} Photographs
            </span>
          </div>

          <span className="font-cinzel text-xs tracking-[0.2em] text-muted-rose uppercase font-bold">
            Harshii's Birthday Celebration • 18 November
          </span>
        </div>

      </div>

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL WITH KEYBOARD NAVIGATION */}
      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        onClose={handleCloseLightbox}
        photos={filteredMemories}
        currentIndex={selectedPhotoIndex || 0}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

    </section>
  );
}

