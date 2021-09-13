//build a server that requires the express library
const { application } = require("express");
const express = require("express");
const pool = require("./db.js")

//declare app variable that is equal to express() which has all the methods to create a server
const app = express();


/***MIDDLEWARE**** */
//cors is middleware and allows domain applications to interact with each other
const cors = require("cors");

//create middleware too allow port 3000 and 5000 to interact with each other

//any time you use middleware you need to implement .use 
app.use(cors());


//any time we need to access data from the front-end we need to implement app.use(express.json()) which allows us to access the req.body. We can get json data
app.use(express.json())

//server will be listening on port 5000
app.listen(5000, () => {
  console.log("Server is starting on port 5000")
})


/****ROUTES */

//get ALL users
app.get("/users", async (req,res) => {
  try {
 const allUsers = await pool.query("SELECT * FROM users")
 res.json(allUsers.rows)
  } catch(err) {
    console.log(err.message);
  }
})

//get a user
//not much different from get all but speicify params in route. 
//
app.get("/users/:id", async (req, res) => {
    try { // set the params in route equal to id which will be declared with $1
    // here I am not destructing...what is destructure id below?
    const id = req.params.id;
    console.log(id);//logs the correct id entered from postman 
    //database also logs the correct user_id
    const user = await pool.query("SELECT * FROM users WHERE user_id = ($1)", [id]
    );
    res.json(user.rows[0])
  }catch(err){
    console.error(err.message)
  }
});


//create a user  by setting up a simple route
//want to add data
app.post("/users", async (req, res) => {
try {
  //the body is an object body is the payload
  //params is an object params come from the URL
  //destructing is the same as 
  //const {name: userName, email } = req.body
  //renaming variables userName = req.body.name
 
  const {name, email} = req.body;
  
  const newUser = await pool.query("INSERT INTO users (name, email) VALUES (\$1, \$2) RETURNING * ", [name, email]
  );
  //to better see what is going on in postman add .row[0] which is first index in the row array
  res.json(newUser.rows[0])
} catch(err) {
  console.error(err.message)
}
})

//delete a user
app.delete("/users/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = ($1)", [id]
    );
    res.json("User was deleted");
  }catch(err){
    console.error(err.message);
  }
});

/****EVENT ROUTES***** */

//create an event 
app.post("/events", async (req, res) => {
  try {
  
     const {name, email} = req.body;
    
    const newEvent = await pool.query("INSERT INTO users (name, email) VALUES (\$1, \$2) RETURNING * ", [name, email]
    );
    //to better see what is going on in postman add .row[0] which is first index in the row array
    res.json(newUser.rows[0])
  } catch(err) {
    console.error(err.message)
  }
  })
  