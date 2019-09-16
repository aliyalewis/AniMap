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

        <div className="home-section">
          <br />
          <p className="p-tag">Create An Account</p>
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <br />
          <br />
        </div>
        <p className="p-tag">OR</p>
        <div className="home-section">
          <h3 className="header-three-login">
            (You are: {this.props.loggedInStatus})
          </h3>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <button className="button" onClick={() => this.props.handleDelete()}>
            Delete Account
          </button>
          <button className="button" onClick={() => this.handleLogoutClick()}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
