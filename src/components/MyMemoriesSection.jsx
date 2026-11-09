import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { memoriesPhotos } from '../data/photosData';
import EditorialImage from './EditorialImage';
import PhotoLightbox from './PhotoLightbox';

export default function MyMemoriesSection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh] select-none">
      {/* Header (Matching Quiz Style) */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label: Muted Rose */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
            Curated Retrospective
          </span>
          {/* Main Heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            My Memories
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            A gallery of moments etched in heart and time.
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

      {/* Featured Memory in Dusty Rose Card with Landscape Aspect Ratio */}
      <div className="max-w-2xl mx-auto">
        {memoriesPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="group flex flex-col bg-dusty-rose/40 p-5 sm:p-7 rounded-3xl border border-champagne/50 shadow-sm hover:border-champagne hover:shadow-md transition-all relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-champagne pointer-events-none" />
            <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-champagne pointer-events-none" />

            <EditorialImage
              photo={photo}
              aspectRatio={photo.aspectRatio || "aspect-[16/9]"}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="shadow-xs mb-4 rounded-2xl"
            />
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-cinzel tracking-wider text-muted-rose font-bold uppercase">
                Featured Retrospective
              </span>
              <span className="font-montserrat text-xs text-wine bg-ivory px-3.5 py-0.5 rounded-full border border-champagne/50 font-semibold shadow-xs">
                {photo.date}
              </span>
            </div>
            {/* Wine typography */}
            <h3 className="font-cormorant text-2xl sm:text-3xl text-wine font-medium group-hover:text-muted-rose transition-colors leading-snug">
              {photo.title}
            </h3>
            {/* Charcoal description */}
            <p className="font-montserrat text-sm text-charcoal/85 mt-2 leading-relaxed">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        photos={memoriesPhotos}
        currentIndex={selectedPhotoIndex || 0}
        onPrev={() => setSelectedPhotoIndex((p) => (p === 0 ? memoriesPhotos.length - 1 : p - 1))}
        onNext={() => setSelectedPhotoIndex((p) => (p === memoriesPhotos.length - 1 ? 0 : p + 1))}
      />
    </section>
  );
}
