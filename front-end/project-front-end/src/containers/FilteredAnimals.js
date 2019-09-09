import React, { Component } from "react";
import { withRouter } from "react-router";
import AnimalCard from "../components/AnimalCard";
import MainHeader from "../components/MainHeader"

class FilteredAnimals extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/animals")
      .then(res => res.json())
      .then(json => {
        this.setState({
          animals: json
        });
      });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.animals.map(animal => {
            if ("" + animal.region_id === this.props.match.params.id) {
              return <div> <MainHeader /> <AnimalCard animal={animal} /></div>;
            }
          })}
        </p>
      </div>
    );
  }
}

export default withRouter(FilteredAnimals);
