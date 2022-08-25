import React from 'react';
import style from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

type ExpenseItemProps = {
  title: string;
  amount: number;
  date: Date;
};

function ExpenseItem({ title, amount, date }: ExpenseItemProps) {
  return (
    <li>
      <Card className={style.item}>
        <ExpenseDate date={date} />
        <div className={style.description}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.price}>{`$${amount}`}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
