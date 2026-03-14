import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function CalendarPage({ transactions }) {
  const [date, setDate] = useState(new Date());

  const selectedTransactions = transactions.filter((t) => {
    if (!t.date) return false;

    const d = new Date(t.date);

    return (
      d.getDate() === date.getDate() &&
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear()
    );
  });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-xl shadow">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Transactions</h2>

        {selectedTransactions.map((t) => (
          <div key={t.id} className="border-b py-2 flex justify-between">
            <span>{t.name}</span>
            <span>${t.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
