import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import useLocalStorage from "./hooks/useLocalStorage";
import ExpenseChart from "./components/ExpenseChart";

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
    <div>
      <h1>Finance Tracker</h1>

      <Summary transactions={transactions} />

      <ExpenseChart transactions={transactions} />

      <TransactionForm addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
