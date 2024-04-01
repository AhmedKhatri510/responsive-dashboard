export const formatPrice = (currencyCode, price) => {
  let newPrice = parseFloat(price.replace(/,/g, ""));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(newPrice);
};
