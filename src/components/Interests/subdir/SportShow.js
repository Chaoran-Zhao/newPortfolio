import React from 'react'
import ImageGallery from 'react-image-gallery';
import { useEffect, useRef, useState, useContext } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import './Photo.css'
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../../theme";
import { Box, IconButton, useTheme, Button, } from "@mui/material";

const AircraftShow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  return (
    <div className='PhotoHeader'>
      <Button style={{border: '2px solid', borderColor: theme.palette.mode==='light'? colors.primary[500]: "#fcfcfc"}}>
        <ArrowBackIcon
          style={{color: theme.palette.mode==='light'? colors.primary[500]: "#fcfcfc"}}
          onClick={() => {
            navigate("/interests");
          }}
        />
      </Button> 
    </div>
    
  )
}

export default AircraftShow