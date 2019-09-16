import React, { Component } from "react";
import NotesCard from "../components/NotesCard";
import MainHeader from "../components/MainHeader";
import CreateNote from "../components/CreateNote";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      id: this.props.user.id
    };
  }

  componentDidMount(props) {
    fetch("http://localhost:3001/comments")
      .then(res => res.json())
      .then(json => {
        this.setState({
          notes: json
        });
      });
  }

  render() {
    return (
      <div>
        <MainHeader />
        <br />
        <div className="new-notes-container">
          <CreateNote user_id={this.props.user.id}/>
          <br />
        </div>
        <div className="notes-container">
          {this.state.notes.map(note => {
            if (note.user_id === this.props.user.id) {
              return <NotesCard key={note.id} note={note} user_id={this.state.id}/>
            }
          })}
        </div>
      </div>
    );
  }
}

export default Notes;
