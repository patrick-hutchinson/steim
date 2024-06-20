import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function handleArrowClick() {
    console.log("clicked expand");
    if (document.querySelector(".flip-box-inner").classList.contains("rotate")) {
      document.querySelector(".flipButton").classList.add("hidden");
      document.querySelector(".flip-box-content").classList.toggle("rightExpanded");
      document.querySelector(".expandButton").classList.toggle("active");
      // document.querySelector(".frontEnd").style.display = "none";
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
            <li>
              <Link to="/BackEnd/Info">INFO</Link>
            </li>
            <li>
              LAST UPDATE: <span>20.05.24 13.03</span>
            </li>
            <Link to="/BackEnd" className="expandButton">
              <div className="innerText">→</div>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}
