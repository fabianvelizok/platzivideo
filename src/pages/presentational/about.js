import Navbar from './navbar';
import React, { PureComponent } from 'react'
import './about.css';

class About extends PureComponent {
  render() {
    return (
      <section className="About">
        <Navbar/>
        <div className="AboutContent">
          A video player built on <a href="https://reactjs.org/" target="_blank">React</a>.
        </div>
      </section>
    );
  }
}

export default About;
