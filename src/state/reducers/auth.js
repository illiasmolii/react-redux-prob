import { authAction } from "../actions/auth";
import initialState from "./initialState";

const auth = (state = initialState.auth, action) => {

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