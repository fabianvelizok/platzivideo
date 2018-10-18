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
import HomeContainer from 'Pages/Home/Home.container';
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
  (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact strict path="/" component={HomeContainer} />
          <Route exact strict path="/about" component={About} />
        </Switch>
      </Router>
    </Provider>
  ), homeContainer
);
