import { createSelector } from 'reselect'
import { denormalize } from 'normalizr';

import { category } from 'Schemas';
import { entitiesSelector } from 'Selectors/entities';

export const categoriesSelector = (state) => {
  return state.getIn(['data', 'categories']);
}

export const denormalizedCategoriesSelector = createSelector(
  categoriesSelector,
  entitiesSelector,
  (categoryIds, entities) =>
    categoryIds.map(id => denormalize(id, category, entities))
);

