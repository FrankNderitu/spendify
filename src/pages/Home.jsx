import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionCard from '../components/TransactionCard';

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
        console.error(err);
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

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this transaction?')) return;
    try {
      await fetch(`http://localhost:3001/transactions/${id}`, { method: 'DELETE' });
      setTransactions(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      alert('Failed to delete');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link
          to="/add"
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
        >
          + New Transaction
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400">Total Balance</p>
          <p className={`text-4xl font-bold mt-2 ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {balance.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400">Total Income</p>
          <p className="text-4xl font-bold mt-2 text-emerald-400">
            {totalIncome.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <p className="text-gray-400">Total Expenses</p>
          <p className="text-4xl font-bold mt-2 text-red-400">
            {totalExpense.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        {['all', 'income', 'expense'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-3 rounded-2xl capitalize ${
              filter === f ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {filteredTransactions.map(tx => (
          <TransactionCard
            key={tx.id}
            transaction={tx}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

