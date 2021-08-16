//import the express framework
const express = require("express");

//create the express app
const app = express();

//set out port
const port = 3000;

//create a simple GET endpoint. When the user hits the endpoint, the message Hello World from express will appear. The endpoint is set to be on the homepage "/"
app.get("/", (req, res) => {
  res.send("Hello World, from express");
})

//start the client
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

//start the application in the terminal and visit the only endpion we have in our broswer.


