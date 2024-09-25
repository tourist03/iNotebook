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
        <div className="card-body position-relative">
          <div className="position-absolute top-0 end-0 mt-2 me-2">
            <i
              className="fa-duotone fa-solid fa-trash-can my-2 mx-3"
              style={{ color: "#594fa1" }}
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="fa-duotone fa-solid fa-user-pen mx-1"
              style={{ color: "#5021c0" }}
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;


// import React from "react";
// import noteContext from "../context/notes/NoteContext";

// const NoteItem = ({ note, updateNote }) => {
//   const { deleteNote } = React.useContext(noteContext);

//   return (
//     <div className="col-md-3">
//       <div className="card my-3">
//         <div className="card-body">
//           <div className="d-flex align-items-center justify-content-between">
//             <h5 className="card-title">{note.title}</h5>
//             <div>
//               <button
//                 className="btn btn-sm btn-danger me-2"
//                 onClick={() => deleteNote(note._id)}
//               >
//                 <i className="fas fa-trash-alt"></i>
//               </button>
//               <button
//                 className="btn btn-sm btn-primary"
//                 onClick={() => updateNote(note)}
//               >
//                 <i className="fas fa-edit"></i>
//               </button>
//             </div>
//           </div>
//           <p className="card-text">{note.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteItem;