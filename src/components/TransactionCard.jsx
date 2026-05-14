const TransactionCard = ({ transaction }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:bg-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">

      {/* Left Section */}
      <div className="space-y-1">

        <p className="font-semibold text-white text-lg">
          {transaction?.description || "Transaction"}
        </p>

        <p className="text-sm text-gray-400">
          {transaction?.category} • {transaction?.date}
        </p>

      </div>

      {/* Right Section */}
      <div className="flex flex-col md:items-end gap-2">

        <p
          className={`font-bold text-xl tracking-wide ${
            transaction?.type === "income"
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {transaction?.type === "income" ? "+" : "-"}$
          {transaction?.amount || "0"}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white text-sm transition-all duration-300 shadow-md">
            Edit
          </button>

          <button className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 hover:scale-105 text-white text-sm transition-all duration-300 shadow-md">
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default TransactionCard;