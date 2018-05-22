import React from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app');

// Components
// import { categories as fakeList } from '../src/api.json';
// import Playlist from '../playlist/presentational/playlist';
// const lists = fakeList.map((listItem) => {
//   return <Playlist data={listItem} key={listItem.id} />;
// })

import Home from '../pages/container/home';

render(<Home />, app);
