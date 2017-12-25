export const navigationAction = 'NAVIGATION';

export const pages = {
  BALANCE: 'BALANCE',
  MY_PAYMENTS: 'MY_PAYMENTS',
  PAYMENT_DETAILS: 'PAYMENT_DETAILS',
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export const showBalance = () => {
  return {
    type: navigationAction,
    page: pages.BALANCE,
    payload: undefined
  }
};

export const showMyPayments = () => {
  return {
    type: navigationAction,
    page: pages.MY_PAYMENTS,
    payload: undefined
  }
};

export const showPaymentDetails = (payment) => {
  return {
    type: navigationAction,
    page: pages.PAYMENT_DETAILS,
    payload: payment
  }
};

export const showInternal = () => {
  return {
    type: navigationAction,
    page: pages.INTERNAL,
    payload: undefined
  }
};

export const showExternal = () => {
  return {
    type: navigationAction,
    page: pages.EXTERNAL,
    payload: undefined
  }
};