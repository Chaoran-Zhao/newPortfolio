import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, IconButton, useTheme, Button } from '@mui/material';

import { Logo } from '../assets/index';
import './navBar.css';

import { T } from '@tolgee/react';
import { useTolgee } from '@tolgee/react';

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [current, setCurrent] = useState('home');

  const tolgee = useTolgee(['language']);

  const navigate = useNavigate();

  return (
    <Box
      sx={{ display: 'flex' }}
      flexDirection="row"
      // justifyContent={window.innerWidth <500 ? "flex-start" :"space-between"}
      alignItems="center"
      p={window.innerWidth < 500 ? -1 : 2}
      className={
        theme.palette.mode === 'light' ? 'navBar_light ' : 'navBar_dark '
      }
      style={{
        height: '80px',
        padding: window.innerWidth < 500 ? 'none' : 'auto',
        width: '100%',
      }}
    >
      <Box flex={1} alignItems="center">
        <Button
          style={{ padding: window.innerWidth < 500 ? '0' : 'auto' }}
          onClick={() => {
            navigate('/');
            setCurrent('home');
          }}
        >
          <img className="logo" src={Logo} alt="Logo" title="home" />
        </Button>
      </Box>

      <Box
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        flex={4}
        justifyContent={'center'}
        alignItems="center"
      >
        {/* <Button
          style={{ color: colors.primary[100], fontSize: window.innerWidth <500 ? "0.65rem" : "1rem" }}
          className= {current==='home' ? "tab-click" : 'tab'}
          id="tabhome"
          onClick={() => {navigate("/"); setCurrent('home')}}
        >
          <T keyName="nav_home" />
        </Button> */}
        <Button
          style={{
            color: colors.primary[100],
            fontSize: window.innerWidth < 500 ? '0.6rem' : '1rem',
            padding: window.innerWidth < 500 ? '4px' : '8px',
          }}
          className={current === 'about' ? 'tab-click' : 'tab'}
          id="tababout"
          onClick={() => {
            navigate('/about');
            setCurrent('about');
          }}
        >
          <T keyName="nav_about" />
        </Button>
        <Button
          style={{
            color: colors.primary[100],
            fontSize: window.innerWidth < 500 ? '0.6rem' : '1rem',
            padding: window.innerWidth < 500 ? '4px' : '8px',
          }}
          className={current === 'projects' ? 'tab-click' : 'tab'}
          id="tabprojects"
          onClick={() => {
            navigate('/projects');
            setCurrent('projects');
          }}
        >
          <T keyName="nav_projects" />
        </Button>
        <Button
          style={{
            color: colors.primary[100],
            fontSize: window.innerWidth < 500 ? '0.6rem' : '1rem',
            padding: window.innerWidth < 500 ? '4px' : '8px',
          }}
          className={current === 'interests' ? 'tab-click' : 'tab'}
          id="tabinterests"
          onClick={() => {
            navigate('/interests');
            setCurrent('interests');
          }}
        >
          <T keyName="nav_interests" />
        </Button>
        <Button
          style={{
            color: colors.primary[100],
            fontSize: window.innerWidth < 500 ? '0.6rem' : '1rem',
            padding: window.innerWidth < 500 ? '4px' : '8px',
          }}
          className={current === 'resume' ? 'tab-click' : 'tab'}
          id="tabresume"
          onClick={() => {
            navigate('/resume');
            setCurrent('resume');
          }}
        >
          <T keyName="nav_resume" />
        </Button>
      </Box>

      <Box display="flex" flex={1} justifyContent="flex-end">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
          onClick={() => {
            if (tolgee.getLanguage() === 'en') {
              tolgee.changeLanguage('ch');
            } else {
              tolgee.changeLanguage('en');
            }
          }}
        >
          <TranslateIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
