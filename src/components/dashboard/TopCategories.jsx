import { calculateCategoryTotals } from "../../utils/finance";

function TopCategories({ transactions }) {
  const totals = calculateCategoryTotals(transactions);

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <ul className="space-y-2">
        {sorted.map(([category, amount]) => (
          <li
            key={category}
            className="flex justify-between bg-purple-50 p-3 rounded-lg"
          >
            <span className="font-medium text-purple-700">{category}</span>

            <span className="font-semibold text-purple-900">Rp {amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopCategories;
