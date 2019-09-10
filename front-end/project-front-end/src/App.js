import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import Map from "./components/Map";
import AllAnimals from "./components/AllAnimals";
import FilteredAnimals from "./containers/FilteredAnimals";
import AnimalCard from "./components/AnimalCard";
import Regions from "./containers/Regions";
import Fish from "./components/Fish";
import Mammals from "./components/Mammals";
import Reptiles from "./components/Reptiles";
import Amphibians from "./components/Amphibians";
import Birds from "./components/Birds";
import Favorites from "./components/Favorites";
import Notes from "./containers/Notes";
import "../css/style.scss"


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedInStatus: "Not logged in",
      user: {}
    }
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "Logged in",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "Not logged in",
      user: {}
    })
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(res => {
        if (res.data.logged_in && this.state.loggedInStatus === "Not logged in") {
          this.setState({
            loggedInStatus: "Logged in",
            user: res.data.user
          })
        } else if (!res.data.logged_in && this.state.loggedInStatus === "Logged in") {
          this.setState({
            loggedInStatus: "Not logged in",
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("check login error", error)
      })
  }

  handleDelete = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(res => {
        this.setState({
          user: res.data.user
        })
      })

    fetch(`http://localhost:3001/users/${this.state.user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    })
  }



  render() {
    return (
      <div className='app'>

        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}
            render={props => (
              <Home {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} handleLogout={this.handleLogout} handleDelete={this.handleDelete} />
            )}
            />
            <Route exact path={"/notes"}
            render={props => (
              <Notes {...props} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/>
            )}
            />
            <Route path="/map" exact component={Map}/>
            <Route path="/animals/:id" exact component={FilteredAnimals} />
            <Route path="/allanimals" exact component={AllAnimals} />
            <Route path="/regions" exact component={Regions} />
            <Route path="/mammals" exact component={Mammals} />
            <Route path="/fish" exact component={Fish} />
            <Route path="/reptiles" exact component={Reptiles} />
            <Route path="/amphibians" exact component={Amphibians} />
            <Route path="/birds" exact component={Birds} />
            <Route path="/favorites" exact component={Favorites} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
