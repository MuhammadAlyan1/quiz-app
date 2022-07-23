import { useState, useContext, useEffect } from 'react';

import { quizContext } from '../../App';
import styles from './QuizSelection.module.css';
import SelectAmount from './SelectAmount';
import SelectCategory from './SelectCategory.js';
import SelectDifficulty from './SelectDifficulty';

export default function QuizSelection() {
  const { dispatch } = useContext(quizContext);
  const [amount, setAmount] = useState('');
  const [isAmountSelected, setIsAmountSelected] = useState(false);
  const [category, setCategory] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);

  useEffect(() => {
    if (isAmountSelected && isCategorySelected && isDifficultySelected) {
      console.log('amount: ', amount);
      console.log('category: ', category);
      console.log('difficulty: ', difficulty);

      dispatch({
        type: 'SET_QUIZ_DETAILS',
        payload: { amount, category, difficulty },
      });
    }
  }, [isAmountSelected, isCategorySelected, isDifficultySelected]);

  if (!isAmountSelected) {
    return (
      <div>
        <SelectAmount
          amount={amount}
          setAmount={setAmount}
          setIsAmountSelected={setIsAmountSelected}
        />
      </div>
    );
  }

  if (!isCategorySelected) {
    return (
      <div>
        <SelectCategory
          setIsCategorySelected={setIsCategorySelected}
          category={category}
          setCategory={setCategory}
        />
      </div>
    );
  }

  if (!isDifficultySelected) {
    return (
      <div>
        <SelectDifficulty
          setIsDifficultySelected={setIsDifficultySelected}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>
    );
  }

  // return (
  //   <div className={styles.quizSelection}>
  //     <div className={styles.amountContainer}>
  //       <label htmlFor="amount">select amount</label>
  //       <input
  //         id="amount"
  //         type="number"
  //         value={amount}
  //         onChange={(e) => setAmount(e.target.value)}
  //       />
  //     </div>
  //     <div className={styles.categoryContainer}>
  //       <label htmlFor="category">select category</label>
  //       <select
  //         id="category"
  //         value={category}
  //         onChange={(e) => setCategory(e.target.value)}
  //       >
  //         <option value="generalKnowledge">General Knowledge</option>
  //         <option value="videoGame">Video Game</option>
  //         <option value="history">History</option>
  //         <option value="computer">Computer</option>
  //       </select>
  //     </div>
  //     <div className={styles.difficultyContainer}>
  //       <label htmlFor="difficulty">select difficulty</label>
  //       <select
  //         id="difficulty"
  //         value={difficulty}
  //         onChange={(e) => setDifficulty(e.target.value)}
  //       >
  //         <option value="easy">Easy</option>
  //         <option value="medium">Medium</option>
  //         <option value="hard">Hard</option>
  //       </select>
  //     </div>
  //     <button onClick={setQuizDetails} type="submit">
  //       start quiz
  //     </button>
  //   </div>
  // );
}
