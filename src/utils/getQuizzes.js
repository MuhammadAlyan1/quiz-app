import computerEasyQuestions from '../questions/computerEasy.json';
import computerMediumQuestions from '../questions/computerMedium.json';
import computerHardQuestions from '../questions/computerHard.json';
import generalKnowledgeEasyQuestions from '../questions/generalKnowledgeEasy.json';
import generalKnowledgeMediumQuestions from '../questions/generalKnowledgeMedium.json';
import generalKnowledgeHardQuestions from '../questions/generalKnowledgeHard.json';
import historyEasyQuestions from '../questions/historyEasy.json';
import historyMediumQuestions from '../questions/historyMedium.json';
import historyHardQuestions from '../questions/historyHard.json';
import videoGameEasyQuestions from '../questions/videoGameEasy.json';
import videoGameMediumQuestions from '../questions/videoGameMedium.json';
import videoGameHardQuestions from '../questions/videoGameHard.json';

import shuffle from './shuffleArray';

function getComputerQuestions(difficulty) {
  if (difficulty === 'easy') {
    return [...computerEasyQuestions];
  }

  if (difficulty === 'medium') {
    return [...computerMediumQuestions];
  }

  if (difficulty === 'hard') {
    return [...computerHardQuestions];
  }
}
function getGeneralKnowledgeQuestions(difficulty) {
  if (difficulty === 'easy') {
    return [...generalKnowledgeEasyQuestions];
  }

  if (difficulty === 'medium') {
    return [...generalKnowledgeMediumQuestions];
  }

  if (difficulty === 'hard') {
    return [...generalKnowledgeHardQuestions];
  }
}

function getHistoryQuestions(difficulty) {
  if (difficulty === 'easy') {
    return [...historyEasyQuestions];
  }

  if (difficulty === 'medium') {
    return [...historyMediumQuestions];
  }

  if (difficulty === 'hard') {
    return [...historyHardQuestions];
  }
}

function getVideoGameQuestions(difficulty) {
  if (difficulty === 'easy') {
    return [...videoGameEasyQuestions];
  }

  if (difficulty === 'medium') {
    return [...videoGameMediumQuestions];
  }

  if (difficulty === 'hard') {
    return [...videoGameHardQuestions];
  }
}

function sliceArray(quizArray, amount) {
  const slicedArray = quizArray.slice(0, amount);

  return slicedArray;
}

function getQuizzes({ amount, category, difficulty }) {
  if (category === 'computer') {
    return [...sliceArray(shuffle(getComputerQuestions(difficulty)), amount)];
  }

  if (category === 'generalKnowledge') {
    return [
      ...sliceArray(shuffle(getGeneralKnowledgeQuestions(difficulty)), amount),
    ];
  }

  if (category === 'history') {
    return [...sliceArray(shuffle(getHistoryQuestions(difficulty)), amount)];
  }

  if (category === 'videoGame') {
    return [...sliceArray(shuffle(getVideoGameQuestions(difficulty)), amount)];
  }
}
export default getQuizzes;
