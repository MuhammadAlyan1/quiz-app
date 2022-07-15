function reducer(state, action) {
  switch (action.type) {
    case "SET_QUIZZES":
      return {
        ...state,
        listOfQuizzes: [...action.payload],
      };
  }

  return state;
}

export default reducer;
