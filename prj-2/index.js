// server.js File
const data = require("./data.json");
const express = require("express"); // Importing express module
const app = express(); // Creating an express object

const port = 8000; // Setting an port for this application
app.get("/vegetables", function (req, res) {
  res.send({ data });
});

// Starting server using listen function
app.listen(port, function (err) {
  if (err) {
    console.log("Error while starting server");
  } else {
    console.log("Server has been started at PORT " + port);
  }
});
