import React, { useContext } from 'react';
import resultImage from '../../assets/result_image.svg';

import { quizContext } from '../../App';

import styles from './Result.module.css';

const Result = () => {
  const { state, dispatch } = useContext(quizContext);
  const { score } = state;

  function tryAgain() {
    dispatch({ type: 'TRY_AGAIN' });
  }

  return (
    <section className={styles.resultContainer}>
      <div className={styles.imageDiv}>
        <img src={resultImage} alt="result" />
      </div>
      <div className={styles.resultContents}>
        <h2 className={styles.resultHeading}>Results</h2>
        <p className={styles.resultDescription}>
          You got
          <span className={styles.score}>{score}</span>
          correct answers
        </p>
        <button type="submit" onClick={() => tryAgain()}>
          Try again
        </button>
      </div>
    </section>
  );
};

export default Result;
