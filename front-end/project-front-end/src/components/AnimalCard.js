import React, { Component } from "react";

class AnimalCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.animal.name}</h3>
        <h4>{this.props.animal.sciName}</h4>
        <img src={this.props.animal.image} />
        <p>{this.props.animal.desc}</p>
        <h5>Found in: </h5>
        <p>{this.props.animal.countries}</p>
      </div>
    );
  }
}

export default AnimalCard;
