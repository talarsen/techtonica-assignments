import React, {Fragment, useState, useEffect} from "react";

const ListUsers = () => {
  const [users,setUsers] = useState([])
  
  //delete user function
  //be careful with filter
  async function deleteUser(id) {
    try {
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      });
      console.log(res)
      setUsers(users.filter(user => user.user_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  
  
  
  //by default fetch makes a get request
  async function getUsers() {
    const res = await fetch("http://localhost:5000/users")

    const userArray = await res.json();
    setUsers(userArray)
  }
  //use effect is used everytime a component is rendered. It keeps running it will keep making multiple request and to ensure it only makes one request at a time add a []
  useEffect(() => {
    getUsers();
  },[]);

//console.log(users)

return (
  <Fragment>
    <h1 className="mt-5">User List</h1>
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.user_id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Edit</td>
            <td><button className="btn btn-danger" onClick={() => deleteUser(user.user_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
)
};
export default ListUsers;

