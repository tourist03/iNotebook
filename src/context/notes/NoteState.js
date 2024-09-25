import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5001";

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
    });
    const json = await response.json() ;
    console.log(json);
    setNotes(json);
  }

  //Add Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = response.json;

    const note = {
      _id: "66dee05d9545g60cf47b1f00e3",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: title,
      description: description,
      tags: tag,
      date: "2024-09-09T11:47:41.090Z",
      __v: 0,
    };
    console.log("Adding a New Note");
    setNotes(notes.concat(note));
  };

  //Delete Note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
    });
    // eslint-disable-next-line
    const json = response.json;
    console.log(json);
    
    console.log("Deleting the Note with Id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit Note

  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = response.json;


    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tags = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
