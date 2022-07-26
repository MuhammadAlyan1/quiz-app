import { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

import { motion } from 'framer-motion';
import {
  openNewSection,
  QuizSelectionSubCategoryHeading,
  quizSelectionOptions,
  QuizSelectionSubCategoryNextSectionButton,
} from '../../utils/framerMotionVariants';

import styles from './SelectCategory.module.css';

export default function SelectCategory({
  setIsCategorySelected,
  category,
  setCategory,
}) {
  const [isGeneralKnowledgeSelected, setIsGeneralKnowledgeSelected] =
    useState(false);
  const [isHistorySelected, setIsHistorySelected] = useState(false);
  const [isComputerSelected, setIsComputerSelected] = useState(false);
  const [isVideoGameSelected, setIsVideoGameSelected] = useState(false);

  function selectGeneralKnowledgeCategory() {
    setCategory('generalKnowledge');
    setIsGeneralKnowledgeSelected(true);
    setIsHistorySelected(false);
    setIsVideoGameSelected(false);
    setIsComputerSelected(false);
  }

  function selectHistoryCategory() {
    setCategory('history');
    setIsGeneralKnowledgeSelected(false);
    setIsHistorySelected(true);
    setIsVideoGameSelected(false);
    setIsComputerSelected(false);
  }

  function selectVideoGameCategory() {
    setCategory('videoGame');
    setIsGeneralKnowledgeSelected(false);
    setIsHistorySelected(false);
    setIsVideoGameSelected(true);
    setIsComputerSelected(false);
  }

  function selectComputerCategory() {
    setCategory('computer');
    setIsGeneralKnowledgeSelected(false);
    setIsHistorySelected(false);
    setIsVideoGameSelected(false);
    setIsComputerSelected(true);
  }

  function selectCategoryAndGoToNextSection() {
    if (category) {
      setIsCategorySelected(true);
    }
  }

  return (
    <motion.section
      variants={openNewSection}
      initial={'hidden'}
      animate={'visible'}
      className={styles.categoriesContainer}
    >
      <motion.h1 variants={QuizSelectionSubCategoryHeading}>
        Select Category
      </motion.h1>
      <article className={styles.categories}>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectGeneralKnowledgeCategory}
          className={`${styles.category} ${
            isGeneralKnowledgeSelected && styles.selectedCategory
          }`}
        >
          <p>General Knowledge</p>
        </motion.div>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectHistoryCategory}
          className={`${styles.category} ${
            isHistorySelected && styles.selectedCategory
          }`}
        >
          <p>History</p>
        </motion.div>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectComputerCategory}
          className={`${styles.category} ${
            isComputerSelected && styles.selectedCategory
          }`}
        >
          <p>Computers</p>
        </motion.div>
        <motion.div
          variants={quizSelectionOptions}
          initial={'hidden'}
          animate={'visible'}
          whileHover={'whileHover'}
          whileTap={'whileTap'}
          onClick={selectVideoGameCategory}
          className={`${styles.category} ${
            isVideoGameSelected && styles.selectedCategory
          }`}
        >
          <p>Video Games</p>
        </motion.div>
      </article>
      <motion.button
        variants={QuizSelectionSubCategoryNextSectionButton}
        whileHover={'whileHover'}
        type="button"
        onClick={selectCategoryAndGoToNextSection}
      >
        <FaArrowAltCircleDown />
      </motion.button>
    </motion.section>
  );
}
