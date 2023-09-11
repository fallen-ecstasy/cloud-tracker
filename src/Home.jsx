import React, { useState } from 'react';
import "./App.css";
import bg from "./assets/02.png";
import gdscLogo from "./assets/google-for-developers-logomark-color-1.png";
import LogoText from "./assets/group-2.png";

function Home() {
    const [Tab, setTab] = useState("rank");


  return (
    <div className="cloud-camp-tracker">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="LOGO">
            <div className="overlap-group">
              <img className="group" alt="Group" src={LogoText} />
              <img className="google-for" alt="Google for" src={gdscLogo} />
            </div>
          </div>
          <div className="title">
            <div className="div">
              <div className="text-wrapper">Google Cloud Study Jam</div>
              <div className="text-wrapper-2">2023</div>
            </div>
          </div>
          <div className="button-option">
            <div className="overlap-2">
              <div className="overlap-group-2">
                <div className="rectangle"/>
                <div className="text-wrapper-3">Rank List</div>
              </div>
              <div className="text-wrapper-4">Resources</div>
            </div>
          </div>
          <div className="rectangle-2" />
        </div>
      </div>
      <img src = {bg} className='bg' />
    </div>
  )
}

export default Home