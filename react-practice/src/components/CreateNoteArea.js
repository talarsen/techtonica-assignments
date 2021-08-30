import React, {useState} from "react";

function CreateNoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    //create new destructured object to revieve the typing of the new note
    const{name, value} = event.target
    //add a new note 
    setNote(previousNote => {
      ///return a new object with the previous note and in additions
      return {
        //use the spread operator to create an array of all of the past key value pairs
        ...previousNote,
        //this syntax[name] turns the name key from just the string "name" for the key to the actual value of name
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote( {
      title: "",
      content: "",
    })
    event.preventDefault();
  }

  return(
    <div>
      <form>
        <input name="title" 
        placeholder="Title" 
        onChange={handleChange}
        value={note.title}
         />
        <textarea 
        name="content"
         placeholder="Type your note here." rows="3" 
         onChange={handleChange}
        value={note.content}
         />
        <button onClick={submitNote}>Add Note</button>
      </form>
    </div>
  )
}

export default CreateNoteArea