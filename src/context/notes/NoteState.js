import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5001";

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      // You might want to set an error state here or show a notification to the user
    }
  }

  //Add Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setNotes(notes.concat(json));
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
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZDgyZmY0YWQyNTMzZDE1YjBhOGRjIn0sImlhdCI6MTcyNTc5NDcxNn0.Ta7sq19us8PZ-fVw969vOvNSXs4RMnAxf-d2Hp20g1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    // Create a new array with the updated note
    const updatedNotes = notes.map(note => 
      note._id === id ? { ...note, title, description, tag } : note
    );

    // Update the state with the new array
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
