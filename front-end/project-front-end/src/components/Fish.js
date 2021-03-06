import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";

class Fish extends Component {
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
        <MainHeader />
        <AnimalHeader />
        <div className="animal-background">
          <div className="fish">
            <div className="animals">
                {this.state.animals.map(animal => {
                  if (animal.aniClass === "Fish") {
                    return <AnimalCard key={animal.id} animal={animal} />;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fish;
