import React from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import './Photo.css'
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../../theme";
import { Box, IconButton, useTheme, Button, } from "@mui/material";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../../slider-animations.css";
import Model from './modelin'

const AircraftShow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const content = [
  {
    image: require('../../../assets/Isometric.PNG'),
  },
  {
    image: require('../../../assets/Top.PNG'),
  },
  {
    image: require('../../../assets/side.PNG'),
  },
  {
    image: require('../../../assets/IMG_1431.JPG'),
  },
  {
    image: require('../../../assets/IMG_1433.JPG'),
  },
  {
    image: require('../../../assets/concept.jpg'),
  },
  {
    image: require('../../../assets/9.PNG'),
  },
  ]

  return (
    <><div className='PhotoHeader'>
      <Button style={{ border: '2px solid', borderColor: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}>
        <ArrowBackIcon
          style={{ color: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}
          onClick={() => {
            navigate("/interests");
          } } />
      </Button>
    </div>
    <h1 className='title'>Some Cool Stuff ...</h1>
    <h3 className='subtitle'> Designed Aircraft - PAT10</h3>
    <p className='mainstuff'>This is a fourth year project aimed to design an aircraft with the ability to fulfill a rescure mission in a disaster. The model is built in CATIA.</p>
    
    <div className='modelContainer'>
      <Model />
    </div>

    <div className='sliderContainer'>
      <p className='mainstuff'> The conceptual drawing, the rendered model and the 3D printed model:</p>
      <Slider className="slider-wrapper" autoplay={1000} z-index={1}>
      {content.map((item, index) => (
        <div 
          key={index}
          className="slider-content">
          <img src={item.image} className='sliding-img'></img>
        </div>
      ))}
    </Slider>
    
    </div> 
    <div style={{height:'80px'}}></div>
    {/* <div style={{marginBottom: '40px'}}>
      <h3 className='subtitle'> Designed Vehicle - DELTA</h3>
      <p className='mainstuff'>This is a first year project aimed to develop a low cost all terrain mobile emergency transport system capable of travelling up steep inclines and negotiating steps. The purpose of the system is to transport new advanced spherical impact absorbing containers “SC1”containing food and medical supplies. </p>
    
    </div> */}
   
    </>

    
  )
}

export default AircraftShow