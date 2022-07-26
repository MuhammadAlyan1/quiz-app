import styles from './Quiz.module.css';

function checkAnswer({ e, isChoicePicked, setIsChoicePicked, dispatch }) {
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

export default checkAnswer;
