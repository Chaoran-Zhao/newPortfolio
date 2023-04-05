import React, { useEffect } from 'react';

import MovingComponent from 'react-moving-text';
import Typing from 'react-typing-animation';

import Social from './Social';
import { T } from '@tolgee/react';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <h3 className="hello">Hey! This is </h3>
      <MovingComponent
        type="bounce"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="3"
        fillMode="none"
      >
        <h1 className="my-name title">
          <T keyName="myName" />
        </h1>
      </MovingComponent>
      <h4 style={{ color: '#457b9d' }}>
        I'm A
        <Typing loop="true">
          <Typing.Speed ms={80} />
          <span>Full Stack Web Developer</span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={30} />
          <span>
            Mechanical Engineering Graduate With a Passion For CAD Modelling
          </span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={80} />
          <span>Potential Architects If Have Won the Powerball Someday</span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={60} />
          <span>
            Determined Badminton Player Aiming for Victory in the Games..
          </span>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={65} />
        </Typing>
      </h4>
      <Social />
    </div>
  );
};

export default Main;
