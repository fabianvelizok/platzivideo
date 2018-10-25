import { createSelector } from 'reselect'
import { denormalize } from 'normalizr';

import { entitiesSelector } from 'Selectors/entities';
import { media } from 'Schemas';


export const mediaFilesSelector = createSelector(
  entitiesSelector,
  entities => entities.get('mediaFiles')
);

export const byIdSelector = mediaId =>
  createSelector(
    entitiesSelector, entities => denormalize(mediaId, media, entities)
  );

