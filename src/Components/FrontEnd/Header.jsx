import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function handleArrowClick() {
    if (!document.querySelector(".flip-box-inner").classList.contains("rotate")) {
      console.log("doesnt contain rotate");
      document.querySelector(".flipButton").classList.add("hidden");
      document.querySelector(".flip-box-content").classList.toggle("leftExpanded");
      document.querySelector(".expandButton").classList.toggle("active");

      if (!document.querySelector(".flip-box-content").classList.contains("leftExpanded")) {
        document.querySelector(".previewContainer").classList.remove("visible");
        setTimeout(() => {
          document.querySelector(".flipButton").classList.remove("hidden");
        }, 200);
      }
    }
  }
  return (
    <>
      <header>
        <Link to="/" className="STEIMLogo">
          <span>A</span>
        </Link>
        <div className="navbar">
          <ul>
            <li>INFO</li>
            <li>
              LAST UPDATE: <span>20.05.24 13.03</span>
            </li>
            {/* <li className="expandButton" onClick={handleArrowClick}>
              <div className="innerText">→</div>
            </li> */}
            <Link to="/FrontEnd" className="expandButton">
              <div className="innerText">→</div>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}
