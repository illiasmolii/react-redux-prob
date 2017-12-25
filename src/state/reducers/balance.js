import { balanceAction } from "../actions/balance";

const initialBalance = {
  value: 1000
};

// HardCoded
const eurUsdRate = 1.1;

// assume that all accounts are usd based
const adjustCurrencyRate = (amount, currency) => {

  switch (currency) {
    case 'eur':
      return amount * eurUsdRate;

    default:
      return amount;
  }
};

export const balance = (state = initialBalance, action) => {

  switch (action.type) {
    case balanceAction:
      return Object.assign({}, state, {
        value: state.value + adjustCurrencyRate(action.amount, action.currency)
      });

    default:
      return state;
  }
};