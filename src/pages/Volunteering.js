import React from "react";
import { Link } from "react-router-dom";

import './pages.css';

import img1 from "./images/internals.jpg";
import bg from "./images/background.jpg";

function Volunteering() {
    return (
      <div className="Home" style={{height:'100vh'}}>
          <p style={{fontSize:'50px', position:'relative', left:'12vh'}}>Stephen Chang</p>
          <p style={{fontSize:'20px', position:'relative', left:'12vh'}}>Programmer</p>
          <p style={{fontSize:'20px', position:'relative', left:'12vh'}}>Designer</p>
          <p style={{fontSize:'20px', position:'relative', left:'12vh'}}>Musician</p>
          <img className = 'img1' src={img1} alt="photo"/>
      </div>
    );
  }

export default Volunteering;