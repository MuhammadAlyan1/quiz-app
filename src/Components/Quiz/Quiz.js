import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { quizContext } from '../../App.js';
import decodeHtmlEntities from '../../utils/decodeHtmlEntities';
import checkAnswer from './checkAnswer';
import goToNextQuiz from './goToNextQuiz.js';
import { motion } from 'framer-motion';
import { openNewSection, quizContents } from '../../utils/framerMotionVariants';

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
    <motion.section
      variants={openNewSection}
      initial={'hidden'}
      animate={'visible'}
      className={styles.quiz}
    >
      <div className={styles.questionDiv}>
        <motion.p
          variants={quizContents}
          initial={'hidden'}
          animate={'visible'}
          className={styles.question}
        >
          {question}
        </motion.p>
      </div>
      <div
        className={
          isChoicePicked
            ? `${styles.choiceDiv} ${styles.showAnswers}`
            : `${styles.choiceDiv}`
        }
      >
        {options.map((choice, index) => (
          <motion.button
            variants={quizContents}
            initial={'hidden'}
            animate={'visible'}
            type="button"
            onClick={(e) =>
              checkAnswer({ e, isChoicePicked, setIsChoicePicked, dispatch })
            }
            className={
              correctAnswer === options[index] ? `${styles.correct}` : ' '
            }
            key={index}
          >
            {choice}
          </motion.button>
        ))}
      </div>
      {isChoicePicked && (
        <motion.button
          variants={quizContents}
          initial={'hidden'}
          animate={'visible'}
          type="button"
          onClick={() =>
            goToNextQuiz({
              isCorrectChoice,
              setIsChoicePicked,
              setCountDown,
              dispatch,
              secondsAllowedForQuestion,
            })
          }
          className={`${styles.nextBtn}`}
        >
          next
        </motion.button>
      )}
      <motion.p
        variants={quizContents}
        initial={'hidden'}
        animate={'visible'}
        className={`${styles.countdownContainer}`}
      >
        Time Remaining: {countDown}s
      </motion.p>
    </motion.section>
  );
};

Quiz.propTypes = {
  value: PropTypes.object,
  question: PropTypes.string,
  options: PropTypes.array,
  correctAnswer: PropTypes.string,
};

export default Quiz;
