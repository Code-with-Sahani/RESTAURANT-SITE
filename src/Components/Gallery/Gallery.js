import React from 'react'
import Subheading from '../Subheading'
import "./Gallery.css"

import spoon from "../assets/spoon.png"
import gallery1 from "../assets/gallery01.png"
import gallery2 from "../assets/gallery02.png"
import gallery3 from "../assets/gallery03.png"
import gallery4 from "../assets/gallery04.png"
export default function Gallery() {
  return (
    <div className='app_gallery'>
      <div className="app_gallery_left">

        <Subheading title={"Instgagram"}/>
        <img src={spoon} alt="spoon logo"/>
        <h1 style={{textAlign:"center"}}>Photo Gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus aut dolores, quam laborum incidunt reiciendis neque dicta dicta amet quisquam enim voluptatum unde, earum veniam? Nam quod nisi ea blanditiis repellat?</p>
        <button className='app_gallery_btn'>View More</button>

      </div>

      <div className="app_gallery_right">

        <img src={gallery1} alt="gallery pic" />
        <img src={gallery2} alt="gallery pic" />
        <img src={gallery3} alt="gallery pic" />
        <img src={gallery4} alt="gallery pic" /> 
        <img src={gallery3} alt="gallery pic" />
        <img src={gallery4} alt="gallery pic" /> 
      </div>
      
    </div>
  )
}
