import React from "react";
import ToDo from "./ToDo.js"

//this file is the container that holds all of our todos 

function ToDoList({toDoList}) {
  return (
    <div>
      {/* In our ToDoList, we will map over the todoList object that was passed down as props to create individual todos. */}
      {toDoList.map(todo => {
        return (
            <ToDo todo={todo} />
        )
      })}
    </div>
  );
}

export default ToDoList