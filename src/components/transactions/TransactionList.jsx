function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-purple-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="border-t hover:bg-purple-50">
              <td className="p-2">{tx.name}</td>
              <td className="p-2">{tx.category}</td>
              <td className="p-2">Rp {tx.amount}</td>

              <td className="p-2">
                <button
                  className="text-purple-600 hover:text-purple-900"
                  onClick={() => deleteTransaction(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
