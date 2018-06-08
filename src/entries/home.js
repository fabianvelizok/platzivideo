import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/container/home';
import About from '../pages/presentational/about';

import rootReducer from '../reducers';
import { Map } from 'immutable';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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
    <Router>
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/about" component={About} />
      </Switch>
    </Router>
  </Provider>
  , homeContainer
);
