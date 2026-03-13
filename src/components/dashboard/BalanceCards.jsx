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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg">
        <p className="opacity-80 text-sm">Balance</p>
        <h2 className="text-3xl font-bold mt-2">Rp {balance}</h2>
      </div>

      <div className="bg-white border border-purple-200 p-6 rounded-xl shadow">
        <p className="text-sm text-purple-600">Income</p>
        <h2 className="text-2xl font-bold text-purple-800 mt-2">Rp {income}</h2>
      </div>

      <div className="bg-white border border-purple-200 p-6 rounded-xl shadow">
        <p className="text-sm text-purple-600">Expense</p>
        <h2 className="text-2xl font-bold text-purple-800 mt-2">
          Rp {expense}
        </h2>
      </div>
    </div>
  );
}

export default BalanceCards;
