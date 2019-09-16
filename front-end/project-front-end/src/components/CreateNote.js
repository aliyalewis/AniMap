import React, { Component } from "react";

class CreateNote extends Component {
  state = {
    id: undefined,
    title: ' ',
    body: ' '
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {


    {console.log(this.props.user_id)}

    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
        title: this.state.title,
        body: this.state.body
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="title-input" name="title" type="text" placeholder="Title" onChange={this.handleChange}/>
          <input className="input" name="body" type="text" placholder="Write your note here" onChange={this.handleChange}/>
          <button className="button" type="submit">Create a new note</button>
        </form>
      </div>
    )
  }

}

export default CreateNote;
