import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import logger from 'redux-logger';
import React from 'react';
import thunk from 'redux-thunk';

import About from 'Pages/presentational/about';
import Home from 'Pages/container/home';
import rootReducer from 'State/reducers';

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
