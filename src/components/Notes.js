import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h4>Your Notes</h4>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
