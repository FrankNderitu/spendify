import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

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

  const filteredTransactions = transactions.filter(tx => {
    if (filter === 'income') return tx.type === 'income';
    if (filter === 'expense') return tx.type === 'expense';
    return true;
  });

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
            ${balance.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Income</p>
          <p className="text-4xl font-bold mt-2 text-emerald-400">
            ${totalIncome.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400 text-sm">Total Expenses</p>
          <p className="text-4xl font-bold mt-2 text-red-400">
            ${totalExpense.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {['all', 'income', 'expense'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-2xl capitalize font-medium transition ${
              filter === f 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="bg-gray-900 rounded-3xl p-8">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
        
        {loading ? (
          <p>Loading...</p>
        ) : filteredTransactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet.</p>
        ) : (
          <div className="space-y-4">
            {filteredTransactions.slice(0, 8).map(tx => (
              <div key={tx.id} className="flex justify-between items-center bg-gray-800 p-5 rounded-2xl">
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500">{tx.category} • {tx.date}</p>
                </div>
                <p className={`font-semibold text-lg ${tx.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {tx.type === 'income' ? '+' : '-'}${Number(tx.amount).toLocaleString()}
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