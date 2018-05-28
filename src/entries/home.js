import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import data from '../api.json';
import Home from '../pages/container/home';

const homeContainer = document.getElementById('home-container');

const initialState = {
  data: { ...data },
};

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
