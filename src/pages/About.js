import React from "react";
import { Link } from "react-router-dom";

import img1 from "./images/face.jpg";
import img2 from "./images/github.png"

function About() {
    return (
      <div>
        <div style={{display:'flex'}}>
          
          <img  style={{width:'20%', left:'5%', top:'5vh', position:'relative', borderRadius:'10%'}} src={img1} alt="photo"/>
          <div>
            <p style={{position:'relative', top:'5vh', left:'10%', width:'60%'}}>Hello! My name is Stephen Chang and I am a intern software engineer and semi-professional musician. I currently intern at Localight as a Software Engineering intern (fullstack dev and scripting). I have been playing piano for six years and guitar for one year at Saddleback Church's Lake Forest Worship team.</p>
            <p style={{position:'relative', top:'5vh', left:'10%', width:'60%'}}>Favorite Coding language: Python <br/> Least Favorite Coding Lang: Visual Basic <br/>Favorite Music Software: Mainstage </p>
          </div>

        </div>
        <div style={{display:'flex'}}>
          <img  style={{width:'10%', left:'5%', top:'5vh', position:'relative', borderRadius:'10%'}} src={img2} alt="photo"/>
            <form style={{width:'10%', left:'5%', top:'10vh', position:'relative', borderRadius:'10%'}} action="https://github.com/assasin2gamer/portfolio">
              <input type="submit" value="This website's Github" />
            </form>
        </div>
      </div>
    );
  }

export default About;
