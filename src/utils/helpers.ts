export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-ng").format(number);
};

export const formatCurrency = (
  locale: string,
  num: number,
  currency: string
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(num);
};
