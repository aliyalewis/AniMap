import React, { Component } from "react";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";
// import AnimalCard from "./AnimalCard";
import Amphibians from "./Amphibians";
import Birds from "./Bird";
import Fish from "./Fish";
import Mammals from "./Mammals";
import Reptiles from "./Reptiles";


class Filter extends Component {
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
        return {
            <div>
                <MainHeader />
                <AnimalHeader />
                <div className="animal-background">
                    <div className="animals">
                        {this.state.animals.map(animal => {
                            switch(animal) {
                                case "Amphibian":
                                    return <Amphibians key={animal.id} animal=animal} />;
                                    break;
                                case "Bird":
                                    return <Birds key={animal.id} animal=animal} />;
                                    break;
                                case "Fish":
                                    return <Fish key={animal.id} animal=animal} />;
                                    break;
                                case "Mammal":
                                    return <Mammals key={animal.id} animal=animal} />;
                                    break;
                                case "Reptile":
                                    return <Reptiles key={animal.id} animal=animal} />;
                                    break;
                            }
                        })}
                    </div>
                </div>
            </div>
        }
    }

}

export default Filter;