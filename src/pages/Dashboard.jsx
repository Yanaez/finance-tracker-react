import BalanceCards from "../components/dashboard/BalanceCards";
import ExpenseChart from "../components/ExpenseChart";
import TopCategories from "../components/dashboard/TopCategories";

function Dashboard({ transactions }) {
  return (
    <div className="flex flex-col gap-6">
      <BalanceCards transactions={transactions} />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-purple-700 mb-3">
            Expense Analytics
          </h2>

          <ExpenseChart transactions={transactions} />
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-purple-700 mb-3">Top Categories</h2>

          <TopCategories transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
