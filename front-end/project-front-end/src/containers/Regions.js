import React, { Component } from "react";
import MainHeader from "../components/MainHeader";
import RegionCard from "../components/RegionCard";

class Regions extends Component {
  state = {
    regions: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/regions")
     .then(res => res.json())
     .then(json => {
      this.setState({
       regions: json
      })
    })
  }

  render(){
    return (
      <div>
        <MainHeader />
        <br></br>
        <div className="region-container">
          {
            this.state.regions.map(region => {
              return <RegionCard key={region.id} region={region}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default Regions
