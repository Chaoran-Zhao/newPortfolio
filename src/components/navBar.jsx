import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, IconButton, useTheme, Button, } from "@mui/material";

import { Logo, } from "../assets/index";
import "./navBar.css"

import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const tolgee = useTolgee(['language']);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      className= {theme.palette.mode==='light' ? 'navBar_light ' : 'navBar_dark '}
    >

      <Box
        display="flex"
        flex={1}
        alignItems="center"
      >
        <img className="logo" src={Logo} alt="Logo" title="dark logo" style={{display: window.innerWidth <500 ?'none' : 'flex'}}/>
        
      </Box>

      <Box display="flex" flex={10} justifyContent="center">
        <Button
          style={{ color: colors.primary[100], fontSize: window.innerWidth <500 ? "0.65rem" : "1rem" }}
          className="tab"
        >
          <T keyName="nav_about" />
        </Button>
        <Button
          style={{ color: colors.primary[100],fontSize: window.innerWidth <500 ? "0.65rem" : "1rem" }}
          className="tab"
        >
          <T keyName="nav_projects" />
        </Button>
        <Button
          style={{ color: colors.primary[100], fontSize: window.innerWidth <500 ? "0.65rem" : "1rem"  }}
          className="tab"
        >
          <T keyName="nav_interests" />
        </Button>
        <Button
          style={{ color: colors.primary[100], fontSize: window.innerWidth <500 ? "0.65rem" : "1rem"  }}
          className="tab"
        >
          <T keyName="nav_resume" />
        </Button>
      </Box>

      <Box display="flex" 
        flex={1} 
        justifyContent="flex-end"
        >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={()=>{
          if (tolgee.getLanguage() === 'en'){
            tolgee.changeLanguage('ch')
          }else{
            tolgee.changeLanguage('en')
          }
          }
          
          }>
          <TranslateIcon />        
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;