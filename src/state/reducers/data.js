import { fromJS } from 'immutable';

import { SEARCH_MEDIA } from 'State/action-types';
import { normalizedData } from 'Schemas';

const initialState = fromJS({
  entities: normalizedData.entities,
  categories: normalizedData.result,
  search: '',
});

function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MEDIA:
      return state.set('search', action.payload.query.toLowerCase());
    default:
      return state;
  }
}

export default data;
