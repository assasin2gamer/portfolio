import React from "react";
import { Link } from "react-router-dom";

import './pages.css';
import { NavLink } from "react-router-dom";

import img1 from "./images/internals.jpg";

function Projects() {
    return (

      <div style={{backgroundColor:'#696969	', display:'flex', position:'absolute', width:'100%', textAlign:'center', flexDirection:'column', top:'20%'}}>
        <NavLink to="/cybersecurity">
          <button class="button"style={{width:'25vw', backgroundColor:'#a7a7a7'}}><span >Cyber Security </span></button></NavLink>
          <NavLink to="/robotics">
          <button class="button"style={{width:'25vw',backgroundColor:'#a7a7a7'}}><span >Robotics</span></button></NavLink>
          <NavLink to="/workexperience">
          <button class="button"style={{width:'25vw',backgroundColor:'#a7a7a7'}}><span >Work Experience</span></button></NavLink>
          <NavLink to="/volunteering">
          <button class="button"style={{width:'25vw',backgroundColor:'#a7a7a7'}}><span >Volunteering</span></button></NavLink>
          <NavLink to="/manufacturing">
          <button class="button"style={{width:'25vw',backgroundColor:'#a7a7a7'}}><span >Manufacturing</span></button></NavLink>
      </div>

    );
  }
function cybersecurity(){
  return (
  <div>
    <p className="list2">Cyber Patriot</p>
    <p className="list2">National Cyber League</p>
    <p className="list2">Mayor's Cup</p>
  </div>
  )
}
function robotics(){
  return (
  <div>
   <p className="list2">H2GP</p>
  </div>
  )
}
function workexperience(){
  return (
  <div>
    <p className="list2">Internship Under Professor</p>
    <p className="list2">Software Engineering Intern</p>
  </div>
  )
}
function volunteering(){
  return (
  <div>
    <p className="list2">Advocacy</p>
    <p className="list2">Mentorship</p> 
  </div>
  )
}
function manufacturing(){
  return (
  <div>
    <p className="list2">Guitars</p>
    <p className="list2">3d Printers</p>
    <p className="list2">Laser Cutters</p>
    <p className="list2">CNC Machine</p>
    <p className="list2">Machinery</p>
  </div>
  )
}

export default Projects;
