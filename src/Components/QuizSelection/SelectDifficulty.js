import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  openNewSection,
  QuizSelectionSubCategoryHeading,
  quizSelectionOptions,
  QuizSelectionSubCategoryNextSectionButton,
} from '../../utils/framerMotionVariants';
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
    <motion.section
      variants={openNewSection}
      initial={'hidden'}
      animate={'visible'}
      className={styles.difficultiesContainer}
    >
      <motion.h1
        variants={QuizSelectionSubCategoryHeading}
        initial={'hidden'}
        animate={'visible'}
      >
        Select Difficulty
      </motion.h1>
      <article className={styles.difficulties}>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectEasyDifficulty}
          className={`${styles.difficulty} ${
            isEasySelected && styles.selectedDifficulty
          }`}
        >
          <p>Easy</p>
        </motion.div>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectMediumDifficulty}
          className={`${styles.difficulty} ${
            isMediumSelected && styles.selectedDifficulty
          }`}
        >
          <p>Medium</p>
        </motion.div>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectHardDifficulty}
          className={`${styles.difficulty} ${
            isHardSelected && styles.selectedDifficulty
          }`}
        >
          <p>Hard</p>
        </motion.div>
      </article>
      <motion.button
        variants={QuizSelectionSubCategoryNextSectionButton}
        initial={'hidden'}
        animate={'visible'}
        whileHover={'whileHover'}
        type="button"
        onClick={selectDifficultyAndGoToNextSection}
      >
        <FaArrowAltCircleDown />
      </motion.button>
    </motion.section>
  );
};

export default SelectDifficulty;
