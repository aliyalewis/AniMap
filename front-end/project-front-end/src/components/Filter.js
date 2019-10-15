import React, { Component } from "react";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";
// import AnimalCard from "./AnimalCard";
import Amphibians from "./Amphibians";
import Birds from "./Birds";
import Fish from "./Fish";
import Mammals from "./Mammals";
import Reptiles from "./Reptiles";

class Filter extends Component {

    state = {
        animals: [],
        amphibians: [],
        birds: [],
        fish: [],
        mammals: [],
        reptiles: []
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
                console.log(this.state.amphibians)
                <MainHeader />
                <AnimalHeader />
                <div className="animal-background">
                    <div className="animals">
                        {this.state.animals.map(animal => {
                            switch(animal.aniClass) {
                                case "Amphibian": 
                                    this.setState({
                                        amphibians: animal
                                    })
                                    return <Amphibians key={animal.id} animal={animal}/>;
                                case "Bird": 
                                    return <Birds key={animal.id} animal={animal} />;
                                case "Fish": 
                                    return <Fish key={animal.id} animal={animal} />;
                                case "Mammal": 
                                    return <Mammals key={animal.id} animal={animal} />;
                                case "Reptile": 
                                    return <Reptiles key={animal.id} animal={animal} />;
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.controller.abort();
    }

}

export default Filter;