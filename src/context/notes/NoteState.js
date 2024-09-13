import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66dee05d95e60cf47b1f00e3",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T11:47:41.090Z",
      __v: 0,
    },
    {
      _id: "66dee70fbae755c4bda08cfa",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:15.618Z",
      __v: 0,
    },
    {
      _id: "66dee710bae755c4bda08cfc",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:16.149Z",
      __v: 0,
    },
    {
      _id: "66dee710bae755c4bda08cfe",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:16.365Z",
      __v: 0,
    },
    {
      _id: "66dee710bae755c4bda08d00",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:16.556Z",
      __v: 0,
    },
    {
      _id: "66dee710bae755c4bda08d02",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:16.751Z",
      __v: 0,
    },
    {
      _id: "66dee710bae755c4bda08d04",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:16.946Z",
      __v: 0,
    },
    {
      _id: "66dee711bae755c4bda08d06",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:17.302Z",
      __v: 0,
    },
    {
      _id: "66dee711bae755c4bda08d08",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:16:17.497Z",
      __v: 0,
    },
    {
      _id: "66dee86ce7918e8ae771e986",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-09T12:22:04.399Z",
      __v: 0,
    },
    {
      _id: "66e01ddf563f25ca73d12a1b",
      user: "66dd82ff4ad2533d15b0a8dc",
      title: "Title Goes Here4",
      description: "Description Goes here",
      tags: "General",
      date: "2024-09-10T10:22:23.756Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
