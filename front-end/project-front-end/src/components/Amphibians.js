import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import MainHeader from "./MainHeader";
import AnimalHeader from "./AnimalHeader";
import Filter from "./Filter";

class Amphibians extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div>
        {console.log(this.props)}
      </div>
    )
  }
}

// const Amphibians = (props) => {


//     return (
//       <div>
//         {console.log(props)};
//       </div>
//     ) 
      
  
// }

export default Amphibians;
