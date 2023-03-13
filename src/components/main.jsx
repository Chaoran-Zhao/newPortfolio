import React from 'react'
import MovingComponent from 'react-moving-text'

import Social from './Social'
import { T } from "@tolgee/react"


const Main = () => {
  return (
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
        <h1 className='my-name'><T keyName="myName" /></h1>
      </MovingComponent>
      <h4>Frontend Developer and Growing Fullstack Developer</h4>
      <Social />
      
    </div>
  )
}

export default Main