import { useState, useEffect, useReducer, createContext } from 'react';
import getQuizzes from './utils/getQuizzes.js';
import QuizContainer from './Components/QuizContainer/QuizContainer';
import reducer from './reducer';
import './App.css';

export const quizContext = createContext(null);

function App() {
  const defaultValue = {
    amount: 10,
    listOfQuizzes: [],
    category: 'generalKnowledge',
    type: 'mcqs',
    difficulty: 'easy',
    isCorrectChoice: true,
    isResultDisplaying: false,
    isQuizSelectionDisplaying: true,
    currentQuizIndex: 0,
    score: 0,
  };

  const [state, dispatch] = useReducer(reducer, defaultValue);
  // splitting category at uppercase
  const quizCategory = state.category.split(/(?=[A-Z])/).join(' ');

  useEffect(() => {
    const { amount, category, difficulty } = state;
    dispatch({
      type: 'SET_QUIZZES',
      payload: [...getQuizzes({ amount, category, difficulty })],
    });
  }, [state.isQuizSelectionDisplaying]);

  return (
    <quizContext.Provider value={{ state, dispatch }}>
      <div className="app">
        {!state.isQuizSelectionDisplaying && (
          <div className="quizInfo">
            <p className="quiz-category">{quizCategory} Quiz</p>
            <p className="quiz-difficulty">{state.difficulty}</p>
          </div>
        )}
        <QuizContainer />
      </div>
    </quizContext.Provider>
  );
}

export default App;
