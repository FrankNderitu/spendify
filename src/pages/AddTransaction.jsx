import { useNavigate } from 'react-router-dom';

const AddTransaction = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Add New Transaction</h1>
        <button 
          onClick={() => navigate('/home')}
          className="text-gray-400 hover:text-white transition-colors"
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