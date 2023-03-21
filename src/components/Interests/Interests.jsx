import React from 'react'
import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';
import Model from './model'

const Interests = () => {
  return (
    <><h1 className='title'> <T keyName='nav_interests' /></h1>
    <div className='modelInt' style={{position: 'absolute', top:'200px'}}>
      <Model />
    </div></>
  )
}

export default Interests