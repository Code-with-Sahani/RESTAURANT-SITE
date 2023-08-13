import React from 'react'
import './Header.css'
import Subheading from "../Subheading";
import spoon from "../assets/spoon.png";
import welcome from "../assets/welcome.png";
export default function Header() {
  return (
    <div className='app_header' id="home">
      <div className="header_left">
        <Subheading title="Chase the New flavour" />
        <img src={spoon} alt="spoon image" />
        <h1>The Key to Find New Dinning</h1>
        <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, doloribus. Facere distinctio voluptatem numquam recusandae dolores vel optio id quos ullam perferendis tempora modi dolorem sint illo suscipit aut, eos in eligendi. Consequatur libero odit id nisi ratione quaerat enim, quos minus provident adipisci fugit?
        </p>
        <button className='header_left_btn'>Explore Menu</button>
      </div>
      <div className="header_right">
        <img src={welcome} alt="welcome img" />

      </div>
    </div>
  )
}
