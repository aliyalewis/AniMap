import React, { Component } from "react";

class EditNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:3001/comments/${this.state.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
    .then(res => res.json())
    .catch(error => {
      console.log("edit error", error)
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
        <form onSubmit={this.handleSubmit}>
          <input name="title" type="text" placeholder={this.props.note.title} onChange={this.handleChange} required/>
          <input name="body" type="text" placeholder={this.props.note.body} onChange={this.handleChange} required />
          <button className="button" type="submit">Edit Note</button>
        </form>
      </div>
    )
  }
}

export default EditNote;
