import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { togetherPhotos } from '../data/photosData';
import EditorialImage from './EditorialImage';
import PhotoLightbox from './PhotoLightbox';

export default function WeTogetherSection() {
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
            Shared Chapters
          </span>
          {/* Main Heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            We Together
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            The laughter, the shared horizons, and the quiet magic.
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

      {/* Grid of Together Memories in Dusty Rose Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {togetherPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="flex flex-col bg-dusty-rose/40 p-5 rounded-3xl border border-champagne/50 shadow-sm hover:border-champagne hover:shadow-md transition-all relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-champagne pointer-events-none" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-champagne pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-champagne pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-champagne pointer-events-none" />

            <EditorialImage
              photo={photo}
              aspectRatio={photo.aspectRatio || "aspect-[16/9]"}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="shadow-xs mb-4 rounded-2xl"
            />
            <div className="flex items-center justify-between mb-2">
              <span className="font-cinzel text-xs tracking-[0.2em] text-muted-rose font-bold">
                Chapter 0{idx + 1}
              </span>
              <span className="font-montserrat text-xs text-wine bg-ivory px-3 py-0.5 rounded-full border border-champagne/50 font-semibold shadow-xs">
                {photo.date}
              </span>
            </div>
            {/* Wine typography */}
            <h3 className="font-cormorant text-2xl text-wine font-medium leading-snug">
              {photo.title}
            </h3>
            {/* Charcoal description */}
            <p className="font-montserrat text-xs text-charcoal/85 mt-1.5 leading-relaxed line-clamp-2">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        photos={togetherPhotos}
        currentIndex={selectedPhotoIndex || 0}
        onPrev={() => setSelectedPhotoIndex((p) => (p === 0 ? togetherPhotos.length - 1 : p - 1))}
        onNext={() => setSelectedPhotoIndex((p) => (p === togetherPhotos.length - 1 ? 0 : p + 1))}
      />
    </section>
  );
}
