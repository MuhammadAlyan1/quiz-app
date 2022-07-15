// Hooks
import { useContext } from "react";
import { quizContext } from "../App";

import React from "react";

const Quiz = () => {
  const { state } = useContext(quizContext);
  return <div>Quiz</div>;
};

export default Quiz;
