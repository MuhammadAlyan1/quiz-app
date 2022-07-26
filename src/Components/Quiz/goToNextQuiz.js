function goToNextQuiz({
  isCorrectChoice,
  setIsChoicePicked,
  setCountDown,
  dispatch,
  secondsAllowedForQuestion,
}) {
  if (isCorrectChoice === false) {
    dispatch({ type: 'SHOW_RESULT' });
    return;
  }

  setIsChoicePicked(false);
  setCountDown(secondsAllowedForQuestion);
  dispatch({ type: 'GO_TO_NEXT_QUIZ' });
}

export default goToNextQuiz;
