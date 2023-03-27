import React from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import './Photo.css'
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../../theme";
import {useTheme, Button, } from "@mui/material";

// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // Load worker code separately with worker-loader

mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default

function Photo() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();
  const [rednder, setrednder] = useState(null);
  useEffect(() => {
    let mapdiv = document.querySelector('#map');
    console.log(mapdiv);
    if (mapdiv !== undefined && rednder !== null) {
      setrednder(false);
    }
  });



  mapboxgl.accessToken = 'pk.eyJ1Ijoia2VubmlzIiwiYSI6ImNsZnFpMTcxaTFmcjczc3Bmc3J6a212bnQifQ.-_A5rXbFDvDj7RG3U-umEg';

  const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'message': 'Singapore, The Lion City ',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Singapore.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [103.8454, 1.3147]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Bangkok, Thailand',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Bangkok.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [100.50483, 13.75335]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Kuala Lumpur, Malaysia',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Kuala.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [101.6865300, 3.1412000]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Malaka, Malaysia',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Malaka.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [102.2405, 2.1960]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Langkawi, Malaysia',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Langkawi.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [99.78261, 6.373586]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Harbin, China',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Harbin.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [126.63951, 45.75553]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Sydney, Australia',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Sydney.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [151.20695, -33.8696]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Hong Kong, China',
          'iconSize': [30, 30],
          'src': require('../../../assets/City/Hongkong.jpg')
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [114.186966, 22.336157]
        }
      }
    ]
  };

  useEffect(() => {
    let mapdiv = document.querySelector('#map');
    console.log(mapdiv);
    if (mapdiv !== undefined) {
      const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [151.20695, -33.8696],
        zoom: 5
      });

      // Add markers to the map.
      for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.properties.src})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';

        el.addEventListener('click', () => {
          window.alert(marker.properties.message);
        });

        // Add markers to the map.
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      }
    }
  }, [rednder]);



  return (
    
    <div>
      <div className='PhotoHeader'>
        <Button style={{ border: '2px solid', borderColor: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}>
          <ArrowBackIcon
            style={{ color: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}
            onClick={() => {
              navigate("/interests");
            } } />
        </Button>
        <h1 className='title heading'>Check out My Recent Destinations!</h1>
      </div>

      <div id="map"></div>
    </div>
  );
}

export default Photo



