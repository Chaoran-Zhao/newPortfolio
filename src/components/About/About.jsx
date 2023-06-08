import React from 'react';

import { T } from '@tolgee/react';
import './about.css';
import TechStack from './techStack';
import { StaticCloud } from './iconSphere';

const About = () => {
  // document.querySelector('canvas').style.display = 'none'
  return (
    <div class="background-element">
      <h1 className="title">
        {' '}
        <T keyName="nav_about" />
      </h1>
      <div class="grid-container ">
        <div className="grid-item">
        <p className="abouttext">
            <T keyName="about" />
          </p>
          <p className="abouttext">
            <T keyName="about1" />
          </p>

          <p className="abouttext">
            <T keyName="about2" />
          </p>

          <p className="abouttext">
            <T keyName="about3" />
          </p>
          <p className="abouttext">
            <T keyName="about4" />
          </p>

          <TechStack />
        </div>

        <div className="grid-item">
          <StaticCloud />
        </div>
      </div>
    </div>
  );
};

export default About;
