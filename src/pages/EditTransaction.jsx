import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/transactions/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3001/transactions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          amount: Number(formData.amount)
        })
      });
      alert('✅ Transaction updated successfully!');
      navigate('/');
    } catch (error) {
      alert('❌ Failed to update transaction');
    }
  };

  if (loading) return <div className="text-center py-20">Loading transaction...</div>;

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Transaction</h1>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-3xl space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Type</label>
          <div className="flex gap-3">
            <button type="button" onClick={() => setFormData({...formData, type: 'income'})} 
              className={`flex-1 py-4 rounded-2xl font-medium ${formData.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-gray-800'}`}>
              Income
            </button>
            <button type="button" onClick={() => setFormData({...formData, type: 'expense'})} 
              className={`flex-1 py-4 rounded-2xl font-medium ${formData.type === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-800'}`}>
              Expense
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount (KES)</label>
          <input type="number" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} required className="w-full bg-gray-800 rounded-2xl px-5 py-4" />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Category</label>
          <input type="text" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required className="w-full bg-gray-800 rounded-2xl px-5 py-4" />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description</label>
          <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required className="w-full bg-gray-800 rounded-2xl px-5 py-4" />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Date</label>
          <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required className="w-full bg-gray-800 rounded-2xl px-5 py-4" />
        </div>

        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-2xl font-semibold text-lg">
          Update Transaction
        </button>
      </form>
    </div>
  );
};

export default EditTransaction;