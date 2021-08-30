const express = require("express");
//why port 3000 or 3001
const PORT =  8080;

const app = express();


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});






app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});