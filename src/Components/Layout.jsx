import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flip-box">
        <div className="flip-box-inner rotate">
          <div className="flip-box-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
