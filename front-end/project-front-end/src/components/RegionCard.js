import React, { Component } from "react";

class RegionCard extends Component {

  render() {
    return (
      <div className="region-card">
        <h2>{this.props.region.name}</h2>
        <p>{this.props.region.desc}</p>
        <h3>Countries in this region:</h3>
        <p>{this.props.region.countries}</p>
        <br />
      </div>
    )
  }

}

export default RegionCard;
