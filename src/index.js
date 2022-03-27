import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import logo from './logo.svg';
import './App.css';


import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {About, Home, Nav, Projects, Cybersecurity, Manufacturing, Robotics, Volunteering, Workexperience} from "./pages/index.js"

ReactDOM.render(
  <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/cybersecurity" element={<Cybersecurity />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/robotics" element={<Robotics />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/workexperience" element={<Workexperience />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
