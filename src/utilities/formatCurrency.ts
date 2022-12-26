const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "ksh",
  style: "currency",
  currencyDisplay: "symbol",
});
export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}
