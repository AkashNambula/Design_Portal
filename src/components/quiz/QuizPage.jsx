import React, { useState } from 'react';
import { harshiiQuizQuestions, harshiiQuizConfig } from '../../data/harshiiQuizData';
import QuizIntro from './QuizIntro';
import QuizQuestion from './QuizQuestion';
import QuizFeedback from './QuizFeedback';
import QuizResults from './QuizResults';

export default function QuizPage() {
  // State: 'intro' | 'active' | 'results'
  const [step, setStep] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  // Start the Quiz
  const handleStart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setFeedback(null);
    setIsLocked(false);
    setStep('active');
  };

  // Option selection with immediate validation
  const handleSelectAnswer = (optionIndex) => {
    if (isLocked) return;

    setIsLocked(true);
    setSelectedAnswerIndex(optionIndex);

    const currentQuestion = harshiiQuizQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;

    if (isCorrect) {
      // 1. Correct Answer Flow
      setScore((prev) => prev + 1);
      setFeedback({
        type: 'correct',
        message: 'Correct Answer!',
        subMessage: 'Yay! You know Harshii so well!',
      });

      // After short delay, automatically advance to next question or final results
      setTimeout(() => {
        setFeedback(null);
        setSelectedAnswerIndex(null);
        setIsLocked(false);

        if (currentQuestionIndex + 1 < harshiiQuizQuestions.length) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          setStep('results');
        }
      }, 1600);
    } else {
      // 2. Wrong Answer Flow
      setFeedback({
        type: 'wrong',
        message: "Oops! That's not right!",
        subMessage: 'Think twice and try again!',
      });
      // Do not advance question. Score does not increase.
      // Unlock after dismissal handled via handleDismissFeedback.
    }
  };

  // Dismiss feedback for wrong answer retry
  const handleDismissFeedback = () => {
    setFeedback(null);
    setSelectedAnswerIndex(null);
    setIsLocked(false);
  };

  // Replay Quiz
  const handleReplay = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setFeedback(null);
    setIsLocked(false);
    setStep('active');
  };

  const currentQuestion = harshiiQuizQuestions[currentQuestionIndex] || harshiiQuizQuestions[0];

  return (
    <section className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh] flex items-center justify-center select-none">
      {/* 1. QUIZ INTRO */}
      {step === 'intro' && (
        <QuizIntro onStart={handleStart} />
      )}

      {/* 2. ACTIVE QUIZ QUESTIONS */}
      {step === 'active' && (
        <>
          <QuizQuestion
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={harshiiQuizQuestions.length}
            score={score}
            selectedAnswerIndex={selectedAnswerIndex}
            isLocked={isLocked}
            onSelectAnswer={handleSelectAnswer}
          />

          {/* Feedback Popup for Correct / Wrong Answer */}
          <QuizFeedback
            feedback={feedback}
            onDismiss={handleDismissFeedback}
          />
        </>
      )}

      {/* 3. FINAL RESULTS */}
      {step === 'results' && (
        <QuizResults
          score={score}
          totalQuestions={harshiiQuizQuestions.length}
          onReplay={handleReplay}
        />
      )}
    </section>
  );
}

// Named alias export for compatibility
export { QuizPage as HarshiiQuiz };
