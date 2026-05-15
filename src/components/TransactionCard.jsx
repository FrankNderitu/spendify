import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';

const TransactionCard = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === "income";

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5 flex items-center justify-between hover:border-gray-500 transition">
      <div>
        <h3 className="text-white font-semibold text-lg">
          {transaction.description}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          {transaction.category} • {transaction.date}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p className={`font-bold text-xl ${isIncome ? "text-emerald-400" : "text-red-400"}`}>
          {isIncome ? "+" : "-"}{formatCurrency(transaction.amount)}
        </p>

        <div className="flex gap-3">
          <Link
            to={`/edit/${transaction.id}`}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(transaction.id)}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}