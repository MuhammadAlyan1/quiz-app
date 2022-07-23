// Hooks
import React, { useState, useEffect, useContext } from 'react';
import { quizContext } from '../../App';

// components
import Quiz from '../Quiz/Quiz.js';
import Result from '../Result/Result.js';
import QuizSelection from '../QuizSelection/QuizSelection.js';

import './QuizContainer.css';

const QuizContainer = () => {
  const {
    state: {
      listOfQuizzes,
      currentQuizIndex,
      isResultDisplaying,
      isQuizSelectionDisplaying,
    },
  } = useContext(quizContext);

  if (isQuizSelectionDisplaying) {
    return (
      <div className="quizContainer">
        <QuizSelection />
      </div>
    );
  }

  if (isResultDisplaying) {
    return (
      <div className="quizContainer">
        <Result />
      </div>
    );
  }

  return (
    <div className="quizContainer">
      <Quiz value={listOfQuizzes[currentQuizIndex]} />
    </div>
  );
};

export default QuizContainer;
