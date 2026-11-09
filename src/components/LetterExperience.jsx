import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { letterConfig } from '../data/letterData';
import EnvelopeAnimation from './EnvelopeAnimation';

export default function LetterExperience() {
  // States: 'closed' | 'opening' | 'unfolded'
  const [letterState, setLetterState] = useState('closed');

  const handleOpenLetter = () => {
    setLetterState('opening');
    setTimeout(() => {
      setLetterState('unfolded');
    }, 1100);
  };

  const handleReplay = () => {
    setLetterState('closed');
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative select-none bg-ivory text-charcoal min-h-[75vh] flex flex-col items-center justify-center">
      {/* Header Section (Matching Quiz Style) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label: Muted Rose */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-muted-rose uppercase font-semibold">
            {letterConfig.label || 'A PERSONAL NOTE'}
          </span>
          {/* Main Heading: Wine */}
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-wine font-normal mt-2 mb-3">
            {letterConfig.heading || 'A Letter For You'}
          </h2>
          {/* Subtitle: Charcoal */}
          <p className="font-cormorant italic text-lg sm:text-xl text-charcoal/80">
            {letterConfig.description || 'Some feelings are better expressed in words.'}
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

      {/* Main Experience Container */}
      <div className="max-w-3xl w-full mx-auto relative flex flex-col items-center">
        
        {/* VIEW 1: ENVELOPE IN DUSTY ROSE CARD (Matching Quiz Intro Card Style) */}
        {letterState !== 'unfolded' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            {/* Dusty Rose Feature Card */}
            <div className="w-full max-w-xl bg-dusty-rose/40 border border-champagne/50 rounded-3xl p-6 sm:p-10 shadow-sm relative flex flex-col items-center">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

              {/* The 3D Interactive Ivory Envelope */}
              <div className="mb-8 w-full flex justify-center">
                <EnvelopeAnimation
                  isOpen={letterState === 'opening'}
                  onOpen={handleOpenLetter}
                />
              </div>

              {/* Button: Wine Background with Ivory Text & Champagne Border */}
              {letterState === 'closed' && (
                <motion.button
                  type="button"
                  onClick={handleOpenLetter}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative px-9 sm:px-11 py-4 rounded-xl bg-wine text-ivory border-2 border-champagne shadow-[0_10px_25px_rgba(84,45,56,0.22)] hover:bg-[#43232c] hover:shadow-[0_14px_35px_rgba(84,45,56,0.32)] transition-all duration-300"
                >
                  <span className="font-cinzel text-xs sm:text-sm tracking-[0.24em] font-semibold uppercase flex items-center justify-center gap-3">
                    <span>OPEN YOUR LETTER</span>
                    <ArrowRight className="w-4 h-4 text-champagne group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              )}

              {letterState === 'opening' && (
                <div className="font-cinzel text-xs tracking-[0.25em] text-wine uppercase animate-pulse flex items-center gap-2 font-semibold py-2">
                  <span className="w-1.5 h-1.5 rotate-45 bg-champagne" />
                  <span>Unfolding your letter...</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* VIEW 2: COMPLETE UNFOLDED LETTER (Premium Ivory Stationery) */}
        <AnimatePresence>
          {letterState === 'unfolded' && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              {/* Premium Ivory Stationery Card with Romantic Background Photograph */}
              <div className="relative bg-ivory text-charcoal rounded-3xl p-7 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(41,35,38,0.12)] border-2 border-champagne/60 overflow-hidden">
                
                {/* High-Clarity Romantic Background Photograph (Positioned to show both faces clearly) */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={letterConfig.imagePath || '/images/letter-memory.jpg'}
                      alt={letterConfig.altText || 'Memory'}
                      className="w-full h-full object-cover object-[center_30%] opacity-40 filter contrast-110 brightness-105"
                    />
                    {/* Soft radial and linear fade ensuring both faces are visible while text remains 100% legible */}
                    <div className="absolute inset-0 bg-gradient-to-b from-ivory/75 via-ivory/55 to-ivory/80" />
                    <div className="absolute inset-0 bg-radial-champagne opacity-10" />
                  </div>
                </div>

                {/* Inner Champagne Frames */}
                <div className="absolute inset-3 sm:inset-4 md:inset-5 border border-champagne/35 rounded-2xl pointer-events-none z-10" />
                <div className="absolute inset-4 sm:inset-5 md:inset-6 border border-champagne/20 rounded-xl pointer-events-none z-10" />

                {/* Corner flourishes: Champagne */}
                <div className="absolute top-5 left-5 sm:top-7 sm:left-7 w-4 h-4 border-t-2 border-l-2 border-champagne pointer-events-none z-10" />
                <div className="absolute top-5 right-5 sm:top-7 sm:right-7 w-4 h-4 border-t-2 border-r-2 border-champagne pointer-events-none z-10" />
                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 w-4 h-4 border-b-2 border-l-2 border-champagne pointer-events-none z-10" />
                <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 w-4 h-4 border-b-2 border-r-2 border-champagne pointer-events-none z-10" />

                {/* Top Letter Header: Date badge & Muted Rose label */}
                <div className="relative z-10 flex items-center justify-between border-b border-champagne/30 pb-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rotate-45 bg-champagne" />
                    <span className="font-cinzel text-xs tracking-[0.22em] text-muted-rose uppercase font-semibold">
                      A Keepsake For Harshii
                    </span>
                  </div>

                  <span className="font-cinzel text-xs tracking-[0.2em] text-wine font-semibold bg-dusty-rose/60 px-4 py-1.5 rounded-full border border-champagne/60 shadow-xs">
                    {letterConfig.date || '18 November'}
                  </span>
                </div>

                {/* Salutation: Wine */}
                <div className="mb-4 relative z-10">
                  <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-wine font-semibold drop-shadow-xs">
                    {letterConfig.salutation || 'Premina Harshu ki,'}
                  </h3>
                </div>

                {/* Prominent High-Clarity Featured Photograph ON THE LETTER */}
                <div className="my-6 sm:my-8 relative z-10 w-full max-w-lg mx-auto">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-champagne shadow-[0_10px_28px_rgba(84,45,56,0.18)] bg-ivory p-1.5 group">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-wine/20">
                      <img
                        src={letterConfig.imagePath || '/images/letter-memory.jpg'}
                        alt="Harshii & Ni Abbai"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Subtle dark gradient overlay at bottom for caption */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-ivory font-cinzel text-xs tracking-widest pointer-events-none">
                        <span className="font-semibold text-[11px] drop-shadow-sm text-ivory">
                          Harshii & Ni Abbai
                        </span>
                        <span className="text-[10px] text-champagne drop-shadow-sm font-semibold">
                          18 NOVEMBER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Letter Paragraphs: Crisp Charcoal with comfortable line spacing and soft readable backing */}
                <div className="relative z-10 bg-ivory/80 backdrop-blur-[2px] p-5 sm:p-8 rounded-2xl border border-champagne/40 shadow-xs space-y-5 sm:space-y-6 text-charcoal font-cormorant text-xl sm:text-2xl md:text-[25px] leading-relaxed sm:leading-loose">
                  {letterConfig.paragraphs?.map((paragraph, idx) => {
                    const isSpecialPelliLine = paragraph.includes('Pelli Ane Memory');
                    const isFinalLine = paragraph.includes('Always be the same');

                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 + idx * 0.12 }}
                        className={`tracking-wide ${
                          isSpecialPelliLine
                            ? 'font-medium text-charcoal'
                            : isFinalLine
                            ? 'font-semibold text-wine pt-2'
                            : 'font-normal'
                        }`}
                      >
                        {isSpecialPelliLine ? (
                          <>
                            {paragraph.split('(Pelli Ane Memory Create Chesukodaniki Chala Wait Chestunna )')[0]}
                            <span className="text-wine font-semibold italic bg-dusty-rose/40 px-2 py-0.5 rounded-lg border border-champagne/50 inline-block my-1 shadow-2xs">
                              (Pelli Ane Memory Create Chesukodaniki Chala Wait Chestunna )
                            </span>
                            {paragraph.split('(Pelli Ane Memory Create Chesukodaniki Chala Wait Chestunna )')[1]}
                          </>
                        ) : (
                          paragraph
                        )}
                      </motion.p>
                    );
                  })}
                </div>

                {/* Ornamental Champagne divider */}
                <div className="relative z-10 flex items-center justify-center gap-3 my-8 sm:my-10">
                  <span className="w-16 h-px bg-champagne/60" />
                  <div className="w-2 h-2 rotate-45 border border-champagne flex items-center justify-center bg-ivory">
                    <div className="w-0.5 h-0.5 bg-champagne" />
                  </div>
                  <span className="w-16 h-px bg-champagne/60" />
                </div>

                {/* Closing Section: Muted Rose & Wine */}
                <div className="relative z-10 mt-8 flex flex-col items-end">
                  <p className="font-cormorant italic text-lg sm:text-xl text-muted-rose mb-1 font-medium">
                    {letterConfig.closing || 'With lots of love,'}
                  </p>
                  <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-semibold text-wine tracking-wide">
                    {letterConfig.sender || 'Ni Abbaiiiiiiiiii'}
                  </p>
                </div>

                {/* Replay Animation Control */}
                <div className="relative z-10 mt-10 pt-6 border-t border-champagne/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-cinzel text-[10px] tracking-[0.2em] text-muted-rose uppercase font-medium">
                    Forever Treasured In Time
                  </span>

                  {/* Replay button: Wine & Champagne */}
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wine text-ivory border border-champagne hover:bg-[#43232c] shadow-sm transition-all font-cinzel text-xs tracking-[0.18em] uppercase font-semibold"
                    title="Close and Replay Envelope Animation"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-champagne" />
                    <span>Replay Animation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
