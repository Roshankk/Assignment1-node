const express = require("express");
const app = express();
PORT = 8000;
app.get("/", (req, res) => {
  res.send("Server is running so far...");
  console.log("server is running so far");
});

app.get("/getUsers", (req, res) => {
  var year = req.query.year;
  var month = req.query.month;
  var date = req.query.date;
  var calcAge = new Date(year, month, date);
  var diff_ms = Date.now() - calcAge.getTime();
  var age_dt = new Date(diff_ms);
  var age = Math.abs(age_dt.getUTCFullYear() - 1970);

  var DisplayContent =
    "<p >My name is " + req.query.name + "</p> <p >my age is " + age + "</p>";
  res.send(DisplayContent);
  res.send(req.query.name);
});

app.listen(8000, console.log(`server runnig on 8000`));
