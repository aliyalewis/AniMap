import React from "react";
import { Link } from "react-router-dom";

function MainHeader(props) {
  return (
    <div>
      <Link to="/map">Map </Link>| <Link to="/allanimals">Animals </Link>|{" "}
      <Link to="/regions">Regions </Link>|{" "}
    </div>
  );
}

export default MainHeader;
