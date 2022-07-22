function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUIZ_DETAILS': {
      const { amount, category, difficulty } = action.payload;
      return {
        ...state,
        amount,
        category,
        difficulty,
        isQuizSelectionDisplaying: false,
      };
    }

    case 'SET_QUIZZES':
      return {
        ...state,
        listOfQuizzes: [...action.payload],
      };

    case 'START_QUIZ': {
      const { amount, category, difficulty } = action.payload;

      return {
        ...state,
        amount,
        category,
        difficulty,
        isQuizSelectionDisplaying: false,
      };
    }

    case 'GO_TO_NEXT_QUIZ':
      if (state.currentQuizIndex === state.amount - 1) {
        return {
          ...state,
          isResultDisplaying: true,
        };
      }
      return {
        ...state,
        currentQuizIndex: state.currentQuizIndex + 1,
      };

    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };

    case 'INCORRECT_CHOICE':
      return {
        ...state,
        isCorrectChoice: false,
      };

    case 'SHOW_RESULT':
      return {
        ...state,
        isResultDisplaying: true,
      };

    case 'TRY_AGAIN':
      return {
        ...state,
        isQuizSelectionDisplaying: true,
        isResultDisplaying: false,
        isCorrectChoice: true,
        currentQuizIndex: 0,
        score: 0,
      };

    default:
      return state;
  }
}

export default reducer;
