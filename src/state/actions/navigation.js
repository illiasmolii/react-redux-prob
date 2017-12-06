export const navigationAction = 'NAVIGATION';

export const pages = {
  MY_PAYMENTS: 'MY_PAYMENTS',
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export function showMyPayments() {
  return {
    type: navigationAction,
    page: pages.MY_PAYMENTS
  }
}

export function showInternal() {
  return {
    type: navigationAction,
    page: pages.INTERNAL
  }
}

export function showExternal() {
  return {
    type: navigationAction,
    page: pages.EXTERNAL
  }
}