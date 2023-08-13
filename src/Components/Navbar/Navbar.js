import React, { useState } from 'react';
import "./Navbar.css";

import gericht from "../assets/gericht.png";
import { GiHamburgerMenu, GiSagittarius } from "react-icons/gi";;
export default function Navbar() {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app_navbar'>
      <div className='app_navbar_logo'>
        <img src={gericht} alt="logo" />
      </div>
  
      <div className="app_navbar_links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#findus">Contact Us</a></li>
        </ul>
      </div>

      <div className="app_navbar_login">
        <p>Login / SignUp</p>
        <div />
        <p>Book Table</p>
      </div>

      <div className="app_navbar_smallscreen">
      <GiHamburgerMenu  className="hamburger" onClick={() =>setToggleMenu(true)} />
        {ToggleMenu &&
          (<div className="app_navbar_links_smallscreen_overlay">
            <GiSagittarius className="closing_btn" onClick={() =>setToggleMenu(false)} />
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#award">Award</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul> 
          </div>)}

      </div>
    </nav>
  )
}
