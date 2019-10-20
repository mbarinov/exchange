export const getCurrentRate = state => (fromCurrency, toCurrency) => {
  const { rates } = state.rates;
  let rate;

  if (!fromCurrency || !toCurrency)
    return {
      rate: null,
    };

  if (fromCurrency === 'USD') {
    rate = rates[toCurrency];
  } else {
    rate = rates[toCurrency] / rates[fromCurrency];
  }

  return {
    rate,
  };
};
