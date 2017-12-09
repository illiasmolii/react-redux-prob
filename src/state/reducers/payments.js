import { paymentAction, paymentTypes, paymentActionsTypes } from "../actions/payments";

export const payments = (
  state = { payments: [] },
  action
) => {

  switch (action.type) {
    case paymentAction:
      return paymentType(state.payments, action);

    default:
      return state;
  }
}

const paymentType = (
  state = {
    internal: [],
    external: []
  },
  action
) => {

  switch (action.paymentType) {
    case paymentTypes.INTERNAL:
      return paymentActions(state.internal, action);

    case paymentTypes.EXTERNAL:
      return paymentActions(state.external, action);

    default:
      return state;
  }
};

const paymentActions = (state = {}, action) => {

  switch (action.paymentActionType) {
    case paymentActionsTypes.CREATE:
      return [
        ...state,
        action.payment
      ];

    default:
      return state;
  }
};