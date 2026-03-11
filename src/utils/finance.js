export function calculateCategoryTotals(transactions) {
  const totals = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      if (!totals[tx.category]) {
        totals[tx.category] = 0;
      }

      totals[tx.category] += Number(tx.amount);
    }
  });

  return totals;
}
