import React from "react";

// Hooks
import { useContext } from "react";
import { quizContext } from "../App";

const QuizContainer = () => {
  const { state } = useContext(quizContext);
  return <div>QuizContainer</div>;
};

export default QuizContainer;
