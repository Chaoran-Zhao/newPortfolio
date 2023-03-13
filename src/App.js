import { init } from "./utilis/aircraftLayer";
import { useEffect } from "react"

import NavBar from "./components/navBar";
import Main from "./components/main"

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import {T, } from "@tolgee/react"

function App() {
  const [theme, colorMode] = useMode();

  useEffect(() => {
    init()
  }, [])
  


  return (
     <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className= {theme.palette.mode==='light' ? 'light' : 'dark'}>
          <NavBar />
          <Main />
        </div>
        </ThemeProvider>
     </ColorModeContext.Provider>
    
  );
}

export default App;
