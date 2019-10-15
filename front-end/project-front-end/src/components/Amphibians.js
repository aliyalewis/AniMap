import React from "react";
import AnimalCard from "./AnimalCard";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";
import Filter from "./Filter";

const Amphibians = (props) => {

  // state = {
  //   animals: []
  // };

  // componentDidMount() {
  //   fetch("http://localhost:3001/animals")
  //     .then(res => res.json())
  //     .then(json => {
  //       return this.setState({
  //         animals: json
  //       });
  //     });
  // }


    return (
      <p>
        {console.log(props)}
      </p>
    )
      
  
  

  // render() {
  //   return (
  //     <div>
  //       <MainHeader />
  //       <AnimalHeader />
  //       <div className="animal-background">
  //         <div className="animals">
  //           {this.state.animals.map(animal => {
  //             if (animal.aniClass === "Amphibian") {
  //               return <AnimalCard key={animal.id} animal={animal} />;
  //             }
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Amphibians;
