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