import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import './index.css';

import { combineReducers, createStore } from "redux";
import { navigation } from "./state/reducers/navigation";
import { payments } from "./state/reducers/payments";
import { auth } from "./state/reducers/auth";
import { balance } from "./state/reducers/balance";

const rootReducer = combineReducers({
  navigation, payments, auth, balance
});
const store = createStore(rootReducer);

const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};
store.subscribe(() => render());
render();
