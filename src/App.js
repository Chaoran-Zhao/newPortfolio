import { useEffect, useCallback } from "react"
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Main from "./components/main";
import About from "./components/About/About";
import Projects from "./components/Proj/Projects";
import Interests from "./components/Interests/Interests";
import Resume from "./components/Resume/resume";

import Background from "./components/background";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import {T, } from "@tolgee/react"

import CloudQueueIcon from '@mui/icons-material/CloudQueue';


function App() {
  // color mode
  const [theme, colorMode] = useMode();

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
          soundCloud.style.color = "#457b9d";
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
          <Routes>
            <Route path="/" element={ <> <Background /> <Main /> </>} />
            <Route path="/about" element={ <About />} />
            <Route path="/projects" element={ <Projects />} />
            <Route path="/interests" element={ <Interests />} />
            <Route path="/resume" element={ <Resume />} />
          </Routes>      
          <Footer /> 
        </div>

        
        </ThemeProvider>
     </ColorModeContext.Provider>
    
    
  );
}

export default App;
