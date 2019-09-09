import React, { Component } from "react";
import MainHeader from "../components/MainHeader";

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
        <div>
          {
            this.state.regions.map(region => {
              return <div key={region.id}>
                <h3>{region.name}</h3>
                <p>{region.description}</p>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Regions
