import React from "react";
import Header from "../Components/BackEnd/Header";
import Info from "../Components/BackEnd/Info";
import Intro from "../Components/BackEnd/Intro";
import CreateItems from "../Components/BackEnd/Function/CreateItems";

export default function BackEndCreateNew(props) {
  let data = props.data;
  return (
    <>
      <div className="backEnd">
        <Header />
        <CreateItems data={data} />
      </div>
    </>
  );
}
