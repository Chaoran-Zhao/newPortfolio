import React from 'react'
import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';
import Model from './model'
import './Interests.css'
import { useNavigate } from "react-router-dom";


const Interests = () => {
  const navigate = useNavigate();

  return (
    <><h1 className='title'> <T keyName='nav_interests' /></h1>
    {/* <div className='modelInt' style={{position: 'absolute', top:'200px'}}>
      <Model />
    </div>*/}

    <div className="flex-container">
      <div className="item" id='inCamera' onClick={() => {navigate("/photo");}}></div>
      <div className="item" id='inAircraft'></div>     
      <div className="item" id='inBadminton'></div>
      <div className="item" id='inTravel'></div>
    </div>
    </> 
  )
}

export default Interests