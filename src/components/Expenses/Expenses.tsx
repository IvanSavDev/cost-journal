import React, { useState } from 'react';
import { ListExpenses } from 'Src/types/types';
import Card from '../UI/Card';
import style from './Expenses.module.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }: ListExpenses) => {
  const [filteredYear, setFilteredYear] = useState<string>('all');

  const filterYearChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(({ date }) =>
    filteredYear === 'all' ? true : String(date.getFullYear()) === filteredYear
  );

  return (
    <Card className={style.expenses}>
      <ExpensesFilter
        onChangeFilterYear={filterYearChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
