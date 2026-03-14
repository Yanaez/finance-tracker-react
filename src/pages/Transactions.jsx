import { useState } from "react";
import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";

function Transactions({ transactions, addTransaction, deleteTransaction }) {
  const [filter, setFilter] = useState("");

  const filtered = transactions.filter((t) =>
    t.category?.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1
          className="text-2xl font-bold 
        bg-gradient-to-r from-purple-600 to-blue-500 
        bg-clip-text text-transparent"
        >
          Transactions
        </h1>

        {/* FILTER */}
        <input
          className="border border-purple-200
          bg-white/70 backdrop-blur
          rounded-lg px-3 py-2
          focus:ring-2 focus:ring-blue-400
          outline-none shadow-sm"
          placeholder="Filter category..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* FORM CARD */}
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-purple-100">
        <TransactionForm addTransaction={addTransaction} />
      </div>

      {/* TABLE CARD */}
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-purple-100">
        <TransactionList
          transactions={filtered}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default Transactions;
