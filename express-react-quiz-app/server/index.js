const express = require("express");
const totalQuestions= require("./totalQuestion");

//why port 3000 or 3001
const PORT =  process.env.PORT || 3001;

const app = express();


app.get("/totalquestions", (req, res) => {
  res.json(totalQuestions);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});






