import { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import TransactionCard from '../components/TransactionCard';
import { formatCurrency } from '../utils/helpers';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log(
      "🏠 Dashboard loaded - Member 3 should implement data fetching here"
    );
  }, []);

  return (
    <div className="space-y-10 px-4 py-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor your income and expenses easily.
          </p>
        </div>

        <a
          href="/add"
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl font-medium text-white shadow-lg transition-all duration-300 text-center"
        >
          + New Transaction
        </a>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Balance */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-xl hover:bg-gray-800 transition-all duration-300">

          <p className="text-gray-400">
            Total Balance
          </p>

          <p className="text-4xl font-bold text-emerald-400 mt-4">
            $0.00
          </p>

        </div>

        {/* Income */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-xl hover:bg-gray-800 transition-all duration-300">

          <p className="text-gray-400">
            Total Income
          </p>

          <p className="text-4xl font-bold text-emerald-400 mt-4">
            $0.00
          </p>

        </div>

        {/* Expenses */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-xl hover:bg-gray-800 transition-all duration-300">

          <p className="text-gray-400">
            Total Expenses
          </p>

          <p className="text-4xl font-bold text-red-400 mt-4">
            $0.00
          </p>

        </div>

      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-xl">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-white">
            Recent Transactions
          </h2>

          <span className="text-sm text-gray-500">
            Latest activity
          </span>

        </div>

        <div className="bg-gray-950 border border-dashed border-gray-700 rounded-2xl py-12 px-6">

          <p className="text-gray-400 text-center text-lg">
            Recent transactions will appear here once connected to the backend.
          </p>

          <p className="text-gray-500 text-center text-sm mt-3">
            Integration in progress by Member 3 and Member 4.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Home;