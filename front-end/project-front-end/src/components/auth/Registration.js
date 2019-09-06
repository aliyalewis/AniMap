import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: " ",
      username: " ",
      password: " ",
      password_confirmation: " ",
      registrationErrors: " "
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, username, password} = this.state;
    axios.post("http://localhost:3001/registrations", {
      user: {
        name: name,
        username: username,
        password: password,
      }
    },
    { withCredentials: true }
  ).then (res => {
     if (res.data.status === "created") {
       this.props.handleSuccessfulAuth(res.data)
    }
  })
  .catch(error => {
    console.log("registration error", error)
  })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input name="name" type="text" placeholder="name" onChange={this.handleChange} required/>
          <input name="username" type="text" placeholder="username" onChange={this.handleChange} required/>
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange} required/>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Registration;
