import React,{Fragment, useState} from "react";



const InputUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  console.log(name, email)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const body = {name, email};
      const response= await fetch("http://localhost:5000/users",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(response)
    } catch (err) {
      console.log(err.message)
    }
  };


  return (
    <Fragment>
      <h1 className="my-5 ">Add User</h1>
      <form className="d-flex">
        <input 
          className ="form-conrol"
          type="text"
          placeholder="add user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className ="email form-conrol"
          type="text"
          placeholder="add user email"
          value={email}
          onChange ={(e) => setEmail(e.target.value)}

        />
        <button className="btn btn-success" onClick={handleSubmit}>Add User</button>
      </form>
    </Fragment>
  )
}

export default InputUser;