import React, { useState } from 'react';
import style from './NewExpenses.module.css';
import ExpensesForm from './ExpensesForm';
import { IExpense } from 'Src/types/types';

type propsType = {
  onAddExpense: (expenseData: IExpense) => void;
};

const NewExpenses = ({ onAddExpense }: propsType) => {
  const [showFrom, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    onAddExpense(enteredExpenseData);
  };

  const addNewExpensesHandler = () => setShowForm(true);
  const cancelAddNewExpensesHandler = () => setShowForm(false);

  return (
    <div className={style.newExpense}>
      {showFrom ? (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpenses={cancelAddNewExpensesHandler}
        />
      ) : (
        <button onClick={addNewExpensesHandler}>Add new expenses</button>
      )}
    </div>
  );
};

export default NewExpenses;
