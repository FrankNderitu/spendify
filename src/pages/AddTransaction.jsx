import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { addTransaction } from "../services/api";

const AddTransaction = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (transactionData) => {
    setLoading(true);
    try {
      await addTransaction(transactionData);
      alert("Transaction added successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Make sure json-server is running on port 3000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto pt-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Add New Transaction</h1>
        <button 
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white"
        >
          ← Back to Dashboard
        </button>
      </div>

      <TransactionForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default AddTransaction;