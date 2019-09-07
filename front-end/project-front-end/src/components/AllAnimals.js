import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import AnimalHeader from "./AnimalHeader";
import MainHeader from "./MainHeader";

class AllAnimals extends Component {
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
        <AnimalHeader />
        <div>
          {this.state.animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />;
          })}
        </div>
      </div>
    );
  }
}

export default AllAnimals;
