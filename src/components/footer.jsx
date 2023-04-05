import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, IconButton, useTheme, Button } from '@mui/material';
import { BsSun } from 'react-icons/bs';
import { T } from '@tolgee/react';
import { useTolgee } from '@tolgee/react';
import './footer.css';

const Footer = () => {
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
      className={
        theme.palette.mode === 'light' ? 'navBar_light ' : 'navBar_dark '
      }
      style={{
        height: '50px',
        position: 'absolute',
        bottom: '0',
        width: '100%',
      }}
    >
      <Box
        display="flex"
        flex={1}
        justifyContent="center"
        style={{ position: 'relative' }}
      >
        <div
          className="sentence"
          style={{ fontSize: window.innerWidth < 500 ? '0.8rem' : '1.3rem' }}
        >
          {' '}
          <T keyName="Footer" /> <BsSun />
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
