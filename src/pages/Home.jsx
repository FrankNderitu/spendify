import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';   // we'll create this next

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link
          to="/add"
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
        >
          + New Transaction
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Balance</p>
          <p className={`text-4xl font-bold mt-2 ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {formatCurrency(balance)}
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Income</p>
          <p className="text-4xl font-bold mt-2 text-emerald-400">
            {formatCurrency(totalIncome)}
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Expenses</p>
          <p className="text-4xl font-bold mt-2 text-red-400">
            {formatCurrency(totalExpense)}
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-900 rounded-3xl p-8">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
        
        {loading ? (
          <p>Loading...</p>
        ) : transactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet. Add your first one!</p>
        ) : (
          <div className="space-y-4">
            {transactions.slice(0, 5).map(tx => (
              <div key={tx.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-2xl">
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500">{tx.category} • {tx.date}</p>
                </div>
                <p className={`font-semibold ${tx.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;