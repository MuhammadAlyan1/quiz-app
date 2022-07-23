import { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

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
    <section className={styles.categoriesContainer}>
      <h1>Select Category</h1>
      <article className={styles.categories}>
        <div
          onClick={selectGeneralKnowledgeCategory}
          className={`${styles.category} ${
            isGeneralKnowledgeSelected && styles.selectedCategory
          }`}
        >
          <p>General Knowledge</p>
        </div>
        <div
          onClick={selectHistoryCategory}
          className={`${styles.category} ${
            isHistorySelected && styles.selectedCategory
          }`}
        >
          <p>History</p>
        </div>
        <div
          onClick={selectComputerCategory}
          className={`${styles.category} ${
            isComputerSelected && styles.selectedCategory
          }`}
        >
          <p>Computers</p>
        </div>
        <div
          onClick={selectVideoGameCategory}
          className={`${styles.category} ${
            isVideoGameSelected && styles.selectedCategory
          }`}
        >
          <p>Video Games</p>
        </div>
      </article>
      <button type="button" onClick={selectCategoryAndGoToNextSection}>
        <FaArrowAltCircleDown />
      </button>
    </section>
  );
}
