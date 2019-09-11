import React, { Component } from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

class NotesCard extends Component {

  render() {
    return (
      <div className="notes-card">
        <h2 className="header-two">{this.props.note.title}</h2>
        <p className="p-tag">{this.props.note.body}</p>
        <br />
        <EditNote note={this.props.note} />
        <DeleteNote note={this.props.note}/>
        <br />
      </div>
    )
  }

}

export default NotesCard;
