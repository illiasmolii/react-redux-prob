export const balanceAction = 'BALANCE';

export const changeBalance = (amount, currency) => {
  return {
    type: balanceAction,
    amount: amount,
    currency: currency
  }
};