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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Finance Tracker</h1>

        <BalanceCards transactions={transactions} />

        <div className="bg-white p-4 rounded shadow">
          <QuickAdd addTransaction={addTransaction} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <ExpenseChart transactions={transactions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <TopCategories transactions={transactions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <TransactionForm addTransaction={addTransaction} />
        </div>

        <div className="bg-white p-4 rounded shadow">
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
