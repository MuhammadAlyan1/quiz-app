import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { quizContext } from '../../App.js';
import decodeHtmlEntities from '../../utils/decodeHtmlEntities';

// css
import styles from './Quiz.module.css';

const Quiz = (props) => {
  const { state, dispatch } = useContext(quizContext);
  const [isChoicePicked, setIsChoicePicked] = useState(false);
  const secondsAllowedForQuestion = 30;
  const [countDown, setCountDown] = useState(secondsAllowedForQuestion);

  const { value } = props;

  let { question, correctAnswer, options } = value;
  const { isCorrectChoice } = state;

  question = decodeHtmlEntities(question);
  options = options.map((option) => decodeHtmlEntities(option));

  function goToNextQuiz() {
    if (isCorrectChoice === false) {
      dispatch({ type: 'SHOW_RESULT' });
      return;
    }

    setIsChoicePicked(false);
    setCountDown(secondsAllowedForQuestion);
    dispatch({ type: 'GO_TO_NEXT_QUIZ' });
  }

  function checkAnswer(e) {
    if (isChoicePicked) return;

    const buttons = e.target.parentElement.children;

    Array.from(buttons).forEach((button) => {
      // removing class from every button that is not correct
      if (!button.classList.contains(`${styles.correct}`)) {
        button.className = '';
      }
    });

    if (!e.target.classList.contains(`${styles.correct}`)) {
      e.target.classList.add(`${styles.incorrect}`);
      dispatch({ type: 'INCORRECT_CHOICE' });
    }

    if (e.target.classList.contains(`${styles.correct}`)) {
      dispatch({ type: 'INCREASE_SCORE' });
    }

    setIsChoicePicked(true);
  }

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      if (countDown === 0) {
        clearInterval(countDownInterval);
        setIsChoicePicked(true);
        dispatch({ type: 'INCORRECT_CHOICE' });
        return;
      }

      if (isChoicePicked) {
        clearInterval(countDownInterval);
        return;
      }

      setCountDown(countDown - 1);
    }, 1000);

    return () => clearInterval(countDownInterval);
  }, [countDown, isChoicePicked]);

  if (value === undefined) return;

  return (
    <section className={styles.quiz}>
      <div className={styles.questionDiv}>
        <p className={styles.question}>{question}</p>
      </div>
      <div
        className={
          isChoicePicked
            ? `${styles.choiceDiv} ${styles.showAnswers}`
            : `${styles.choiceDiv}`
        }
      >
        {options.map((choice, index) => (
          <button
            type="button"
            onClick={(e) => checkAnswer(e)}
            className={
              correctAnswer === options[index] ? `${styles.correct}` : ' '
            }
            key={index}
          >
            {choice}
          </button>
        ))}
      </div>
      {isChoicePicked && (
        <button
          type="button"
          onClick={() => goToNextQuiz()}
          className={`${styles.nextBtn}`}
        >
          next
        </button>
      )}
      <p className={`${styles.countdownContainer}`}>
        Time Remaining: {countDown}s
      </p>
    </section>
  );
};

Quiz.propTypes = {
  value: PropTypes.object,
  question: PropTypes.string,
  options: PropTypes.array,
  correctAnswer: PropTypes.string,
};

export default Quiz;
