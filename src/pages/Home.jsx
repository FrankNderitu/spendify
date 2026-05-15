import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionCard from '../components/TransactionCard';
import { getTransactions, deleteTransaction } from '../services/api';
import { formatCurrency } from '../utils/helpers';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this transaction?')) return;
    try {
      await deleteTransaction(id);
      setTransactions(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      alert('Failed to delete transaction');
    }
  };

  const filteredTransactions = transactions
    .filter(tx => {
      const matchesFilter = filter === 'all' || tx.type === filter;
      const matchesSearch = tx.description.toLowerCase().includes(search.toLowerCase()) ||
                           tx.category.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link to="/add" className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-medium transition">
          + New Transaction
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Balance</p>
          <p className={`text-4xl font-bold mt-3 ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {formatCurrency(balance)}
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Income</p>
          <p className="text-4xl font-bold mt-3 text-emerald-400">{formatCurrency(totalIncome)}</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Expenses</p>
          <p className="text-4xl font-bold mt-3 text-red-400">{formatCurrency(totalExpense)}</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 flex-1"
        />
        <div className="flex gap-2">
          {['all', 'income', 'expense'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-2xl capitalize font-medium transition ${
                filter === f ? 'bg-emerald-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions ({filteredTransactions.length})</h2>
        {loading ? (
          <p>Loading...</p>
        ) : filteredTransactions.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No transactions found</p>
        ) : (
          <div className="space-y-4">
            {filteredTransactions.map(tx => (
              <TransactionCard key={tx.id} transaction={tx} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;