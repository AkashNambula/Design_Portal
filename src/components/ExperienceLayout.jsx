import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  X,
} from 'lucide-react';
import AboutSection from './AboutSection';
import OurStoryTimeline from './OurStoryTimeline';
import WeTogetherSection from './WeTogetherSection';
import MyMemoriesSection from './MyMemoriesSection';
import MomentsInMotion from './MomentsInMotion';
import LetterExperience from './LetterExperience';
import ScrapbookGallery from './ScrapbookGallery';
import QuizPage from './quiz/QuizPage';

const navItems = [
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'our-story', label: 'Our Story', component: OurStoryTimeline },
  { id: 'we-together', label: 'We Together', component: WeTogetherSection },
  { id: 'my-memories', label: 'My Memories', component: MyMemoriesSection },
  { id: 'moments-in-motion', label: 'Moments in Motion', component: MomentsInMotion },
  { id: 'a-letter-for-you', label: 'A Letter For You', component: LetterExperience },
  { id: 'our-little-moments', label: 'Our Little Moments', component: ScrapbookGallery },
  { id: 'quiz', label: 'Quiz', component: QuizPage },
];

export default function ExperienceLayout() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Read active tab from URL query parameter or default to 'about' (support legacy 'heart-storage' alias)
  const rawTab = searchParams.get('tab') || 'about';
  const activeTabId = rawTab === 'heart-storage' ? 'our-little-moments' : rawTab;

  const setActiveTab = (id) => {
    setSearchParams({ tab: id });
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeNavItem = navItems.find((item) => item.id === activeTabId) || navItems[0];
  const ActiveComponent = activeNavItem.component;

  return (
    <div className="min-h-screen w-full bg-ivory text-charcoal flex flex-col relative selection:bg-champagne selection:text-wine overflow-x-hidden select-none">
      
      {/* Subtle Luxury Ambient Background Glows */}
      <div 
        className="fixed top-10 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: '#E8D5D0' }} 
      />
      <div 
        className="fixed bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: '#C7A879' }} 
      />

      {/* ========================================================================= */}
      {/* 1. COMPACT LUXURY EDITORIAL TOP HEADER WITH COLLAPSIBLE FILTER MENU BUTTON */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-ivory/95 backdrop-blur-md border-b border-champagne/30 transition-all select-none">
        
        {/* Header Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between relative">
          
          {/* Left: Return to Invitation Link */}
          <div className="flex-1 flex items-center justify-start">
            <button
              onClick={() => navigate('/invitation')}
              className="inline-flex items-center gap-1.5 font-inter text-xs tracking-wider text-muted-rose hover:text-wine transition-colors py-1 group cursor-pointer"
              title="Return to the main invitation page"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-champagne group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline uppercase">Invitation</span>
            </button>
          </div>

          {/* Center: "Harshii" and "A CELEBRATION OF YOU · 18 NOVEMBER" */}
          <div className="flex-2 flex flex-col items-center justify-center text-center">
            <h1 
              onClick={() => setActiveTab('about')}
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal text-wine tracking-wide leading-none cursor-pointer"
            >
              Harshii
            </h1>
            <p className="font-inter text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-rose uppercase font-medium mt-1">
              A CELEBRATION OF YOU · 18 NOVEMBER
            </p>
          </div>

          {/* Right: COLLAPSED SINGLE BUTTON WITH 3 VERTICAL LINES FILTER SYMBOL */}
          <div className="flex-1 flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-champagne/70 bg-dusty-rose/30 hover:bg-dusty-rose/50 text-wine transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              aria-label="Toggle section chapters"
              aria-expanded={isMenuOpen}
            >
              {/* 3 Vertical Lines Filter Symbol with subtle adjustment ticks */}
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 16 16" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                className="text-champagne group-hover:text-wine transition-colors"
              >
                <line x1="3.5" y1="2" x2="3.5" y2="14" strokeLinecap="round" />
                <circle cx="3.5" cy="5" r="1.5" fill="#C7A879" stroke="#C7A879" />
                <line x1="8" y1="2" x2="8" y2="14" strokeLinecap="round" />
                <circle cx="8" cy="11" r="1.5" fill="#C7A879" stroke="#C7A879" />
                <line x1="12.5" y1="2" x2="12.5" y2="14" strokeLinecap="round" />
                <circle cx="12.5" cy="7" r="1.5" fill="#C7A879" stroke="#C7A879" />
              </svg>

              {/* Current Active Tab Name */}
              <span className="font-inter text-xs tracking-[0.14em] uppercase font-semibold text-wine max-w-[110px] sm:max-w-none truncate">
                {activeNavItem.label}
              </span>

              {/* Smooth rotating arrow indicator */}
              <ChevronDown 
                className={`w-3.5 h-3.5 text-champagne group-hover:text-wine transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
          </div>

        </div>

        {/* Subtle Bottom Champagne Divider */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="w-full h-px bg-champagne/30" />
        </div>

        {/* ======================================================================= */}
        {/* 2. LUXURY EDITORIAL DROPDOWN OPTIONS MENU (Opens when button is clicked)  */}
        {/* ======================================================================= */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Click Dismiss */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-xs"
              />

              {/* Floating Options Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="absolute top-full right-3 sm:right-6 md:right-8 mt-2 z-50 w-72 sm:w-84 bg-ivory rounded-2xl border-2 border-champagne/60 shadow-[0_18px_45px_rgba(41,35,38,0.25)] p-4 select-none"
              >
                {/* Dropdown Header */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-champagne/30 px-1">
                  <div className="flex items-center gap-2 text-muted-rose">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-champagne">
                      <line x1="3.5" y1="2" x2="3.5" y2="14" strokeLinecap="round" />
                      <circle cx="3.5" cy="5" r="1.5" fill="#C7A879" stroke="#C7A879" />
                      <line x1="8" y1="2" x2="8" y2="14" strokeLinecap="round" />
                      <circle cx="8" cy="11" r="1.5" fill="#C7A879" stroke="#C7A879" />
                      <line x1="12.5" y1="2" x2="12.5" y2="14" strokeLinecap="round" />
                      <circle cx="12.5" cy="7" r="1.5" fill="#C7A879" stroke="#C7A879" />
                    </svg>
                    <span className="font-cinzel text-[10px] tracking-[0.24em] uppercase font-semibold">
                      Chapters & Moments
                    </span>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-charcoal/60 hover:text-wine hover:bg-dusty-rose/30 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* All 8 Sections List */}
                <div className="space-y-1">
                  {navItems.map((item, idx) => {
                    const isActive = item.id === activeTabId;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-dusty-rose/40 text-wine border-champagne font-semibold shadow-2xs'
                            : 'bg-transparent text-charcoal/80 border-transparent hover:bg-dusty-rose/20 hover:text-wine'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`font-cinzel text-[10px] tracking-wider ${isActive ? 'text-wine font-bold' : 'text-muted-rose'}`}>
                            0{idx + 1}.
                          </span>
                          <span className="font-inter text-xs tracking-[0.14em] uppercase">
                            {item.label}
                          </span>
                        </div>

                        {isActive && (
                          <div className="w-1.5 h-1.5 rotate-45 bg-wine" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Return to Invitation in Dropdown Footer */}
                <div className="pt-3 mt-2 border-t border-champagne/25">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/invitation');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-1.5 text-xs font-inter tracking-[0.16em] uppercase text-muted-rose hover:text-wine transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-champagne" />
                    <span>Return to Invitation</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </header>

      {/* ========================================================================= */}
      {/* 3. MAIN PAGE CONTENT AREA (Clean, Centered, Content Focused)              */}
      {/* ========================================================================= */}
      <main className="w-full flex-1 bg-ivory text-charcoal relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            <ActiveComponent onNavigateToAbout={() => setActiveTab('about')} />
          </motion.div>
        </AnimatePresence>

        {/* Bottom Pagination / Next Section Quick Jump Bar */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-16 pt-8 flex items-center justify-between border-t border-champagne/30 text-charcoal">
          {(() => {
            const currentIdx = navItems.findIndex((item) => item.id === activeTabId);
            const prevItem = currentIdx > 0 ? navItems[currentIdx - 1] : null;
            const nextItem = currentIdx < navItems.length - 1 ? navItems[currentIdx + 1] : null;

            return (
              <>
                <div>
                  {prevItem && (
                    <button
                      onClick={() => setActiveTab(prevItem.id)}
                      className="flex items-center gap-2 font-inter text-xs tracking-wider text-wine hover:text-muted-rose transition-colors font-semibold cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-champagne" />
                      <span>{prevItem.label}</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {navItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`cursor-pointer transition-all ${
                        item.id === activeTabId
                          ? 'w-6 h-1.5 bg-wine rounded-full'
                          : 'w-2 h-1.5 bg-dusty-rose rounded-full hover:bg-muted-rose'
                      }`}
                      title={item.label}
                    />
                  ))}
                </div>

                <div>
                  {nextItem && (
                    <button
                      onClick={() => setActiveTab(nextItem.id)}
                      className="flex items-center gap-2 font-inter text-xs tracking-wider text-wine hover:text-muted-rose transition-colors font-semibold cursor-pointer"
                    >
                      <span>{nextItem.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                    </button>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      </main>

    </div>
  );
}
