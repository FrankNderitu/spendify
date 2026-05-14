import { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import TransactionCard from '../components/TransactionCard';
import { formatCurrency } from '../utils/helpers';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("🏠 Dashboard loaded - Member 3 should implement data fetching here");
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <a 
          href="/add" 
          className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-medium transition-colors"
        >
          + New Transaction
        </a>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Balance</p>
          <p className="text-4xl font-bold text-emerald-400 mt-3">$0.00</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Income</p>
          <p className="text-4xl font-bold text-emerald-400 mt-3">$0.00</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Expenses</p>
          <p className="text-4xl font-bold text-red-400 mt-3">$0.00</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <p className="text-gray-400 text-center py-8">
          Recent transactions will be shown here (Member 3 + Member 4 work)
        </p>
      </div>
    </div>
  );
};

export default Home;