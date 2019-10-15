import React, { Component } from "react";

class AnimalCard extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
        console.log(this.props.animal.name);

    return (
      <div className="animal-card">
        <h3 className="header-three">{this.props.animal.name}</h3>
        {/* <h4 className="header-four">{this.props.animal.sciName}</h4>
        <img className="animal-images" src={this.props.animal.image} />
        <p className="p-tag">{this.props.animal.desc}</p>
        <br />
        <h5 className="header-five">Found in: </h5>
        <p className="p-tag">{this.props.animal.countries}</p> */}
      </div>
    );
  }
}

export default AnimalCard;
