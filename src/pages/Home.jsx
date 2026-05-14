import { useEffect, useMemo, useState } from "react";

import TransactionCard from "../components/TransactionCard";

import {
  getTransactions,
  deleteTransaction,
} from "../services/api";

import { formatCurrency } from "../utils/helpers";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  // FETCH TRANSACTIONS
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      const data = await getTransactions();

      setTransactions(data);
    } catch (err) {
      setError("Failed to load transactions.");
    } finally {
      setLoading(false);
    }
  }

  // DELETE TRANSACTION
  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    try {
      await deleteTransaction(id);

      setTransactions((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (err) {
      alert("Failed to delete transaction.");
    }
  }

  // FILTERED DATA
  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;

    return transactions.filter(
      (item) => item.type === filter
    );
  }, [transactions, filter]);

  // TOTALS
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading transactions...
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-400 flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      {/* PAGE TITLE */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Spendify Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Track your income and expenses
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <p className="text-gray-400">Total Balance</p>

          <h2 className="text-3xl font-bold mt-2 text-blue-400">
            {formatCurrency(totalBalance)}
          </h2>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <p className="text-gray-400">Income</p>

          <h2 className="text-3xl font-bold mt-2 text-green-400">
            {formatCurrency(totalIncome)}
          </h2>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <p className="text-gray-400">Expenses</p>

          <h2 className="text-3xl font-bold mt-2 text-red-400">
            {formatCurrency(totalExpenses)}
          </h2>
        </div>

      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-4 mb-8">

        {["all", "income", "expense"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-xl capitalize transition ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {type}
          </button>
        ))}

      </div>

      {/* TRANSACTIONS */}
      <div className="space-y-4">

        {filteredTransactions.length === 0 ? (
          <div className="bg-gray-800 rounded-2xl p-6 text-gray-400">
            No transactions found.
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
              onDelete={handleDelete}
            />
          ))
        )}

      </div>
    </div>
  );
}