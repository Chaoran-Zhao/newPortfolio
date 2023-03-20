import React from 'react'

import { T } from "@tolgee/react"
import './about.css'
import { UNSW } from '../../assets'
import TechStack from './techStack'
import TechSphere from './techSphere'
import { StaticCloud } from "./iconSphere";

const About = () => {

  // document.querySelector('canvas').style.display = 'none'
  return (
    <>
    <h1 className='title'> About Me</h1>
    <div className='about-me' style={{ marginTop: window.innerWidth < 600 ? '1rem' : '5rem' }}>
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
            <a href='https://www.unsw.edu.au/'><img src={UNSW} className='unswImg' alt='' /></a>
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
    {/* <TechSphere /> */}
    <StaticCloud />
    </> 
  )
}

export default About