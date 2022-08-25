export interface IExpense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ListExpenses {
  expenses: Array<IExpense>;
}

export interface IChartDataPoint {
  label: string;
  value: number;
}
