import { combineReducers } from "redux";

import navigation from "./navigation";
import auth from "./auth";
import balance from "./balance";
import payments from "./payments";

const rootReducer = combineReducers({
  navigation, payments, auth, balance
});

export default rootReducer;