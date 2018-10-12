import { normalize, schema } from 'normalizr';
import fakeApi from '../api.js';

export const media = new schema.Entity('mediaFiles', {}, {
  processStrategy: (media, parent, key) => ({
    ...media,
    categoryId: parent.id,
  })
});

export const category = new schema.Entity('categories', {
  playlist: new schema.Array(media),
});

export const categories = new schema.Array(category);

export const normalizedData = normalize(fakeApi.categories, categories);
