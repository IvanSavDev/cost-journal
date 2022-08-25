import React from 'react';
import styles from './ChartBar.module.css';

type ChartBarProps = {
  value: number;
  maxValue: number;
  label: string;
};

const ChartBar = ({ maxValue, value, label }: ChartBarProps) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.inner}>
        <div className={styles.fill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChartBar;
