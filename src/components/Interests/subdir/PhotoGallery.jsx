import React from 'react';
import { useEffect, useRef, useState, useContext, useCallback } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Photo.css';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, tokens } from '../../../theme';
import { useTheme, Button } from '@mui/material';

import { photos } from '../../../texts/photos';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { RiMapPin2Fill } from 'react-icons/ri';

const PhotoGallery = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

      {/* <WSPGallery galleryImages={photos} /> */}
      <div style={{ marginBottom: '40px' }}>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
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

      <div style={{ height: '40px' }}></div>
    </>
  );
};

export default PhotoGallery;
