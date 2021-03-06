import { paymentAction, paymentTypes, paymentActionsTypes } from "../actions/payments";
import initialState from "./initialState";

const paymentActions = (state, action) => {

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

const paymentType = (state, action) => {

  switch (action.paymentType) {
    case paymentTypes.INTERNAL:
      return Object.assign({}, state, {
        internal: paymentActions(state.internal, action)
      });

    case paymentTypes.EXTERNAL:
      return Object.assign({}, state, {
        external: paymentActions(state.external, action)
      });

    default:
      return state;
  }
};

const payments = (state = initialState.payments, action) => {

  switch (action.type) {
    case paymentAction:
      return paymentType(state, action);

    default:
      return state;
  }
};

export default payments;