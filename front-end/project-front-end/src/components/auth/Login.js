import React, { Component } from "react";
import axios from "axios";

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: " ",
      username: " ",
      password: " ",
      loginErrors: " "
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username, password} = this.state;
    axios.post("http://localhost:3001/sessions", {
      user: {
        username: username,
        password: password,
      }
    },
    { withCredentials: true }
  ).then (res => {
     if (res.data.logged_in) {
       this.props.handleSuccessfulAuth(res.data)
    }
  })
  .catch(error => {
    if (error) {
    console.log("login error", error.response)
    }
  })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <input className="home-input" name="username" type="text" placeholder="Username" onChange={this.handleChange} required/>
          <br />
          <input className="home-input" name="password" type="password" placeholder="Password" onChange={this.handleChange} required/>
          <button className="button" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
