import React from 'react';
import style from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({
  title,
  amount,
  data,
}: {
  title: string;
  amount: number;
  data: Date;
}) {
  return (
    <div className={style.item}>
      <ExpenseDate date={data} />
      <div className={style.description}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.price}>{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
