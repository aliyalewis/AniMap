import React from "react";
import { Link } from "react-router-dom";

function AnimalHeader(props) {
  return (
    <div className="animal-header">
      <Link to="/mammals">Mammals</Link>| <Link to="/fish">Fish</Link>|{" "}
      <Link to="/reptiles">Reptiles</Link>|{" "}
      <Link to="/amphibians">Amphibians</Link>| <Link to="/birds">Birds</Link>
    </div>
  );
}

export default AnimalHeader;
