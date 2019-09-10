import React from "react";
import { Link } from "react-router-dom";

function AnimalHeader(props) {
  return (
    <div className="animal-header">
      <Link to="/mammals" className="animal-link">Mammals | </Link>
      <Link to="/fish" className="animal-link">Fish | </Link>
      <Link to="/reptiles" className="animal-link">Reptiles | </Link>
      <Link to="/amphibians" className="animal-link">Amphibians | </Link>
      <Link to="/birds" className="animal-link">Birds</Link>
    </div>
  );
}

export default AnimalHeader;
