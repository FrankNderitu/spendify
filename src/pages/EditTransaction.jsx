import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { getTransactions, updateTransaction } from "../services/api";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const allTransactions = await getTransactions();
        const found = allTransactions.find(t => String(t.id) === String(id));
        if (found) setTransaction(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransaction();
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      await updateTransaction(id, updatedData);
      alert("Transaction updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update transaction. Make sure json-server is running.");
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!transaction) return <div className="text-center py-10">Transaction not found</div>;

  return (
    <div className="max-w-lg mx-auto pt-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Edit Transaction</h1>
        <button 
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white"
        >
          ← Back to Dashboard
        </button>
      </div>

      <TransactionForm 
        onSubmit={handleSubmit} 
        initialData={transaction}
        loading={false}
      />
    </div>
  );
};

export default EditTransaction;