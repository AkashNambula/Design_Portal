import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ourStoryPhotos } from '../data/photosData';
import EditorialImage from './EditorialImage';
import PhotoLightbox from './PhotoLightbox';

export default function OurStoryTimeline() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? ourStoryPhotos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) =>
      prev === ourStoryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh] select-none">
      {/* Header Section (Matching Quiz Style) */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow: Muted Rose */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
            Chronological Journey
          </span>
          {/* Main Heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            Our Story
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            Every little moment has its own place.
          </p>
        </motion.div>

        {/* Decorative Champagne underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mt-5"
        >
          <span className="w-16 sm:w-24 h-px bg-champagne/60" />
          <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-champagne" />
          </div>
          <span className="w-16 sm:w-24 h-px bg-champagne/60" />
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Connecting Line: Champagne (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-px -translate-x-1/2 bg-champagne/60 pointer-events-none" />

        {/* Left Vertical Connecting Line: Champagne (Mobile) */}
        <div className="md:hidden absolute left-5 sm:left-7 top-4 bottom-8 w-px bg-champagne/60 pointer-events-none" />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {ourStoryPhotos.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                {/* Timeline Center Node (Desktop: Wine circle with Champagne diamond) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-wine border-2 border-champagne flex items-center justify-center shadow-[0_0_12px_rgba(199,168,121,0.35)]">
                    <div className="w-2 h-2 rotate-45 bg-champagne" />
                  </div>
                </div>

                {/* Timeline Left Node (Mobile) */}
                <div className="md:hidden absolute left-5 sm:left-7 top-8 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-wine border-2 border-champagne flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
                  </div>
                </div>

                {/* IMAGE COLUMN: Dusty Rose Frame with Portrait Aspect Ratio */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'
                  }`}
                >
                  <div className="max-w-sm mx-auto p-4 bg-dusty-rose/40 rounded-3xl border border-champagne/50 shadow-sm relative">
                    {/* Corner Accents */}
                    <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-champagne pointer-events-none" />
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-champagne pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-champagne pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-champagne pointer-events-none" />

                    <EditorialImage
                      photo={item}
                      aspectRatio={item.aspectRatio || "aspect-[2/3]"}
                      onClick={() => handleOpenLightbox(index)}
                      className="shadow-xs rounded-2xl"
                    />
                  </div>
                </div>

                {/* TEXT CONTENT COLUMN: Dusty Rose Feature Card (Matching Quiz Card style) */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isEven
                      ? 'md:order-2 md:text-left'
                      : 'md:order-1 md:text-right'
                  }`}
                >
                  <div className="max-w-md mx-auto md:max-w-none p-6 sm:p-8 rounded-3xl bg-dusty-rose/40 border border-champagne/50 shadow-sm space-y-3 relative">
                    {/* Corner Accents */}
                    <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-champagne pointer-events-none" />
                    <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-champagne pointer-events-none" />
                    <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-champagne pointer-events-none" />
                    <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-champagne pointer-events-none" />

                    {/* Header info: Memory Number & Date label in Dusty Rose */}
                    <div
                      className={`flex flex-wrap items-center gap-3 ${
                        isEven ? 'justify-start' : 'md:justify-end justify-start'
                      }`}
                    >
                      {/* Section Label: Muted Rose */}
                      <span className="font-cinzel text-xs tracking-[0.25em] text-muted-rose font-bold uppercase">
                        Memory {item.memoryNumber}
                      </span>
                      <span className="text-champagne">•</span>
                      {/* Date label: Ivory badge with Wine text */}
                      <span className="inline-block px-3.5 py-1 rounded-full bg-ivory text-wine border border-champagne/60 font-montserrat text-xs tracking-wider font-semibold shadow-xs">
                        {item.date}
                      </span>
                    </div>

                    {/* Timeline Heading: Wine */}
                    <h3 className="font-cormorant text-2xl sm:text-3xl text-wine font-medium leading-snug">
                      {item.title}
                    </h3>

                    {/* Description: Charcoal */}
                    <p className="font-montserrat text-sm text-charcoal/85 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Muted Rose & Champagne decorative highlight */}
                    <div
                      className={`pt-2 flex items-center gap-2 ${
                        isEven ? 'justify-start' : 'md:justify-end justify-start'
                      }`}
                    >
                      <span className="w-8 h-px bg-champagne/50" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-muted-rose" />
                      <span className="w-8 h-px bg-champagne/50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for enlarged viewing */}
      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        onClose={handleCloseLightbox}
        photos={ourStoryPhotos}
        currentIndex={selectedPhotoIndex || 0}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
