import React from "react";
import { Link } from "react-router-dom";

import './pages.css';

import img1 from "./images/robo1.jpg";
import img2 from "./images/lineup.jpg"
import img3 from "./images/robo2.JPG"
import img4 from "./images/internals.jpg"
import bg from "./images/background.jpg";

function Robotics() {
    return (
<div className="Home" style={{width:'100%', display:'flex'}}>
        
        <div style={{width:'10%'}}>
          <p style={{fontSize:'150%', position:'relative', left:'50%'}}>Robotics</p>
          <p style={{fontSize:'20px', position:'relative', left:'70%'}}>Vex Robotics<br/>RC robot designed to complete various tasks and challenges.</p>
          <p style={{fontSize:'20px', position:'relative', left:'70%'}}>UCI Rescue Robotics<br/>Rover craft using object recognition and sonar triangulation to detect obj and return position.</p>
          <p style={{fontSize:'20px', position:'relative', left:'70%'}}>H2GP<br/>Hydrogen fuel cell car designed for endurance races</p>
          <p style={{fontSize:'20px', position:'relative', left:'70%'}}>LinkBots<br/> Instructional tool and coding comeptition for students</p>

        </div>   
        <div style={{position:'relative', width:'100%', left:'25vw', top:'10vh'}}>
          <img style={{border:'solid', position:'relative', width:'50%'}} src={img1} alt="photo"/>
          <img style={{border:'solid', position:'relative', width:'50%'}} src={img2} alt="photo"/>
          <img style={{border:'solid', position:'relative', width:'50%'}} src={img3} alt="photo"/>
          <img style={{border:'solid', position:'relative', width:'50%'}} src={img4} alt="photo"/>
        </div> 
      </div>
    );
  }

export default Robotics;