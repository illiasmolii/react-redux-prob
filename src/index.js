import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import { App } from './App';
import rootReducer from './state/reducers';

import './index.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
