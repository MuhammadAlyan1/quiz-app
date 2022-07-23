import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import styles from './SelectAmount.module.css';

const SelectAmount = ({ amount, setAmount, setIsAmountSelected }) => {
  function validateAmountAndGoToNextSection() {
    if (amount < 1) return;
    setIsAmountSelected(true);
  }

  return (
    <section className={styles.amountContainer}>
      <h1>Quiz Amount</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="submit" onClick={validateAmountAndGoToNextSection}>
        <FaArrowAltCircleDown />
      </button>
    </section>
  );
};

export default SelectAmount;
