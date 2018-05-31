import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/container/home';
import rootReducer from '../reducers';
import { Map } from 'immutable';

const homeContainer = document.getElementById('home-container');

const store = createStore(
  rootReducer,
  Map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
