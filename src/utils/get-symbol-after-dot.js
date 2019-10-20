export const getSymbolsAfterDot = number => {
  const parts = String(number).split('.')[1];

  return parts ? parts.length : 0;
};
