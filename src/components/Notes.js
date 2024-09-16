import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h4>Your Notes</h4>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
