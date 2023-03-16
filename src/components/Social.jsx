import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import {  useTheme } from "@mui/material";


const Social = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className='social'>
        <a href='https://www.linkedin.com/in/chaoran-zhao-441723245/' target="_blank" ><BsLinkedin className='icons' style={{color:colors.greenAccent[500]}}/></a>
        <a href='https://github.com/Chaoran-Zhao' target="_blank" ><BsGithub className='icons' style={{color:colors.greenAccent[500]}}/></a>
        <a href='https://www.facebook.com/profile.php?id=100014069076033' target="_blank" ><BsFacebook className='icons' style={{color:colors.greenAccent[500]}}/></a>
    </div>
  )
}

export default Social