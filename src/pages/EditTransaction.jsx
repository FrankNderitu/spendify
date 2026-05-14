import { useNavigate, useParams } from 'react-router-dom';

const EditTransaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <h1 className="text-3xl font-bold text-white">
          Edit Transaction #{id}
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
              Existing amount value
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Category
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Existing category value
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Description
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Existing description value
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Date
            </label>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-gray-500">
              Existing date value
            </div>
          </div>

        </div>

        {/* Info Message */}
        <div className="mt-10 text-center">

          <p className="text-gray-400 text-lg">
            Edit form functionality will be implemented by Member 4.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            UI structure and styling prepared for integration.
          </p>

        </div>

      </div>
    </div>
  );
};

export default EditTransaction;