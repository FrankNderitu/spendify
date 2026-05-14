import { useNavigate } from 'react-router-dom';

const AddTransaction = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto">
   <h1 className="text-3xl font-bold">Add New Transaction-tested </h1>

  

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-3xl">
        {/* Type Toggle */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Type</label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'income' })}
              className={`flex-1 py-3 rounded-2xl font-medium transition ${
                formData.type === 'income' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'expense' })}
              className={`flex-1 py-3 rounded-2xl font-medium transition ${
                formData.type === 'expense' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              Expense
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount ($)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-emerald-500"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500"
            required
          >
            <option value="">Select Category</option>
            {categories[formData.type].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500"
            placeholder="Monthly salary / Groceries"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-2xl font-semibold text-lg transition disabled:opacity-70"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="bg-gray-900 p-8 rounded-2xl">
        <p className="text-gray-400 text-center py-12 text-lg">
          This is where Member 4 should build the full Transaction Form.<br />
          (Income/Expense toggle, Amount, Category, Description, Date, etc.)
        </p>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Member 4's responsibility: Full form with validation + submit logic
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;