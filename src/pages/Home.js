import React from "react";
import { Link } from "react-router-dom";

import './pages.css';
import './bubble.scss';
import img1 from "./images/desk.gif";
import bg from "./images/background.jpg";

import guitar from "./images/saddleback.PNG"
import localight from "./images/localight.png"
import cyber from "./images/cyber.png"

function Home() {
    return (
      <div className="Home" style={{width:'100%'}}>



          <p style={{fontSize:'50px', position:'relative', textAlign:'center'}}>Stephen Chang</p>
          <p style={{fontSize:'20px', position:'relative', textAlign:'center'}}>Programmer and Musician</p>

        <div style={{justifyContent:'center',textAlign:'center', position:'relative', top:'5vh', display:'flex', width:'100%'}}>

          <div>
            <img  style={{width:'100%'}} src={cyber} alt="photo"/>
            <p style= {{fontSize:'100%'}}>Cyber Patriots</p>
          </div>

          <div>
            <img  style={{borderRadius:'100%', width:'59%'}} src={guitar} alt="photo"/>
            <p style={{fontSize:'100%'}}>Saddleback Church</p>  
          </div>

          <div>
            <img  style={{width:'100%'}} src={localight} alt="photo"/>
            <p style= {{fontSize:'100%'}}>Localight</p>
          </div>


        </div>    

      </div>
    );
  }

export default Home;
