const API_URL = 'https://spendify-api-fg0n.onrender.com';

export const getTransactions = async () => {
  const response = await fetch(`${API_URL}/transactions`);
  if (!response.ok) throw new Error('Failed to fetch transactions');
  return await response.json();
};

export const addTransaction = async (transaction) => {
  const response = await fetch(`${API_URL}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Failed to add transaction');
  return await response.json();
};

export const updateTransaction = async (id, transaction) => {
  const response = await fetch(`${API_URL}/transactions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Failed to update transaction');
  return await response.json();
};

export const deleteTransaction = async (id) => {
  const response = await fetch(`${API_URL}/transactions/${id}`, { 
    method: 'DELETE' 
  });
  if (!response.ok) throw new Error('Failed to delete transaction');
  return true;
};