export const currencyInter = (value, code, currency) => {
  const formatter = new Intl.NumberFormat(code, {
    style: "currency",
    currency: currency,
  });
  return formatter.format(value);
};
