import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutPhotos } from '../data/photosData';
import EditorialImage from './EditorialImage';
import PhotoLightbox from './PhotoLightbox';

export default function AboutSection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh] select-none">
      {/* Header (Matching Quiz Style) */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label: Muted Rose */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
            A Special Tribute
          </span>
          {/* Main heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            About Harshii
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            A celebration of grace, warmth and effortless elegance.
          </p>
        </motion.div>

        {/* Decorative Champagne divider */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-px bg-champagne/60" />
          <div className="w-2 h-2 rotate-45 border border-champagne bg-ivory flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-champagne" />
          </div>
          <span className="w-16 h-px bg-champagne/60" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Featured Editorial Portrait in Dusty Rose Frame */}
        <div className="md:col-span-5 max-w-sm mx-auto w-full">
          {aboutPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-4 bg-dusty-rose/40 rounded-3xl border border-champagne/50 shadow-sm relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-champagne pointer-events-none" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-champagne pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-champagne pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-champagne pointer-events-none" />

              <EditorialImage
                photo={photo}
                aspectRatio={photo.aspectRatio || "aspect-[3/4]"}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="shadow-xs rounded-2xl"
              />

              <div className="mt-4 px-2 flex items-center justify-between">
                <span className="font-cinzel text-xs tracking-[0.2em] text-muted-rose font-bold uppercase">
                  {photo.title}
                </span>
                <span className="font-montserrat text-xs text-wine bg-ivory px-3 py-0.5 rounded-full border border-champagne/50 font-semibold shadow-xs">
                  {photo.date}
                </span>
              </div>
              <p className="font-montserrat text-xs text-charcoal/80 mt-2 px-2 leading-relaxed">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Editorial Feature Card in Dusty Rose (#E8D5D0) matching Quiz Card style */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-dusty-rose/40 border border-champagne/50 shadow-sm relative">
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

            {/* Label: Muted Rose */}
            <span className="font-cinzel text-xs tracking-[0.25em] text-muted-rose uppercase font-semibold">
              The Essence of Today
            </span>

            {/* Heading: Wine */}
            <h3 className="font-cormorant text-2xl sm:text-3xl text-wine font-medium mt-2 mb-4 leading-snug">
              Someone Who Makes Every Day Brighter
            </h3>

            {/* Quote: Wine / Charcoal */}
            <p className="font-cormorant italic text-lg sm:text-xl text-wine/90 leading-relaxed mb-4">
              "Some people bring a light so bright into the world that even the ordinary moments turn into pure poetry."
            </p>

            {/* Description: Charcoal */}
            <p className="font-montserrat text-sm text-charcoal/85 leading-relaxed">
              This space was created to honor you on your birthday—a curated tapestry of shared memories, cinematic moments, and timeless feelings. May this celebration remind you of just how deeply appreciated and celebrated you are today and always.
            </p>

            {/* Footer detail */}
            <div className="mt-8 pt-5 border-t border-champagne/30 flex items-center justify-between">
              <span className="font-cinzel text-xs tracking-[0.2em] text-wine bg-ivory px-3.5 py-1 rounded-full border border-champagne/60 font-semibold shadow-xs">
                18 November
              </span>
              <span className="font-cormorant italic text-sm text-charcoal/70">
                With all my love
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        photos={aboutPhotos}
        currentIndex={selectedPhotoIndex || 0}
        onPrev={() => setSelectedPhotoIndex((p) => (p === 0 ? aboutPhotos.length - 1 : p - 1))}
        onNext={() => setSelectedPhotoIndex((p) => (p === aboutPhotos.length - 1 ? 0 : p + 1))}
      />
    </section>
  );
}
