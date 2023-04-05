import React from 'react';
import { T } from '@tolgee/react';
import { useTolgee } from '@tolgee/react';
import { ColorModeContext, tokens } from '../../theme';
import { useContext, useState } from 'react';
import { useTheme, Button } from '@mui/material';

import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../../assets/ChaoranZhao_CV.pdf';
import pdfFile1 from '../../assets/resume2.pdf';
import pdfFile2 from '../../assets/statement.pdf';
import './resume.css';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const tolgee = useTolgee(['language']);
  // console.log(tolgee.getLanguage())

  const [pdf, setPdf] = React.useState(
    tolgee.getLanguage() === 'ch' ? pdfFile1 : pdfFile
  );
  const [press, setPress] = React.useState(true);

  React.useEffect(() => {
    if (press === true) {
      setPdf(tolgee.getLanguage() === 'en' ? pdfFile : pdfFile1);
    }
  }, [tolgee.getLanguage()]);

  return (
    <>
      <h1 className="title">
        {' '}
        <T keyName="nav_resume" />
      </h1>
      <div className="viewer">
        <div className="resume-main">
          <div className="ViewButton">
            <Button
              className="view"
              style={{
                backgroundColor: press === true ? 'grey' : '#457b9d',
                color: colors.primary[100],
              }}
              disabled={press}
              onClick={() => {
                setPdf(tolgee.getLanguage() === 'en' ? pdfFile : pdfFile1);
                setPress(true);
              }}
            >
              {' '}
              <T keyName="resume" />{' '}
            </Button>
            <Button
              className="view"
              style={{
                backgroundColor: press === false ? 'grey' : '#457b9d',
                color: colors.primary[100],
              }}
              onClick={() => {
                setPdf(pdfFile2);
                setPress(false);
              }}
            >
              <T keyName="transcript" />
            </Button>
          </div>

          <div className="pdfContainer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdf}
                plugins={[defaultLayoutPluginInstance]}
                theme={theme.palette.mode}
              ></Viewer>
            </Worker>
          </div>
        </div>

        <div style={{ height: '40px' }}></div>
      </div>
    </>
  );
};

export default Resume;
