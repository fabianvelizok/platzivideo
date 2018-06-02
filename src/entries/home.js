import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/container/home';
import rootReducer from '../reducers';
import { Map } from 'immutable';

// Middlewares
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const homeContainer = document.getElementById('home-container');

const store = createStore(
  rootReducer,
  Map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  ),
);

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
