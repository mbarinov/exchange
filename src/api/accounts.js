export function getAccounts() {
  return Promise.resolve({
    isSuccessful: true,
    data: [
      {
        id: 1,
        symbol: '$',
        ticker: 'USD',
        amount: 1034.23,
      },
      {
        id: 2,
        symbol: '£',
        ticker: 'GBP',
        amount: 420.98,
      },
      {
        id: 3,
        symbol: '€',
        ticker: 'EUR',
        amount: 276.01,
      },
      {
        id: 4,
        symbol: '₽',
        ticker: 'RUB',
        amount: 41089,
      },
    ],
  });
}
