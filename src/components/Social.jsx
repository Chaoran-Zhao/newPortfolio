import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='social'>
        <a href='https://www.linkedin.com/in/chaoran-zhao-441723245/' target="_blank" className='icons'><BsLinkedin /></a>
        <a href='https://github.com/Chaoran-Zhao' target="_blank" className='icons'><BsGithub /></a>
        <a href='https://www.facebook.com/profile.php?id=100014069076033' target="_blank" className='icons'><BsFacebook /></a>
    </div>
  )
}

export default Social