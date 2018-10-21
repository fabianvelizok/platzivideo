import { createSelector } from 'reselect'
import { denormalize } from 'normalizr';

export const entitiesSelector = (state) => {
  return state.getIn(['data', 'entities']);
}

export const mediaByIdSelector = (mediaId) =>
  state.getIn(['data', 'entities', 'mediaFiles', mediaId]
);

