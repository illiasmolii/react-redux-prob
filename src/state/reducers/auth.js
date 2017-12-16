import { authAction } from "../actions/auth";

export const auth = (state = {}, action) => {

  switch (action.type) {
    case authAction:
      return Object.assign({}, state, {
        name: action.name,
        pass: action.pass
      });

    default:
      return state;
  }
};