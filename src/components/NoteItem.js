import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-duotone fa-solid fa-trash-can mx-3"
              style={{ color: "#594fa1" }}
            ></i>
            <i
              className="fa-duotone fa-solid fa-user-pen mx-3"
              style={{ color: "#5021c0" }}
            ></i>
          </div>

          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
