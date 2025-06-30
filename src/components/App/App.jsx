import { useState } from "react";
import Header from "../Header/Header";
import Note from "../Note/Note";
import Footer from "../Footer/Footer";

import CreateArea from "../CreateArea/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (
      !newNote.title ||
      !newNote.content ||
      newNote.title.trim() === "" ||
      newNote.content.trim() === ""
    ) {
      alert("Please add note title and content");
      return;
    }
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          key: notes.length + 1,
          title: newNote.title,
          content: newNote.content,
        },
      ];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key !== id);
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          id={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
