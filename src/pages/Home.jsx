// Home.jsx

import { useEffect, useMemo, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import { getTransactions } from "../utils/api";

export default function Home() {
  // -----------------------------
  // STATE MANAGEMENT
  // -----------------------------

  // Stores all fetched transactions
  const [transactions, setTransactions] = useState([]);

  // Tracks loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Stores possible API or fetch errors
  const [error, setError] = useState(null);

  // -----------------------------
  // FETCH TRANSACTIONS
  // -----------------------------

  useEffect(() => {
    // Async function to fetch data
    const fetchTransactions = async () => {
      try {
        setLoading(true);

        // Fetch data from API utility
        const data = await getTransactions();

        // Save transactions into state
        setTransactions(data);
      } catch (err) {
        console.error("Error fetching transactions:", err);

        // Save error message
        setError("Failed to load transactions.");
      } finally {
        // Stop loading regardless of success/failure
        setLoading(false);
      }
    };

    // Call the async function
    fetchTransactions();
  }, []);

  // -----------------------------
  // CALCULATE SUMMARY DATA
  // -----------------------------

  const summary = useMemo(() => {
    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
      // Assuming each transaction has:
      // {
      //   amount: number,
      //   type: "income" | "expense"
      // }

      if (transaction.type === "income") {
        income += transaction.amount;
      } else {
        expenses += transaction.amount;
      }
    });

    return {
      totalIncome: income,
      totalExpenses: expenses,
      totalBalance: income - expenses,
    };
  }, [transactions]);

  // -----------------------------
  // LOADING STATE
  // -----------------------------

  if (loading) {
    return (
      <div className="home-page">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  // -----------------------------
  // ERROR STATE
  // -----------------------------

  if (error) {
    return (
      <div className="home-page">
        <h2>{error}</h2>
      </div>
    );
  }

  // -----------------------------
  // MAIN UI
  // -----------------------------

  return (
    <div className="home-page">

      {/* =========================
          SUMMARY SECTION
      ========================== */}

      <div className="summary-cards">

        {/* TOTAL BALANCE */}
        <div className="summary-card balance-card">
          <h3>Total Balance</h3>
          <p>KES {summary.totalBalance.toLocaleString()}</p>
        </div>

        {/* TOTAL INCOME */}
        <div className="summary-card income-card">
          <h3>Total Income</h3>
          <p>KES {summary.totalIncome.toLocaleString()}</p>
        </div>

        {/* TOTAL EXPENSES */}
        <div className="summary-card expense-card">
          <h3>Total Expenses</h3>
          <p>KES {summary.totalExpenses.toLocaleString()}</p>
        </div>

      </div>

      {/* =========================
          TRANSACTION LIST
      ========================== */}

      <div className="transactions-section">

        <div className="section-header">
          <h2>Recent Transactions</h2>
        </div>

        {transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <div className="transactions-list">

            {/* Render TransactionCard for each transaction */}
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
              />
            ))}

          </div>
        )}
      </div>
    </div>
  );
}