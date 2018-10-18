import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import logger from 'redux-logger';
import React from 'react';
import thunk from 'redux-thunk';

import About from 'Pages/About/About';
import Contact from 'Pages/Contact/Contact';
import HomeContainer from 'Pages/Home/Home.container';
import Profile from 'Pages/Profile/Profile';
import rootReducer from 'State/reducers';
import Videos from 'Pages/Videos/Videos';

const homeContainer = document.getElementById('home-container');

const store = createStore(
  rootReducer,
  Map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  ),
);

render(
  (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            component={HomeContainer}
            exact
            path="/"
            strict
          />
          <Route
            component={Videos}
            path="/videos"
            strict
          />
          <Route
            component={Profile}
            path="/profile"
            strict
          />
          <Route
            component={About}
            path="/about"
            strict
          />
          <Route
            component={Contact}
            path="/contact"
            strict
          />
        </Switch>
      </Router>
    </Provider>
  ), homeContainer
);
