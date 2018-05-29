import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/container/home';
import reducer from '../reducers/data';
import normalizedData from '../schemas';

const homeContainer = document.getElementById('home-container');

const initialState = {
  data: {
    entities: normalizedData.entities,
    categories: normalizedData.result
  },
  search: [],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
