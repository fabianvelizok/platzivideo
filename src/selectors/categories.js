import { createSelector } from 'reselect'
import { denormalize } from 'normalizr';

import { category } from 'Schemas';

export const categoriesSelector = (state) => {
  return state.getIn(['data', 'categories']);
}

export const entitiesSelector = (state) => {
  return state.getIn(['data', 'entities']);
}

export const denormalizedCategoriesSelector = createSelector(
  categoriesSelector,
  entitiesSelector,
  (categoryIds, entities) =>
    categoryIds.map(id => denormalize(id, category, entities))
);

