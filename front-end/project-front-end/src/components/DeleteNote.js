import React from "react";
import axios from "axios";

function DeleteNote(props) {

  let handleClick = () => {
    fetch(`http://localhost:3001/comments/${props.note.id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: props.note.id
      })
    })
  }

  return (
    <button className="button" onClick={() => handleClick()}>Remove Note</button>
  )
}

export default DeleteNote;
