import React, {useState} from "react";
import './App.css';
import data from "./data.json"
//components
import Header from "./Header.js"
import ToDoList from "./ToDoList.js";

/*use our useState() hook to wire up some local state in App.js the todoList is the variable representing data, the setToDoList will do stuff to the data and the data is the starting point Pass down state to ToDoList so it can be used*/

function App() {

  const [ toDoList, setToDoList ] = useState(data);
  return (
    <div className="App">
      <Header  />
      {/* A todo list will go here*/}
      {/* the toDoList is an object */}
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
