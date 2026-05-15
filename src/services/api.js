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
const API_URL = 'http://localhost:3000/transactions';

export const getTransactions = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transactions');
  return res.json();
};

export const addTransaction = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateTransaction = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTransaction = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
