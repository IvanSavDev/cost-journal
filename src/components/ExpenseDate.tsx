import React from 'react';
import dateStyle from './ExpenseDate.module.css';

const ExpenseData = ({ date }: { date: Date }) => {
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className={dateStyle.date}>
      <div className={dateStyle.month}>{month}</div>
      <div className={dateStyle.year}>{year}</div>
      <div className={dateStyle.day}>{day}</div>
    </div>
  );
};

export default ExpenseData;
