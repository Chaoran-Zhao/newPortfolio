import React from 'react'
import MovingComponent from 'react-moving-text'
import { TextLoop } from "react-text-loop-next";

import Social from './Social'
import { T } from "@tolgee/react"
import './main.css'
import { UNSW } from '../assets'
import TechStack from './techStack'
import TechSphere from './techSphere'

const Main = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <div className='upper'>
          <div>
            <h3 className='hello'>Hello! I'm </h3>
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
            <TextLoop
  children={[
    "Trade faster",
    "Increase sales",
    "Stock winners",
    "Price perfectly",
  ]}
/>
            

            <h4 style={{color: "#457b9d"}}><T keyName='description' /></h4>
            <Social />
          </div>       
          <div className='planeContainer'></div>
        </div>
        
        {/* <div className='about-me' style={{marginTop: window.innerWidth < 600 ? '1rem' :'5rem'}}>
          <div className='Education'>
            <div className='about_Container'>
              <div className='imageContainer'>
                <a href='https://www.unsw.edu.au/'><img src={UNSW} className='unswImg' alt='' /></a>
              </div>
              <div className='edu'>
                <h4><T keyName='master' /> </h4>
                <h5> - <T keyName='master1' /> </h5>
                <h5> - <T keyName='master2' /></h5>
              </div>
            </div>
            <div className='about_Container'>
              <div className='imageContainer'>
                <a href='https://www.unsw.edu.au/'><img src={UNSW} className='unswImg'alt='' /></a>
              </div>
              <div className='edu'>
                <h4><T keyName='bachelor' /></h4>
                <h5> - <T keyName='bachelor1' /></h5>
                <h5> - <T keyName='bachelor2' /></h5>
              </div>
            </div>
          </div>
        </div>

        <TechStack />
        <TechSphere /> */}

      </div>
    </div>
  )
}

export default Main