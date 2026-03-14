import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-xl px-6 py-3 border border-purple-200 flex items-center justify-between">
      {/* APP TITLE */}
      <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Finance Tracker
      </h1>

      {/* NAVIGATION */}
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1 rounded-lg font-semibold transition ${
              isActive
                ? "text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow"
                : "text-purple-700 hover:bg-purple-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `px-4 py-1 rounded-lg font-semibold transition ${
              isActive
                ? "text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow"
                : "text-purple-700 hover:bg-purple-100"
            }`
          }
        >
          Transactions
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `px-4 py-1 rounded-lg font-semibold transition ${
              isActive
                ? "text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow"
                : "text-purple-700 hover:bg-purple-100"
            }`
          }
        >
          Calendar
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
