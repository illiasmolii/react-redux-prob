import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import './index.css';

import { combineReducers, createStore } from "redux";
import { navigation } from "./state/reducers/navigation";

const rootReducer = combineReducers({
  navigation
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
