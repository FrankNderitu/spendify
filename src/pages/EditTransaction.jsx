import { useNavigate, useParams } from 'react-router-dom';

const EditTransaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Edit Transaction #{id}</h1>
        <button 
          onClick={() => navigate('/home')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="bg-gray-900 p-8 rounded-2xl">
        <p className="text-gray-400 text-center py-12 text-lg">
          This is where Member 4 should implement the Edit form.<br />
          (Pre-filled form using transaction ID)
        </p>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Member 4's responsibility: Edit form + update logic
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;