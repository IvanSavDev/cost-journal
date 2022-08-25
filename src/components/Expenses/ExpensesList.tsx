import React from 'react';
import { ListExpenses } from 'Src/types/types';
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';

const ExpensesList = ({ expenses }: ListExpenses) => {
  if (expenses.length === 0) {
    return <h2 className={styles.fallback}>No expenses found.</h2>;
  }
  return (
    <ul className={styles.list}>
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
