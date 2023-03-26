import React from 'react'
import ImageGallery from 'react-image-gallery';
import { useEffect, useRef, useState, useContext } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import './Photo.css'
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../../theme";
import { Box, IconButton, useTheme, Button, } from "@mui/material";
import { Spinner } from "react-bootstrap";
import { T } from "@tolgee/react"

import LaunchItem from "./LaunchItem";
import "./LauchItem.css"
import fetchUpcomingLaunches from "../../../utilis/fetchSportApi"


const SportShow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [status, setStatus] = useState('FC Barcelona Femení')

  const [upcomingLaunches, setUpcomingLaunches] = useState([])

  useEffect(() => {
    fetchUpcomingLaunches(status).then((result)=>{setUpcomingLaunches(result);})
  }, [status])
  


  // const upcomingLaunches = [
  //   {date_utc: "2020-10-22T16:48:30.000Z",
  //   name: "	Spanish LaLiga",
  //   details:
  //     "",
  //   id: "5ef6a2e70059c33ceholae4a8293",
  //   date_precision: "hour",
  //   timestamp: "2023-03-29T16:45Z",
  //   home: "Barcelona",
  //   away: "Roma",
  //   homelogo: "https://a.espncdn.com/i/teamlogos/soccer/500/20091.png",
  //   awaylogo: "https://a.espncdn.com/i/teamlogos/soccer/500/21685.png"
  // },
  // ]


  return (
    <>
    <div className='PhotoHeader'>
      <Button style={{ border: '2px solid', borderColor: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}>
        <ArrowBackIcon
          style={{ color: theme.palette.mode === 'light' ? colors.primary[500] : "#fcfcfc" }}
          onClick={() => {
            navigate("/interests");
          } } />
      </Button>
    </div>
    <h1 className='title'>Upcoming games of my fav teams!</h1>
    <div className='topButton'>
      <Button className='view' style={{backgroundColor: status==='FC Barcelona Femení' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('FC Barcelona Femení'); }}> <T keyName='FC Barcelona Femení' /> </Button>
      <Button className='view' style={{backgroundColor: status==='Arsenal W.F.C' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('Arsenal W.F.C');}}> <T keyName='Arsenal W.F.C' /> </Button> 
      <Button className='view' style={{backgroundColor: status==='BAYERN MUNICH' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('BAYERN MUNICH');}}> <T keyName='BAYERN MUNICH' /> </Button>
      <Button className='view' style={{backgroundColor: status==='CHINA' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('CHINA');}}> <T keyName='CHINA' /> </Button> 
      <Button className='view' style={{backgroundColor: status==='Toronto Maple Leafs' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('Toronto Maple Leafs');}}> <T keyName='Toronto Maple Leafs' /> </Button> 
    </div>
    

    
    {
      upcomingLaunches.length > 0 ? (
        <div className='events'>
          {upcomingLaunches.map((value, index) => {
          return (
            <LaunchItem launch={value} index={index} key={value.id} />
          );
        })} 
        </div>         
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
    }
     
    <div className='notice'>
      I am not affiliated, associated, authorized, endorsed by, or in any way officially connected with ESPN, or any of its subsidiaries or its affiliates. The names ESPN as well as related names, marks, emblems and images are registered trademarks of their respective owners.

      I use ESPN's hidden API endpoints (github) to track data about Sport
    </div>

    <div style={{height:'40px'}}></div>
    
    
    </>
    
  )
}

export default SportShow