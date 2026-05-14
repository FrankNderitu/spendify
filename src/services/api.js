const BASE_URL = "http://localhost:3001/transactions";

// FETCH ALL TRANSACTIONS
export async function getTransactions() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}

// DELETE TRANSACTION
export async function deleteTransaction(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete transaction");
    }

    return true;
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
}