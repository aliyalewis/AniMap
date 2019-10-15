import React, { Component } from "react";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";
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

   fetchData =  async() => {
        const response = await fetch("http://localhost:3001/animals");
        const json = await response.json();
        this.setState({ animals: json})
    }

    componentDidMount() {
        this.fetchData();
    }

    filterer = (animals) => {
        for(let i = 0; i < animals.length; i++) {
            if(animals[i].aniClass === "Amphibian") {
                this.state.amphibians.push(animals[i]);
                console.log("amphs ", this.state.amphibians)
            } else if (animals[i].aniClass === "Bird")
            {
                this.state.birds.push(animals[i]);
                console.log("birds ", this.state.birds)
            } else if (animals[i].aniClass === "Fish") {
                this.state.fish.push(animals[i]);
                console.log("fish ", this.state.fish)
            } else if (animals[i].aniClass === "Mammal") {
                this.state.mammals.push(animals[i]);
                console.log("mammals ", this.state.mammals)
            } else {
                this.state.reptiles.push(animals[i])
                console.log("reptiles ", this.state.reptiles)
            }
         }
    }

    mapper = () => {
        
    }

    render() {
        return (
            <div>
                <MainHeader />
                <AnimalHeader />
                <div className="animal-background">
                    <div className="animals">
                        {
                            this.filterer(this.state.animals)
                         }
                    </div>
                </div>
            </div>
        )
    }


}

export default Filter;