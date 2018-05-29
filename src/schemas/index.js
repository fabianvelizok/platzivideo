import { normalize, schema } from 'normalizr';
import fakeApi from '../api.json';

const media = new schema.Entity('mediaFiles', {}, {
  processStrategy: (media, parent, key) => ({
    ...media,
    categoryId: parent.id,
  })
});

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media),
});

const categories = new schema.Array(category);

const normalizedData = normalize(fakeApi.categories, categories);

export default normalizedData;
