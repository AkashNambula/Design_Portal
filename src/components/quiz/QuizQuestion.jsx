import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import QuizProgress from './QuizProgress';
import QuizAnswerCard from './QuizAnswerCard';

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswerIndex,
  onSelectAnswer,
  onPrev,
  onNext,
  onSubmit,
  isFirst,
  isLast,
}) {
  const hasSelectedAnswer = selectedAnswerIndex !== null && selectedAnswerIndex !== undefined;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col select-none">
      {/* TOP SECTION: Label, Progress Bar & Question Count */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="font-cinzel text-xs tracking-[0.26em] text-muted-rose uppercase font-semibold">
            HARSHII QUIZ
          </span>
          <span className="font-cinzel text-xs tracking-wider text-wine font-semibold">
            {question.questionNumber || String(currentIndex + 1).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
          </span>
        </div>

        {/* Progress Bar Component */}
        <QuizProgress currentStep={currentIndex} totalSteps={totalQuestions} />
      </div>

      {/* MIDDLE SECTION: Large Elegant Question Heading & 4 Answer Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-6"
        >
          {/* Question Heading Card: Dusty Rose / Ivory Frame */}
          <div className="p-6 sm:p-8 rounded-3xl bg-dusty-rose/35 border border-champagne/50 shadow-sm relative text-center">
            {/* Corner Accents */}
            <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-champagne pointer-events-none" />
            <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-champagne pointer-events-none" />

            <span className="inline-block font-cinzel text-[11px] tracking-[0.24em] text-muted-rose uppercase font-medium mb-2">
              QUESTION {question.questionNumber}
            </span>

            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-wine font-normal leading-snug">
              {question.question}
            </h2>
          </div>

          {/* 4 Answer Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {question.options.map((optionText, idx) => (
              <QuizAnswerCard
                key={idx}
                optionText={optionText}
                optionIndex={idx}
                isSelected={selectedAnswerIndex === idx}
                onSelect={() => onSelectAnswer(idx)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* BOTTOM SECTION: Previous & Next / Submit Navigation Buttons */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-champagne/30 flex items-center justify-between gap-4">
        {/* Previous Button */}
        <div>
          {!isFirst ? (
            <motion.button
              type="button"
              onClick={onPrev}
              whileHover={{ scale: 1.03, x: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dusty-rose/40 text-wine border border-champagne/50 hover:bg-dusty-rose/70 font-cinzel text-xs tracking-[0.18em] uppercase font-semibold transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-wine" />
              <span>PREVIOUS</span>
            </motion.button>
          ) : (
            <div /> // Spacer
          )}
        </div>

        {/* Next or Submit Button */}
        <div>
          {!isLast ? (
            <motion.button
              type="button"
              onClick={onNext}
              disabled={!hasSelectedAnswer}
              whileHover={hasSelectedAnswer ? { scale: 1.03, x: 2 } : {}}
              whileTap={hasSelectedAnswer ? { scale: 0.97 } : {}}
              className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-cinzel text-xs tracking-[0.2em] uppercase font-semibold transition-all shadow-sm ${
                hasSelectedAnswer
                  ? 'bg-wine text-ivory border-2 border-champagne hover:bg-[#43232c] cursor-pointer'
                  : 'bg-dusty-rose/30 text-charcoal/40 border border-champagne/30 cursor-not-allowed opacity-60'
              }`}
              title={hasSelectedAnswer ? 'Go to next question' : 'Please select an answer to continue'}
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-champagne" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={onSubmit}
              disabled={!hasSelectedAnswer}
              whileHover={hasSelectedAnswer ? { scale: 1.04, y: -1 } : {}}
              whileTap={hasSelectedAnswer ? { scale: 0.97 } : {}}
              className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-cinzel text-xs tracking-[0.22em] uppercase font-bold transition-all shadow-md ${
                hasSelectedAnswer
                  ? 'bg-wine text-ivory border-2 border-champagne hover:bg-[#43232c] cursor-pointer ring-2 ring-champagne/40'
                  : 'bg-dusty-rose/30 text-charcoal/40 border border-champagne/30 cursor-not-allowed opacity-60'
              }`}
              title={hasSelectedAnswer ? 'Submit your answers' : 'Please select an answer to submit'}
            >
              <CheckCircle2 className="w-4 h-4 text-champagne" />
              <span>SUBMIT ANSWERS</span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

