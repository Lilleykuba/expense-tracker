import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseDistributionChart = ({ expenses }) => {
  if (!Array.isArray(expenses)) {
    console.error("Expenses is not an array:", expenses);
    return <p>Unable to display chart: invalid data format.</p>;
  }

  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const categoryData = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expense Distribution",
        data: categoryData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Expense Distribution by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseDistributionChart;
