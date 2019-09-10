import React, { Component } from "react";
import AnimalHeader from "./AnimalHeader";
import MainHeader from "./MainHeader";

class AnimalCard extends Component {
  render() {
    return (
      <div className="animal-card">
        <h3>{this.props.animal.name}</h3>
        <h4>{this.props.animal.sciName}</h4>
        <img className="animal-images" src={this.props.animal.image} />
        <p>{this.props.animal.desc}</p>
        <h5>Found in: </h5>
        <p>{this.props.animal.countries}</p>
      </div>
    );
  }
}

export default AnimalCard;
