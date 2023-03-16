import React from 'react'
import { useContext, useCallback } from "react"
import config from '../preset/links';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ColorModeContext, tokens } from "../theme";
import { useTheme,  } from "@mui/material";
import links from "../preset/links"
import links_dark from '../preset/links_dark'

const Background = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={theme.palette.mode==='light' ? links : links_dark} 
      />
  )
}

export default Background