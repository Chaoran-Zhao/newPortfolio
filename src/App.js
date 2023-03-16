import { init } from "./utilis/aircraftLayer";
import { useEffect, useCallback } from "react"

import NavBar from "./components/navBar";
import Main from "./components/main";
import TechSphere from "./components/techSphere";
import Background from "./components/background";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import {T, } from "@tolgee/react"

import CloudQueueIcon from '@mui/icons-material/CloudQueue';





function App() {
  // color mode
  const [theme, colorMode] = useMode();

  // aircraft model
  useEffect(() => {
    init()
  }, [])

  //  draggable soundtrack display menu
  const Draggable = require('react-draggable');
  const DraggableCore = Draggable.DraggableCore;


  // sound track functionality
  const soundTrack = async (soundState) => {
    const soundCloud = document.querySelector('.sound-cloud');
    const off = document.querySelector('#off');
    const on = document.querySelector('#on');
    const myAudio = document.querySelector('#myAudio');
      if(soundState === 'off'){
          on.style.display = 'block';
          off.style.display = 'none';
          soundCloud.style.color = "#08fdd8";
          await myAudio.play();
      }
      else if(soundState === 'on'){
          on.style.display = 'none';
          off.style.display = 'block';
          soundCloud.style.color = "#f50057";
          await myAudio.pause();
      }
  }
  

  
  return (
     <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background />
        <header>
          <Draggable>
            <div id="sound">
              <audio id="myAudio" >
                <source src="./SoundTrack.mp3" />
              </audio>
              <CloudQueueIcon className="fab fa-soundcloud sound-cloud"/>
              <span><T keyName="sound"/></span>
              <div className="on-off">
                  <span id="off" onClick={()=>{soundTrack('off')}}>OFF</span>
                  <span id="on" onClick={()=>{soundTrack('on')}}>On</span>
              </div>
            </div> 
          </Draggable>
          
        </header>

        <div className= {theme.palette.mode==='light' ? 'light' : 'dark'}>
          <NavBar />
          <Main />
          
        </div>
        
        </ThemeProvider>
     </ColorModeContext.Provider>
    
    
  );
}

export default App;
