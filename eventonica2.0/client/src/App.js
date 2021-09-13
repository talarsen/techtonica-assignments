import React, {Fragment} from "react";
import InputUser from "./components/InputUser"
import './App.css';
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputUser />
        <ListUsers />
      </div>
    </Fragment>
  );
}

export default App;
