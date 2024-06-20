import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div>404 Page Not Found. If you're lost, go back Home.</div>
      <Link to="/">Home</Link>
    </>
  );
}
