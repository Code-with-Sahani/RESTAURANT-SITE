import React from 'react'
import "./chef.css"
import chef from "../assets/chef.png"
import spoon from "../assets/spoon.png"
import Subheading from '../Subheading'
import quote from "../assets/quote.png"
import sign from "../assets/sign.png"
import meal from "../assets/meal.mp4"

export default function Chef() {
  return (
    <>
    <div className='app_chef'> 

      <div className="app_chef_chefimg">
        <img src={chef} alt="master Chef" />
      </div>

      <div className="app_chef_right">
        <Subheading title={"Chef Word"} />
        <img src={spoon} alt="spoon_logo" />

        <p className='app_chef_chef_info'>
          <img src={quote} alt="nothing" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque aliquid reiciendis laborum vel qui, pariatur vero quos magni sint at error aspernatur quidem rerum laudantium facilis dignissimos dolore hic praesentium eius temporibus tempore? In quod reiciendis, vel quisquam qui, magni, consequatur totam obcaecati illum laboriosam delectus nam error.
        </p>

        <p className="app_chef_chef_verifying">
          <p>Kevin Leo</p>
          <p>Chef & Founder</p>
          <img src={sign} alt="sign" />
        </p>

      </div>

    </div>

    <div className="app_specialmenu_video">
    <video src={meal} type="video/mp4" controls></video>
  </div>
  </>
  )
}
