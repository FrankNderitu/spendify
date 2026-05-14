import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { addTransaction } from "../services/api";

const AddTransaction = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await addTransaction(data);
      alert("✅ Transaction added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">Add New Transaction</h1>
      
      <TransactionForm 
        onSubmit={handleSubmit} 
        initialData={{}} 
      />

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;