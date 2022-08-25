import React from 'react';
import ChartBar from './ChartBar';
import styles from './Chart.module.css';
import { IChartDataPoint } from 'Src/types/types';

type ChartProps = {
  dataPoints: Array<IChartDataPoint>;
};

const Chart = ({ dataPoints }: ChartProps) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);

  const maxValuePoints = Math.max(...dataPointsValues);

  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValuePoints}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
