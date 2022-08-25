import React, { FormEvent, useState } from 'react';
import { IExpense } from 'Src/types/types';
import styles from './ExpensesForm.module.css';

type propsType = {
  onSaveExpenseData: (enteredExpenseData: IExpense) => void;
  onCancelAddExpenses: () => void;
};

const ExpensesForm = ({
  onSaveExpenseData,
  onCancelAddExpenses,
}: propsType) => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredAmount, setEnteredAmount] = useState<string>('');
  const [enteredDate, setEnteredDate] = useState<string>('');

  const titelChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const resetDataForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onSaveExpenseData({
      id: Math.random().toString(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    });
    onCancelAddExpenses();
    resetDataForm();
  };

  const cancelFormHandler = () => {
    onCancelAddExpenses();
    resetDataForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="" className={styles.controlTitle}>
            Title
          </label>
          <input
            className={styles.controlText}
            type="text"
            value={enteredTitle}
            onChange={titelChangeHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="" className={styles.controlTitle}>
            Amount
          </label>
          <input
            className={styles.controlText}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="" className={styles.controlTitle}>
            Date
          </label>
          <input
            className={styles.controlText}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={cancelFormHandler}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
