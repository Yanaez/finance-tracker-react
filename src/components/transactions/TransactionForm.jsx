import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      name,
      amount,
      category,
      type,
      date: new Date(),
    };

    addTransaction(newTransaction);

    setName("");
    setAmount("");
    setCategory("");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
      <h2 className="text-lg font-semibold text-purple-700 mb-4">
        Tambah Transaksi
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-3"
      >
        <input
          className="border border-purple-200 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          type="text"
          placeholder="Nama transaksi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border border-purple-200 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          type="number"
          placeholder="Jumlah"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          className="border border-purple-200 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <select
          className="border border-purple-200 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          className="md:col-span-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition font-semibold"
          type="submit"
        >
          Tambah Transaksi
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
