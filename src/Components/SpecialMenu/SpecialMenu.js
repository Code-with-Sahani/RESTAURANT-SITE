import React from 'react'
import spoon from "../assets/spoon.png"
import menu from "../assets/menu.png"
import Subheading from '../Subheading'
 
import "./Specialmenu.css"
export default function SpecialMenu() {
  return (
    <div className='app_specialmenu' id="menu">

      <div className="app_specialmenu_top">

        <Subheading title={"Menu that fit your palatte"}  />
        <img src={spoon} alt="spoon image" style={{ marginLeft: "49vw" }} />
        <h1 style={{ textAlign: "center" }}>Today's Special</h1>

      </div>

      <div className="app_specialmenu_menuitemes">

        <div className="app_specialmenu_items" style={{marginLeft:"3vw"}}>
        <Subheading title={"Wine & Beer"} />
          <p>Corona  <span> $99</span><hr /></p>
          <p>White Rhino  <span> $90</span><hr /></p>
          <p>Corona  <span> $49</span><hr /></p>
          <p>Hoegaarden  <span> $25</span><hr /></p>
          <p>Stella Artois  <span> $149</span><hr /></p>
          <p>Asahi  <span> $299</span><hr /></p>
          <p>Kingfisher  <span> $39</span><hr /></p>
          <p>Bira 91  <span> $49</span><hr /></p>
          <p>Haywards  <span> $299</span><hr /></p>
          <p>Simba  <span> $199</span><hr /></p>
        </div>

        <div className="app_specialmenu">
          <img src={menu} alt="menu img" />
        </div>
        
        <div className="app_specialmenu_items" style={{marginRight:"3vw"}}>
        <Subheading title={"Cocktails"} />
          <p>Americano  <span> $99</span><hr /></p>
          <p>Boulevardier  <span> $199</span><hr /></p>
          <p>Campari and Soda  <span> $59</span><hr /></p>
          <p>Campari Spritz <span> $29</span> <hr /></p>
          <p>Stella Artois  <span> $19</span><hr /></p>
          <p>Garibaldi  <span> $199</span><hr /></p>
          <p>Jungle Bird  <span> $49</span><hr /></p>
          <p>Mezcal Negroni <span> $95</span> <hr /></p>
          <p>Negroni (Classic) <span> $24</span> <hr /></p>
        </div>

      </div>

      <div style={{display:"flex",justifyContent:"center"}}>
        <button className="app_specialmenu_btn"> View More</button>
      </div>

       
      
    </div>

  )
}
