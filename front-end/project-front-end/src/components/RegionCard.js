import React, { Component } from "react";

class RegionCard extends Component {

  render() {
    return (
      <div className="region-card">
        <h3 className="region-header-three">{this.props.region.name}</h3>
        <p className="p-tag">{this.props.region.desc}</p>
        <br />
        <h5 className="region-header-five">Countries in this region:</h5>
        <br />
        <p className="p-tag">{this.props.region.countries}</p>
        <br />
      </div>
    )
  }

}

export default RegionCard;
