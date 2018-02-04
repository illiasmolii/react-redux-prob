import { navigationAction } from '../actions/navigation';
import initialState from "./initialState";

const navigation = (state = initialState.navigation, action) => {

  switch (action.type) {
    case navigationAction:
      return Object.assign({}, state, {
          page: action.page,
          payload: action.payload
        });

    default:
      return state;
  }
};

export default navigation;
