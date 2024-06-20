import React from "react";
import Header from "../Components/BackEnd/Header";
import Info from "../Components/BackEnd/Info";
import Intro from "../Components/BackEnd/Intro";
import ConnectItems from "../Components/BackEnd/Function/ConnectItems";

export default function BackEndConnectItems(props) {
  let data = props.data;
  return (
    <>
      <div className="backEnd">
        <Header />
        <ConnectItems data={data} />
      </div>
    </>
  );
}
