function BalanceCards({ transactions }) {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Balance</p>
        <h2 className="text-3xl font-bold mt-2">Rp {balance}</h2>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Income</p>
        <h2 className="text-3xl font-bold text-green-600 mt-2">Rp {income}</h2>
      </div>

      <div className="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Expense</p>
        <h2 className="text-3xl font-bold text-red-600 mt-2">Rp {expense}</h2>
      </div>
    </div>
  );
}

export default BalanceCards;
