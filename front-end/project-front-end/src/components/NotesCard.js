import React, { Component } from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

class NotesCard extends Component {

  render() {
    return (
      <div className="notes-card">
        <h1>{this.props.note.title}</h1>
        <p>{this.props.note.body}</p>
        <EditNote note={this.props.note} />
        <DeleteNote note={this.props.note}/>
      </div>
    )
  }

}

export default NotesCard;
