/**
 * Centralized Quiz Data Configuration
 * All seven questions, their selectable options, and correct answers are defined here.
 * When you are ready to configure the correct answers, set `correctAnswer` to the index (0, 1, 2, or 3)
 * or the exact text of the correct option.
 * 
 * When `correctAnswer` is null for a question, the application recognizes that the answer key
 * is pending configuration, preventing misleading scores while still allowing full interaction.
 */

export const quizConfig = {
  sectionLabel: "A LITTLE CHALLENGE",
  mainHeading: "How Well Do You Know Harshii?",
  subtitle: "A little challenge about someone who makes ordinary moments special.",
  introCardText: "Seven questions. Four choices each. How much do you really know?",
  startButtonText: "START THE QUIZ",
  totalQuestions: 7,

  // Feedback messages based on score
  resultMessages: {
    high: {
      minScore: 6,
      maxScore: 7,
      headline: "Outstanding Connection",
      message: "You know Harshii so well! You remember all the little things.",
    },
    medium: {
      minScore: 4,
      maxScore: 5,
      headline: "Beautiful Affection",
      message: "Beautiful effort! You know quite a lot about Harshii.",
    },
    low: {
      minScore: 0,
      maxScore: 3,
      headline: "A Journey Ahead",
      message: "There is still so much more to discover about Harshii.",
    },
  },
};

export const quizQuestions = [
  {
    id: 1,
    questionNumber: "01",
    question: "What is Harshii's favourite food?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    // Set to index 0, 1, 2, or 3 (or null if pending)
    correctAnswer: null,
  },
  {
    id: 2,
    questionNumber: "02",
    question: "Who is Harshii's favourite person?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
  {
    id: 3,
    questionNumber: "03",
    question: "Which village does Harshii belong to?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
  {
    id: 4,
    questionNumber: "04",
    question: "What is Harshii's favourite colour?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
  {
    id: 5,
    questionNumber: "05",
    question: "What does Harshii love doing the most?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
  {
    id: 6,
    questionNumber: "06",
    question: "What is Harshii's favourite place to visit?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
  {
    id: 7,
    questionNumber: "07",
    question: "What makes Harshii the happiest?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    correctAnswer: null,
  },
];

