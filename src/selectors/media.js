import { createSelector } from 'reselect'
import { denormalize } from 'normalizr';

import { entitiesSelector } from 'Selectors/entities';
import { media } from 'Schemas';

export const byIdSelector = mediaId =>
  createSelector(
    entitiesSelector, entities => denormalize(mediaId, media, entities)
  );

