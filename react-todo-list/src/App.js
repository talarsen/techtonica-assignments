import React, {useState} from "react";
import './App.css';
import data from "./data.json"
//components
import Header from "./Header.js"
import ToDoList from "./ToDoList.js";

/*use our useState() hook to wire up some local state in App.js the todoList is the variable representing data, the setToDoList will do stuff to the data and the data is the starting point Pass down state to ToDoList so it can be used*/

function App() {

  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  return (
    <div className="App">
      <Header  />
      {/* A todo list will go here*/}
      {/* the toDoList is an object */}
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
