import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import MainHeader from "./MainHeader";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
    this.props.history.push("/map");
  };

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(res => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  };

  render() {
    return (
      <div>
        <MainHeader />

        <div className="home-page">
          <br />
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <br />
          <p className="p-tag">OR</p>
          <br />
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div>
        <h3 className="header-three-login">(You are: {this.props.loggedInStatus})</h3>

        <button className="button" onClick={() => this.handleDelete()}>  Delete Account  </button>
        <button className="button" onClick={() => this.handleLogoutClick()}>  Logout  </button>
    </div>
    );
  }
}

export default Home;
