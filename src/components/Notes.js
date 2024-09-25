import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes, getNotes } = useContext(noteContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNotes();
  }, []); // We're intentionally leaving this empty to mimic componentDidMount

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
