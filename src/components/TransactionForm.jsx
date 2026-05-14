import { useState } from 'react';

const TransactionForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    type: initialData.type || 'expense',
    amount: initialData.amount || '',
    category: initialData.category || '',
    description: initialData.description || '',
    date: initialData.date || new Date().toISOString().split('T')[0],
  });

  const categories = [
    'Salary', 'Food', 'Transport', 'Shopping', 
    'Bills', 'Entertainment', 'Others'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.description || !formData.category) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div>
        <label className="block text-sm text-gray-400 mb-2">Transaction Type</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              formData.type === 'income' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              formData.type === 'expense' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Expense
          </button>
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">Amount (KES)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-emerald-500"
          placeholder="0.00"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
          placeholder="What was this transaction for?"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm text-gray-400 mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-semibold text-lg transition-colors"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;