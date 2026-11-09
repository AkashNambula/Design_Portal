import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizProgress from './QuizProgress';
import QuizAnswerCard from './QuizAnswerCard';

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  score,
  selectedAnswerIndex,
  isLocked,
  onSelectAnswer,
}) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col select-none">
      {/* Progress & Score Header */}
      <QuizProgress
        currentStep={currentIndex}
        totalSteps={totalQuestions}
        score={score}
      />

      {/* Main Question Card with Framer Motion slide/fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-6"
        >
          {/* Question Text Box in Dusty Rose Frame */}
          <div className="p-6 sm:p-9 rounded-3xl bg-dusty-rose/40 border border-champagne/60 shadow-sm relative text-center">
            {/* Corner Accents */}
            <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />

            <span className="inline-block font-cinzel text-xs tracking-[0.24em] text-muted-rose uppercase font-semibold mb-2">
              QUESTION {question.questionNumber}
            </span>

            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-wine font-medium leading-snug">
              {question.question}
            </h2>
          </div>

          {/* 4 Options Grid (2-column on desktop, single-column on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {question.options.map((optionText, idx) => (
              <QuizAnswerCard
                key={idx}
                optionText={optionText}
                optionIndex={idx}
                isSelected={selectedAnswerIndex === idx}
                isDisabled={isLocked}
                onSelect={() => onSelectAnswer(idx)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
