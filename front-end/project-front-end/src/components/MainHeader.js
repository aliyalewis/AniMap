import React from "react";
import { Link } from "react-router-dom";

function MainHeader(props) {
  return (
    <div className="main-header">
      <Link to="/map" className="link">Map | </Link>
      <Link to="/allanimals" className="link">Animals | </Link>
      <Link to="/regions" className="link">Regions | </Link>
      <Link to="/" className="link">Log In/Log Out | </Link>
      <Link to="/notes" className="link">Notes</Link>
    </div>
  );
}

export default MainHeader;
