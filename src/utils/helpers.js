export function formatCurrency(value) {
  const number = Number(value);

  if (isNaN(number)) {
    return "KES 0";
  }

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
  }).format(number);
}