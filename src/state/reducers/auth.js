import { authAction } from "../actions/auth";

const auth = (state = {}, action) => {

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

export default auth;