import { useState, useEffect } from 'react';
import { getTransactions, deleteTransaction } from '../services/api';
import TransactionCard from '../components/TransactionCard';
import { formatCurrency } from '../utils/helpers';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this transaction?")) {
      try {
        await deleteTransaction(id);
        fetchTransactions();
      } catch (error) {
        alert("Failed to delete transaction");
      }
    }
  };

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpenses;

  // Filter + Search
  const filteredTransactions = transactions
    .filter(t => {
      const matchesFilter = 
        filter === 'all' || 
        (filter === 'income' && t.type === 'income') || 
        (filter === 'expense' && t.type === 'expense');
      
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (t.category && t.category.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
          <p className={`text-4xl font-bold mt-3 ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {formatCurrency(balance)}
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Income</p>
          <p className="text-4xl font-bold text-emerald-400 mt-3">{formatCurrency(totalIncome)}</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Expenses</p>
          <p className="text-4xl font-bold text-red-400 mt-3">{formatCurrency(totalExpenses)}</p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500"
        />
        
        <div className="flex gap-3">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-6 py-3 rounded-xl ${filter === 'all' ? 'bg-white text-black' : 'bg-gray-800'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('income')} 
            className={`px-6 py-3 rounded-xl ${filter === 'income' ? 'bg-emerald-600' : 'bg-gray-800'}`}
          >
            Income
          </button>
          <button 
            onClick={() => setFilter('expense')} 
            className={`px-6 py-3 rounded-xl ${filter === 'expense' ? 'bg-red-600' : 'bg-gray-800'}`}
          >
            Expense
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions ({filteredTransactions.length})</h2>
        
        {filteredTransactions.length === 0 ? (
          <p className="text-gray-400 text-center py-16">No matching transactions found.</p>
        ) : (
          <div className="space-y-4">
            {filteredTransactions.map(transaction => (
              <TransactionCard 
                key={transaction.id} 
                transaction={transaction} 
                onDelete={handleDelete} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;