import React from "react";
import { Link } from "react-router-dom";

import './pages.css';

import img1 from "./images/3dprinter.gif";
import bg from "./images/ipsf.jpg";


function Manufacturing() {
    return (
      <div className="Home" style={{height:'100vh', left:'50%',}}>
          <p style={{fontSize:'200%', position:'relative', left:'10%'}}>Manufacturing</p>
          <p style={{fontSize:'120%', position:'relative', left:'10%'}}>For the past six years, I have been improving my skills in manufacturing</p>
          <p style={{fontSize:'120%', position:'relative', left:'10%'}}>I have used 3d printers, cnc machines, and laser cutters to prototype new aero parts for our rc cars.</p>
          <p></p>
          <p style={{left:'10%',fontSize:'120%', position:'relative', width:'35%',top:'5%'}}>Repairing, calibrating, and tinkering to get the perfect result has always been such a fun and interesting world that I could explore.</p>
          <p style={{left:'10%', fontSize:'120%', position:'relative', width:'35%',top:'5%'}}>Understanding the preproduction of 3d modeling, simulation, and post production improvement has allowed me to be a valuable asset to any robotics, development, or even musical team.</p>
          
        <img style={{position:'absolute', top: '30%', left:'50%', width:'28%', borderColor:'black', borderStyle:'solid',}} src={bg} alt="photo"/>
        <img style={{position:'absolute', top:'80%', left:'50%', width:'20%', borderColor:'black', borderStyle:'solid',}} src={img1} alt="photo"/>    
      </div>
    );

  }

export default Manufacturing;