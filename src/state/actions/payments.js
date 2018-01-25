export const paymentAction = 'PAYMENT';

export const paymentActionsTypes = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  UNDO: 'UNDO'
};

export const paymentTypes = {
  INTERNAL: 'INERNAL',
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
