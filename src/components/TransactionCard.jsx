import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';

const TransactionCard = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === "income";

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 flex items-center justify-between hover:bg-gray-700 transition-all">
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-white">{transaction.description}</h3>
        <p className="text-gray-400 text-sm mt-1">
          {transaction.category || "Other"} • {transaction.date}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p className={`font-bold text-2xl ${isIncome ? "text-emerald-400" : "text-red-400"}`}>
          {isIncome ? "+" : "-"}{formatCurrency(transaction.amount)}
        </p>

        <div className="flex gap-3">
          <Link
            to={`/edit/${transaction.id}`}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-sm font-medium transition"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(transaction.id)}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl text-sm font-medium transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;