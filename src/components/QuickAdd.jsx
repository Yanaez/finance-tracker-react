import { useState } from "react";

function QuickAdd({ addTransaction }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const parts = text.split(" ");

    if (parts.length < 2) return;

    const name = parts[0];
    const amount = parts[1];

    const transaction = {
      name: name,
      amount: amount,
      category: name,
      type: "expense",
      date: new Date().toISOString().slice(0, 10),
    };

    addTransaction(transaction);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 border rounded-lg p-2"
        type="text"
        placeholder="contoh: makan 20000"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default QuickAdd;
