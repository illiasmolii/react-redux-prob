import { navigationAction, pages } from '../actions/navigation';

const initialState = {
  page: pages.MY_PAYMENTS
};

const navigation = (state = initialState, action) => {

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
