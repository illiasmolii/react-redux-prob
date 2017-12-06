import { navigationAction, pages } from '../actions/navigation';

const initialState = {
  page: pages.MY_PAYMENTS
};

export function navigation(state = initialState, action) {

  switch (action.type) {
    case navigationAction:
      return Object.assign({}, state, {
          page: action.page
        });

    default:
      return state;
  }
}
