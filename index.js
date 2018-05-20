import React from 'react';
import { render } from 'react-dom';
import { categories as fakeList } from './src/api.json';

const app = document.getElementById('app');

// Components
import Playlist from './src/playlist/components/playlist';

const lists = fakeList.map((listItem) => {
  return <Playlist data={listItem} key={listItem.id} />;
})

render(lists, app);
