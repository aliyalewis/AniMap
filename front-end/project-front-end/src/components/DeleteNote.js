import React from "react";
import axios from "axios";

function DeleteNote(props) {

  let handleClick = () => {
    fetch(`http://localhost:3001/comments/${props.note.id}`, {
      method: "DELTE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: props.note.id
      })
    })
    .then(res => res.json())
  }

  return (
    <button onClick={() => handleClick()}>Remove Note</button>
  )
}

export default DeleteNote;
