import React from 'react';
import { useEffect, useRef, useState, useContext, useCallback } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Photo.css';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, tokens } from '../../../theme';
import { useTheme, Button } from '@mui/material';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { RiMapPin2Fill } from 'react-icons/ri';

const PhotoGallery = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [viewerIsOpen2, setViewerIsOpen2] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const openLightbox2 = useCallback((event, { photo, index }) => {
    setCurrentImage2(index);
    setViewerIsOpen2(true);
  }, []);

  const closeLightbox2 = () => {
    setCurrentImage2(0);
    setViewerIsOpen2(false);
  };

  const [photojson, setphotojson] = useState(null)
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/648133dab89b1e2299ab8d20')
      .then(response => response.json())
      .then(data => {
        console.log('data',data.record.photos);
        setphotojson(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  },[]); 

  const [bluejson, setbluejson] = useState(null)
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6481563e8e4aa6225eaaeac0')
      .then(response => response.json())
      .then(data => {
        console.log('data',data.record.photos);
        setbluejson(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  },[]); 

  return (
    <>
      <div className="PhotoHeader">
        <Button
          style={{
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'light' ? colors.primary[500] : '#fcfcfc',
          }}
        >
          <ArrowBackIcon
            style={{
              color:
                theme.palette.mode === 'light'
                  ? colors.primary[500]
                  : '#fcfcfc',
            }}
            onClick={() => {
              navigate('/interests');
            }}
          />
        </Button>
      </div>
      <h1 className="title">Check out My Photo Gallery!</h1>

      
      {photojson !== null ? (
        <div style={{ marginBottom: '40px' }}>
          <Gallery photos={photojson.record.photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photojson.record.photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: (
                      <>
                        <RiMapPin2Fill />
                        <> </>
                        <span>{x.title}</span>
                      </>
                    ),
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ):(
        <div></div>)
      }

      {bluejson !== null ? (
        <div style={{ marginBottom: '40px' }}>
          <Gallery photos={bluejson.record.photos} onClick={openLightbox2} />
          <ModalGateway>
            {viewerIsOpen2 ? (
              <Modal onClose={closeLightbox2}>
                <Carousel
                  currentIndex={currentImage2}
                  views={bluejson.record.photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: (
                      <>
                        <RiMapPin2Fill />
                        <> </>
                        <span>{x.title}</span>
                      </>
                    ),
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ):(
        <div></div>)
      }

      <div style={{ height: '40px' }}></div>
    </>
  );
};

export default PhotoGallery;
