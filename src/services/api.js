const API_URL = 'http://localhost:3000/transactions';

export const getTransactions = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
};

export const addTransaction = async (transaction) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Failed to add');
  return await response.json();
};

export const updateTransaction = async (id, transaction) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Failed to update');
  return await response.json();
};

export const deleteTransaction = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete');
  return true;
};