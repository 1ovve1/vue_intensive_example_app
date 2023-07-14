export function numberFormatUSD(number) {
  return Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
