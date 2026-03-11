function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Daftar Transaksi</h2>

      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            {tx.name} - {tx.amount} [{tx.category}]
            <button onClick={() => deleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
