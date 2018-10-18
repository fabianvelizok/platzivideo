import React from 'react';

import Navbar from 'Components/Navbar/Navbar';

import './About.css';

const About = () => (
  <section className="about">
    <Navbar />

    <div className="about__content">
      A video player built on <a href="https://reactjs.org/" target="_blank">React</a>.
    </div>
  </section>
);

export default About;
