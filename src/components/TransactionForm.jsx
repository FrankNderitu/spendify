const TransactionForm = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Transaction Form Component
      </h2>
      
      <p className="text-gray-400 text-center py-10">
        Member 4 should build the full reusable form here.<br />
        (Type toggle: Income / Expense, Amount, Category dropdown, Description, Date, Submit button)
      </p>

      <div className="text-center text-sm text-gray-500 mt-8">
        This component will be used by both AddTransaction and EditTransaction pages.
      </div>
    </div>
  );
};

export default TransactionForm;