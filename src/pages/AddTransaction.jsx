import { useNavigate } from 'react-router-dom';

const AddTransaction = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <h1 className="text-3xl font-bold text-white">
          Add New Transaction
        </h1>

        <button
          onClick={() => navigate('/home')}
          className="text-gray-400 hover:text-emerald-400 transition-all duration-300"
        >
          ← Back to Dashboard
        </button>

      </div>

      {/* Form Container */}
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl">

        <div className="space-y-6">

          {/* Placeholder Inputs */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Amount
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Enter amount
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Category
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Select category
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Description
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Enter description
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Date
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Select date
            </div>
          </div>

        </div>

        {/* Info Message */}
        <div className="mt-10 text-center">

          <p className="text-gray-400 text-lg">
            Transaction form functionality will be implemented by Member 4.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            UI structure and styling prepared for integration.
          </p>

        </div>

      </div>
    </div>
  );
};

export default AddTransaction;