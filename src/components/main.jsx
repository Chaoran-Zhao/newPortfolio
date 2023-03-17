import React, { useEffect } from 'react'

import MovingComponent from 'react-moving-text'
import Typing from 'react-typing-animation';


import Social from './Social'
import { T } from "@tolgee/react"
import './main.css'


import { init } from "../utilis/aircraftLayer";

const Main = () => {
  // aircraft model
  useEffect(() => {
    init()
  }, [])

  

  return (
    <div className='main'>
      <div className='main-content'>
        <div className='upper'>
          <div>
            <h3 className='hello'>Hey! This is </h3>
            <MovingComponent
              type="bounce"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="3"
              fillMode="none">
              <h1 className='my-name title'><T keyName="myName" /></h1>
            </MovingComponent>
            <div>
              <h4 style={{color: "#457b9d"}}>
                I'm A
              <Typing loop='true'>
                <Typing.Speed ms={80} />
                <span>Full Stack Web Developer</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={30} />
                <span>Mechanical Engineering Graduate With a Passion For CAD Modelling</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={70} />
                <span>Potential Architects If Have Won the Powerball Someday</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={60} />
                <span>Badminton Love And Aiming For A Win In The Amateur Open Game.</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={65} />
              </Typing>
              </h4>
            </div>        
            <Social />
          </div>       
          <div className='planeContainer'></div>
        </div>
        
        

      </div>
    </div>
  )
}

export default Main