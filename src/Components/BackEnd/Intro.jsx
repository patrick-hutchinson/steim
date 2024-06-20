import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <div className="logotext">WELCOME (BACK) TO</div>
      <div className="explanation-container">
        <div className="alignLeft">
          <div className="titleText">THE</div>
          <img src="./src/assets/mat/img/thumbnails/mw_hands.png"></img>
        </div>
        {/* <span className="STEIMLogo">A</span> */}
        <div className="alignRight">
          <img src="./src/assets/mat/img/thumbnails/at_biomuse.jpg"></img>
          <div className="titleText">BACKEND</div>
        </div>
      </div>
      <p>
        You are now viewing the front-end, where all designated content, including artists, instruments and
        performances, image, video and sound, will be explorable and find a place to live.
      </p>
    </div>
  );
}
