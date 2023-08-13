import React from 'react'
import './AboutUs.css'
import G from "../../Components/assets/G.png"
import knife from "../../Components/assets/knife.png"
import spoon from "../../Components/assets/spoon.png"
export default function AboutUs() {

  return (


    <div className='app_about' id="about">
 

      <div className='app_about_left'>
        <h1 style={{textAlign:"center"}}>About Us </h1>
        <img src={spoon} alt="spoon image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam magnam voluptatum eius autem mollitia a repellendus illo nam modi, sequi tempora commodi vel impedit aspernatur quidem? Velit ipsum qui accusantium dignissimos perspiciatis. Cupiditate?</p>
        <button className="app_about_btn" >Explore More</button>
      </div>

      <div className="app_about_bg_img"> 
      <img src={knife}  alt="knife" />
      </div>

      <div className='app_about_right'>
        <h1 style={{textAlign:"center"}}>Our History </h1>
        <img src={spoon} alt="spoon image"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam magnam voluptatum eius autem mollitia a repellendus illo nam modi, sequi tempora commodi vel impedit aspernatur quidem? Velit ipsum qui accusantium dignissimos perspiciatis. Cupiditate?</p>
        <button className='app_about_btn'>Explore More</button>
      </div>
      {/* 7678015439-Priyank  */}

    </div>
  )
}
