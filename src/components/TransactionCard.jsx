const TransactionCard = ({ transaction }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:bg-gray-800 hover:shadow-xl transition-all duration-300">

      {/* Left Section */}
      <div>
        <p className="font-semibold text-white text-lg">
          {transaction?.description || "Transaction"}
        </p>

        <p className="text-sm text-gray-400 mt-1">
          {transaction?.category} • {transaction?.date}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:items-end">
        
        <p
          className={`font-bold text-xl ${
            transaction?.type === "income"
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {transaction?.type === "income" ? "+" : "-"}$
          {transaction?.amount || "0"}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">

          <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-all duration-300">
            Edit
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm transition-all duration-300">
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default TransactionCard;