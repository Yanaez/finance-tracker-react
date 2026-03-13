import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import useLocalStorage from "./hooks/useLocalStorage";
import ExpenseChart from "./components/ExpenseChart";
import TopCategories from "./components/dashboard/TopCategories";
import QuickAdd from "./components/QuickAdd";
import BalanceCards from "./components/dashboard/BalanceCards";

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(index) {
    const updated = transactions.filter((_, i) => i !== index);

    setTransactions(updated);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 tracking-wide">
          Finance Tracker
        </h1>

        <BalanceCards transactions={transactions} />

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <QuickAdd addTransaction={addTransaction} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">
            Expense Chart
          </h2>

          <ExpenseChart transactions={transactions} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">
            Top Spending
          </h2>
          <TopCategories transactions={transactions} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <TransactionForm addTransaction={addTransaction} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
