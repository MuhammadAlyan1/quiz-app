import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import styles from './SelectAmount.module.css';
import { motion } from 'framer-motion';
import {
  openNewSection,
  QuizSelectionSubCategoryHeading,
  amountInput,
  QuizSelectionSubCategoryNextSectionButton,
} from '../../utils/framerMotionVariants';

const SelectAmount = ({ amount, setAmount, setIsAmountSelected }) => {
  function validateAmountAndGoToNextSection() {
    if (amount < 1) return;
    setIsAmountSelected(true);
  }

  return (
    <motion.section
      variants={openNewSection}
      initial={'hidden'}
      animate={'visible'}
      className={styles.amountContainer}
    >
      <motion.h1
        variants={QuizSelectionSubCategoryHeading}
        initial={'hidden'}
        animate={'visible'}
      >
        Quiz Amount
      </motion.h1>
      <motion.input
        variants={amountInput}
        initial={'hidden'}
        animate={'visible'}
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <motion.button
        variants={QuizSelectionSubCategoryNextSectionButton}
        initial={'hidden'}
        animate={'visible'}
        whileHover={'whileHover'}
        type="submit"
        onClick={validateAmountAndGoToNextSection}
      >
        <FaArrowAltCircleDown />
      </motion.button>
    </motion.section>
  );
};

export default SelectAmount;
