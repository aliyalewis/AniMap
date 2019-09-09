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
        <CreateNote user_id={this.props.user.id}/>
        <br />
        {this.state.notes.map(note => {
          if (note.user_id === this.props.user.id) {
            return <NotesCard key={note.id} note={note} user_id={this.state.id}/>
          }
        })}
      </div>
    );
  }
}

export default Notes;
