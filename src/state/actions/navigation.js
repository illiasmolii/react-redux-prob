export const navigationAction = 'NAVIGATION';

export const pages = {
  BALANCE: 'BALANCE',
  MY_PAYMENTS: 'MY_PAYMENTS',
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export const showBalance = () => {
  return {
    type: navigationAction,
    page: pages.BALANCE
  }
};

export const showMyPayments = () => {
  return {
    type: navigationAction,
    page: pages.MY_PAYMENTS
  }
};

export const showInternal = () => {
  return {
    type: navigationAction,
    page: pages.INTERNAL
  }
};

export const showExternal = () => {
  return {
    type: navigationAction,
    page: pages.EXTERNAL
  }
};