import React from 'react'
import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';
import Model from './model'
import SportModel from './sportModel'
import CameraModel from './camera'
import LegoModel from './Lego'
import './Interests.css'
import { useNavigate } from "react-router-dom";
import {  useTheme,  Button} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext, useState } from "react";


const Interests = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  return (
    <><h1 className='title'> <T keyName='nav_interests' /></h1>
    <div className="flex-container">
      <div className="item" id='inCamera' >
        <CameraModel /> 
        <Button style={{backgroundColor: "#457b9d", color: colors.primary[100] }} onClick={() => {navigate("/photo");}}> photograph never lies</Button>
      </div>
      <div className="item" id='inAircraft'>
        <Model />  
        <Button style={{backgroundColor: "#457b9d", color: colors.primary[100] }} onClick={() => {navigate("/aircraft");}}> Made by Engineer</Button>
      </div>     
      <div className="item" id='inBadminton'>
        <SportModel />  
        <Button style={{backgroundColor: "#457b9d", color: colors.primary[100] }} onClick={() => {navigate("/sports");}}> Scream for Sports</Button>
      </div>
      <div className="item" id='inTravel'>
        <LegoModel />
        <Button style={{backgroundColor: "#457b9d", color: colors.primary[100] }} onClick={() => {navigate("/travel");}}> snap! crackle! travel!</Button>
      </div>
    </div>
    </> 
  )
}

export default Interests