import React, { Component } from "react";
import MainHeader from "./MainHeader";

class AnimalCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.animal.name}</h3>
        <h4>{this.props.animal.sciName}</h4>
        <img src={this.props.animal.image} />
        <h5>Found in: </h5>
        <p>{this.props.animal.country}</p>
        <p>{this.props.animal.description}</p>
      </div>
    );
  }
}

export default AnimalCard;
