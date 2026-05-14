import { formatCurrency } from "../utils/helpers";

export default function TransactionCard({
  transaction,
  onDelete,
}) {
  const isIncome = transaction.type === "income";

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5 flex items-center justify-between hover:border-gray-500 transition">

      {/* LEFT SIDE */}
      <div>
        <h3 className="text-white font-semibold text-lg">
          {transaction.description}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          {transaction.date}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        <p
          className={`font-bold text-lg ${
            isIncome
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {isIncome ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </p>

        <button
          onClick={() => onDelete(transaction.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}