export const paymentAction = 'PAYMENT';

export const paymentActionsTypes = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE', // TODO
  UNDO: 'UNDO'      // TODO
};

export const paymentTypes = {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export const createPayment = (payment, paymentType) => {
  return {
    type: paymentAction,
    paymentActionType: paymentActionsTypes.CREATE,
    paymentType: paymentType,
    payment: payment,
  };
};
