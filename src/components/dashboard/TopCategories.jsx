import { calculateCategoryTotals } from "../../utils/finance";

function TopCategories({ transactions }) {
  const totals = calculateCategoryTotals(transactions);

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <h2>Top Spending</h2>

      <ul>
        {sorted.map(([category, amount]) => (
          <li key={category}>
            {category} : {amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopCategories;
