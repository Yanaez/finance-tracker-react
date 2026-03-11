import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      name,
      amount,
      category,
      type,
    };

    addTransaction(newTransaction);

    setName("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama transaksi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">Tambah</button>
    </form>
  );
}

export default TransactionForm;
