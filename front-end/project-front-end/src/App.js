import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
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

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(res => {
        if (res.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: res.data.user
          })
        } else if (!res.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("check login error", error)
      })
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}
            render={props => (
              <Home {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
            )}
            />
            <Route exact path={"/dashboard"}
            render={props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
