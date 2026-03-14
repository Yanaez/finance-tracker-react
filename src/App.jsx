import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import CalendarPage from "./pages/CalendarPage";

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  function updateTransaction(updated) {
    setTransactions(
      transactions.map((t) => (t.id === updated.id ? updated : t)),
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300 p-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<Dashboard transactions={transactions} />}
            />

            <Route
              path="/transactions"
              element={
                <Transactions
                  transactions={transactions}
                  addTransaction={addTransaction}
                  deleteTransaction={deleteTransaction}
                  updateTransaction={updateTransaction}
                />
              }
            />

            <Route
              path="/calendar"
              element={<CalendarPage transactions={transactions} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
