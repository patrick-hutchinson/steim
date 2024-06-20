import React from "react";

import { Link } from "react-router-dom";

export default function EditItems(props) {
  let data = props.data;
  return (
    <div className="editItems">
      <h4>Here, you will be able to:</h4>
      <br />
      <div className="editOption">
        <div className="arrowIcon">
          <div className="innerText">+</div>
        </div>
        <span>
          <Link to={"/BackEnd/CreateItems"}>Create New Item</Link>
        </span>
      </div>
      <div className="editOption">
        <div className="arrowIcon">
          <div className="innerText">+</div>
        </div>
        <span>
          <Link to={"/BackEnd/ConnectItems"}>Connect Items</Link>
        </span>
      </div>
    </div>
  );
}
