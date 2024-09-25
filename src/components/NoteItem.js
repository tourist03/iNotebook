import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { deleteNote } = context;

  const { note , updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-duotone fa-solid fa-trash-can mx-3"
              style={{ color: "#594fa1" }}
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="fa-duotone fa-solid fa-user-pen mx-3"
              style={{ color: "#5021c0" }}
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>

          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
