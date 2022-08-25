import React from 'react';
import styles from './ExpensesFilter.module.css';

type ExpensesFilterProps = {
  onChangeFilterYear: (selectedYear: string) => void;
  selectedYear: string;
};

const ExpensesFilter = ({
  selectedYear,
  onChangeFilterYear,
}: ExpensesFilterProps) => {
  const yearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilterYear(event.target.value);
  };

  return (
    <div className={styles.expensesFilter}>
      <div className={styles.control}>
        <label htmlFor="filter">Filter by year</label>
        <select
          name="year"
          id="filter"
          value={selectedYear}
          onChange={yearChangeHandler}
        >
          <option value="all">all</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
