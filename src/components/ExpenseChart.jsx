import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ transactions }) {
  const categories = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      if (!categories[tx.category]) {
        categories[tx.category] = 0;
      }

      categories[tx.category] += Number(tx.amount);
    }
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categories),
      },
    ],
  };

  return (
    <div style={{ width: "300px" }}>
      <h2>Expense Chart</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
