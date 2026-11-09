import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { quizQuestions } from '../../data/quizData';
import QuizIntro from './QuizIntro';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

export default function QuizPage({ onNavigateToAbout }) {
  const [, setSearchParams] = useSearchParams();

  // State: 'intro' | 'active' | 'results'
  const [step, setStep] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [isKeyConfigured, setIsKeyConfigured] = useState(false);

  // Check if answers are configured in quizData
  const checkIsConfigured = () => {
    return quizQuestions.some((q) => q.correctAnswer !== null && q.correctAnswer !== undefined);
  };

  // Start the Quiz
  const handleStart = () => {
    setStep('active');
    setCurrentQuestionIndex(0);
  };

  // Select an option for the current question
  const handleSelectAnswer = (optionIndex) => {
    const currentQ = quizQuestions[currentQuestionIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  // Previous Question
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Next Question
  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Submit all answers
  const handleSubmit = () => {
    const configured = checkIsConfigured();
    setIsKeyConfigured(configured);

    if (configured) {
      let finalScore = 0;
      quizQuestions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          finalScore += 1;
        }
      });
      setCalculatedScore(finalScore);
    } else {
      // When answers are not yet set by host, calculate sample 5 for verification
      setCalculatedScore(5);
    }

    setStep('results');
  };

  // Restart Quiz
  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setStep('intro');
  };

  // Back to About Section
  const handleBackToAbout = () => {
    if (onNavigateToAbout) {
      onNavigateToAbout();
    } else {
      setSearchParams({ tab: 'about' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex] || quizQuestions[0];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === quizQuestions.length - 1;

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative bg-ivory text-charcoal min-h-[75vh] flex items-center justify-center">
      {step === 'intro' && (
        <QuizIntro onStart={handleStart} />
      )}

      {step === 'active' && (
        <QuizQuestion
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={quizQuestions.length}
          selectedAnswerIndex={selectedAnswers[currentQuestion.id]}
          onSelectAnswer={handleSelectAnswer}
          onPrev={handlePrev}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isFirst={isFirst}
          isLast={isLast}
        />
      )}

      {step === 'results' && (
        <QuizResults
          score={calculatedScore}
          totalQuestions={quizQuestions.length}
          selectedAnswers={selectedAnswers}
          isConfigured={isKeyConfigured}
          onRestart={handleRestart}
          onBackToAbout={handleBackToAbout}
        />
      )}
    </section>
  );
}

