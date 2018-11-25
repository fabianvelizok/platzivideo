import React from 'react';

import Navbar from 'Components/Navbar/Navbar';

const NotFound = props => (
  <section className="not-found">
    <Navbar />

    <h1 className="not-found__content">
      The page you are looking for was not found :(
    </h1>
  </section>
);

export default NotFound;
