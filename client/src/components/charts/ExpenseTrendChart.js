import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseTrendChart = ({ expenses }) => {
  const dates = [
    ...new Set(
      expenses.map((expense) => new Date(expense.date).toLocaleDateString())
    ),
  ];
  const expenseData = dates.map((date) =>
    expenses
      .filter((expense) => new Date(expense.date).toLocaleDateString() === date)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Expense Over Time",
        data: expenseData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3>Expense Trend Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default ExpenseTrendChart;
