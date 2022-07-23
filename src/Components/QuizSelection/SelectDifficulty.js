import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import styles from './SelectDifficulty.module.css';

const SelectDifficulty = ({
  difficulty,
  setDifficulty,
  setIsDifficultySelected,
}) => {
  const [isEasySelected, setIsEasySelected] = useState(false);
  const [isMediumSelected, setIsMediumSelected] = useState(false);
  const [isHardSelected, setIsHardSelected] = useState(false);

  function selectEasyDifficulty() {
    setDifficulty('easy');
    setIsEasySelected(true);
    setIsMediumSelected(false);
    setIsHardSelected(false);
  }

  function selectMediumDifficulty() {
    setDifficulty('medium');
    setIsEasySelected(false);
    setIsMediumSelected(true);
    setIsHardSelected(false);
  }

  function selectHardDifficulty() {
    setDifficulty('hard');
    setIsEasySelected(false);
    setIsMediumSelected(false);
    setIsHardSelected(true);
  }

  function selectDifficultyAndGoToNextSection() {
    if (difficulty) {
      setIsDifficultySelected(true);
    }
  }

  return (
    <section className={styles.difficultiesContainer}>
      <h1>Select Difficulty</h1>
      <article className={styles.difficulties}>
        <div
          onClick={selectEasyDifficulty}
          className={`${styles.difficulty} ${
            isEasySelected && styles.selectedDifficulty
          }`}
        >
          <p>Easy</p>
        </div>
        <div
          onClick={selectMediumDifficulty}
          className={`${styles.difficulty} ${
            isMediumSelected && styles.selectedDifficulty
          }`}
        >
          <p>Medium</p>
        </div>
        <div
          onClick={selectHardDifficulty}
          className={`${styles.difficulty} ${
            isHardSelected && styles.selectedDifficulty
          }`}
        >
          <p>Hard</p>
        </div>
      </article>
      <button type="button" onClick={selectDifficultyAndGoToNextSection}>
        <FaArrowAltCircleDown />
      </button>
    </section>
  );
};

export default SelectDifficulty;
