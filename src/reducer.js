function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUIZZES':
      return {
        ...state,
        listOfQuizzes: [...action.payload],
      };

    case 'GO_TO_NEXT_QUIZ':
      // =========================================
      // TODO: handle end of quiz question
      // =========================================
      if (state.currentQuizIndex === state.amount - 1) {
        return {
          ...state,
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

    // ============================================================
    // Go to quiz selection
    case 'TRY_AGAIN':
      return {
        Amount: 10,
        listOfQuizzes: [],
        category: 'all',
        type: 'mcqs',
        difficulty: 'all',
        isCorrectChoice: true,
        isResultDisplaying: false,
        currentQuizIndex: 0,
        score: 0,
      };

    default:
      return state;
  }
}

export default reducer;
