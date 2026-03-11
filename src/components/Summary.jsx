function Summary({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    const amount = Number(tx.amount);

    if (tx.type === "income") {
      income += amount;
    } else {
      expense += amount;
    }
  });

  const balance = income - expense;

  return (
    <div>
      <h2>Summary</h2>

      <p>Income: {income}</p>
      <p>Expense: {expense}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default Summary;
