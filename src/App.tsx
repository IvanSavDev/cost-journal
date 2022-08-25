import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import { IExpense } from './types/types';
import { INSTANCE_EXPENSES } from './utils/testData';

const App = () => {
  const [expenses, setExpenses] = useState(INSTANCE_EXPENSES);

  const addExpenseHandler = (expenseData: IExpense) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
