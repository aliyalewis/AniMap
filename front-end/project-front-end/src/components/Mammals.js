import React, { Component } from "react";
import AnimalCard from "./AnimalCard"

class Mammals extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/animals")
      .then(res => res.json())
      .then(json => {
        return this.setState({
          animals: json
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.animals.map(animal => {
          if (animal.animalClass === "Mammal") {
            return <AnimalCard key={animal.id} animal={animal} />
          }
        })}
      </div>
    );
  }
}

export default Mammals;
