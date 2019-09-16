import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";

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
      <MainHeader />
      <AnimalHeader />
        <div className="all-animals">
          {this.state.animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />;
          })}
        </div>
      </div>
    );
  }
}

export default AllAnimals;
