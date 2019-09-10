import React from "react";
import { Link } from "react-router-dom";

function AnimalHeader(props) {
  return (
    <div className="animal-header">
      <Link to="/mammals" className="link">Mammals | </Link>
      <Link to="/fish" className="link">Fish | </Link>
      <Link to="/reptiles" className="link">Reptiles | </Link>
      <Link to="/amphibians" className="link">Amphibians | </Link>
      <Link to="/birds" className="link">Birds</Link>
    </div>
  );
}

export default AnimalHeader;
