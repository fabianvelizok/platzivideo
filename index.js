import React from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app');

// Components
import Media from './src/playlist/components/media';

render(<Media
  type="video"
  title="What is responsive design?"
  author="Fabián Veliz"
  image="./src/images/covers/react.jpeg"
  />, app);
