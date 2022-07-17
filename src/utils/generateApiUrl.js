export default function generateApiUrl(
  quizAmount = 10,
  category = 'all',
  type = 'mcqs',
  difficulty = 'all'
) {
  const quizCategories = {
    generalKnowledge: 9,
    books: 10,
    videoGames: 15,
    scienceAndNature: 17,
    computers: 18,
    geography: 22,
    history: 23,
    vehicle: 28,
  };

  const quizTypes = {
    mcqs: 'multiple',
    trueFalse: 'boolean',
  };

  const quizDifficulty = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
  };

  // default url with quiz amount
  let url = `https://opentdb.com/api.php?amount=${quizAmount}`;

  // adding category to url
  if (category !== 'all') {
    const selectedQuizCategory = quizCategories[category];
    url += `&category=${selectedQuizCategory}`;
  }

  // adding difficulty to url
  if (difficulty !== 'all') {
    const selectedDifficulty = quizDifficulty[difficulty];
    url += `&difficulty=${selectedDifficulty}`;
  }

  // adding type to url
  const selectedQuizType = quizTypes[type];
  url += `&type=${selectedQuizType}`;

  return url;
}
