import { fromJS } from 'immutable';

import { SHOW_SPINNER, HIDE_SPINNER } from 'State/action-types';

const initialState = fromJS({
  show: false,
});

function spinner(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return state.set('show', true);
    case HIDE_SPINNER:
      return state.set('show', false);
    default:
      return state;
  }
}

export default spinner;
