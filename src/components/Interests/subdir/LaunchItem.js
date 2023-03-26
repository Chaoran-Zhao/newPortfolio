import { Button, Collapse } from "react-bootstrap";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./LauchItem.css"

function LaunchItem(props) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:"numeric" };
  let date = new Date(props.launch.timestamp)
  let time = date.toLocaleDateString("en-US", options)
  return (
    <Card className='card' >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
              {props.launch.name}
          </Typography>

          <div className="tile-container">
            <div className="tile" style={{width:'25%'}}>
              <Typography gutterBottom variant="h6" component="div">
              {props.launch.home}
          </Typography>
            </div>
            <div className="tile"  style={{width:'20%'}}><img className ="teamimg" src={props.launch.homelogo} alt="home team logo" title="home team logo"/></div>  
            <div className="tile"  style={{width:'10%'}}>VS</div>  
            <div className="tile" style={{width:'20%'}}>
              <img className ="teamimg" src={props.launch.awaylogo} alt="home team logo" title="home team logo"/>
            </div>  
            <div className="tile" style={{width:'25%'}}><Typography gutterBottom variant="h6" component="div">
              {props.launch.away}</Typography></div>        
          </div>
          <Typography variant="body2" color="text.secondary">
              {props.launch.details ? (
              <span>{props.launch.details}</span>
            ) : (
              <span className="text-warning">No details available</span>
            )}
          </Typography>
          <div className="timestamp">
              {time}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LaunchItem;