import React from "react";
import Header from "../Components/FrontEnd/Header";
import Info from "../Components/FrontEnd/Info";

import FilteringSystem from "../Components/FrontEnd/FilteringSystem";
import LogoTitle from "../Components/FrontEnd/LogoTitle";
import PreviewContainer from "../Components/FrontEnd/PreviewContainer";

import Searchbar from "../Components/Searchbar";

import { Outlet } from "react-router-dom";

export default function FrontEnd(props) {
  let [hoveredFilter, setHoveredFilter] = React.useState(null);

  function handleHoveredFilter(dataObject) {
    setHoveredFilter(dataObject);
  }

  function handleFrontEndClick() {
    console.log("FrontEnd has been clicked!");
  }

  return (
    <>
      <div className="frontEnd" onClick={handleFrontEndClick}>
        <Header />

        <div className="content">
          <div>
            <LogoTitle />
            <Searchbar />
            {/* <Info /> */}

            <FilteringSystem data={props.data} handleHoveredFilter={handleHoveredFilter} />
          </div>
          <PreviewContainer hoveredFilter={hoveredFilter} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
