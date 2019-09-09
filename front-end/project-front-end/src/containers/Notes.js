import React, { Component } from "react";
import NotesCard from "../components/NotesCard";
import MainHeader from "../components/MainHeader"

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

  filterNotes = () => {

  };

  render() {
    return (
      <div>
        <MainHeader />
        <br />
        {this.state.notes.map(note => {
          if (note.user_id === this.props.user.id) {
            return <NotesCard key={note.id} note={note}/>
          }
        })}
      </div>
    );
  }
}

export default Notes;
