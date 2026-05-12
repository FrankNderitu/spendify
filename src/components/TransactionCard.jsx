const TransactionCard = ({ transaction }) => {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl flex justify-between items-center hover:bg-gray-800 transition-colors">
      <div>
        <p className="font-medium">{transaction?.description || "Transaction"}</p>
        <p className="text-sm text-gray-400">
          {transaction?.category} • {transaction?.date}
        </p>
      </div>

      <div className="text-right">
        <p className={`font-bold text-lg ${transaction?.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
          {transaction?.type === 'income' ? '+' : '-'}${transaction?.amount || '0'}
        </p>
        
        <div className="flex gap-3 mt-3">
          <button className="text-blue-400 hover:text-blue-300 text-sm">
            Edit
          </button>
          <button className="text-red-400 hover:text-red-300 text-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;