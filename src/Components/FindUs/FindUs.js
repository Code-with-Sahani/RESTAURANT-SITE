import React from 'react'
import Subheading from '../Subheading'
import spoon from '../assets/spoon.png'
import findus from "../assets/findus.png"
import "./FindUs.css"

export default function FindUs() {
  return (
    <div className='app_findus' id="findus">
      
      <div className="app_findus_left">
        <Subheading title={"Contact us"} style={{float:"left"}}/>
        <img src={spoon} alt="spoon logo" />
        <h1>Find Us</h1>
        <div className='app_findus_address'> 
        <p>118, Rafi Marg, New Delhi, Delhi</p>
        <pre>Coordinates  	28°37′02″N 77°12′36″E</pre>
        <h2>Opening Hours</h2>
        <p>Mon-Fri : ( 10:00 AM-07:00 PM )</p>

        </div>
        <button className='app_findus_btn'>View Us</button>
      </div>
      <div className="app_findus_right">
        <img src={findus} alt="img" />
      </div>
    </div>
  )
}
