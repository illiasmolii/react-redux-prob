import config from "../../config";

import { balanceAction } from "../actions/balance";

const eurUsdRate = config.eurUsdRate;

// assume that all accounts are usd based
const adjustCurrencyRate = (amount, currency) => {

  switch (currency) {
    case 'eur':
      return amount * eurUsdRate;

    default:
      return amount;
  }
};

const initialBalance = {
  value: 1000
};

const balance = (state = initialBalance, action) => {

  switch (action.type) {
    case balanceAction:
      return Object.assign({}, state, {
        value: state.value + adjustCurrencyRate(action.amount, action.currency)
      });

    default:
      return state;
  }
};

export default balance;