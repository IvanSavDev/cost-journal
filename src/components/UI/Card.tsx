import React from 'react';
import style from './Card.module.css';

type propsType = {
  className: string;
  children: Array<JSX.Element> | JSX.Element;
};

const Card = ({ className, children }: propsType) => {
  const classes = `${style.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
