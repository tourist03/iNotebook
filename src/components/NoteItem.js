import React from "react";

const NoteItem = (props) => {
  const { note, updateNote, deleteNote, showAlert } = props;
  
  const handleDeleteNote = () => {
    deleteNote(note._id);
    showAlert("Note Deleted Successfully", "success");
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body position-relative">
          <div className="position-absolute top-0 end-0 mt-2 me-2">
            <i
              className="fa-duotone fa-solid fa-trash-can my-2 mx-3"
              style={{ color: "#594fa1" }}
              onClick={handleDeleteNote}
            ></i>
            <i
              className="fa-duotone fa-solid fa-user-pen mx-1"
              style={{ color: "#5021c0" }}
              onClick={() => updateNote(note)}
            ></i>
          </div>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;