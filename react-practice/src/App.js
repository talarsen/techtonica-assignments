import React, {useState} from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Note from "./components/Note.js";
import CreateNoteArea from "./components/CreateNoteArea.js"
function App() {

  const [notes, setNotes]= useState([]);

  function addNote(newNote) {
    setNotes(previousNotes => {
      return [...previousNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(previousNotes => {
      return previousNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
    <Header />
    <CreateNoteArea onAdd={addNote} />

    {notes.map((noteItem, index) => {
      return(
        <Note 
          key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content}
          onDelete={deleteNote} />
      );
    })}
    
    <Footer />
    </div>
  )
}
export default App