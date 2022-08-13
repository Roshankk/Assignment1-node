const express = require("express");
const app = express();
PORT = 8000;
app.get("/", (req, res) => {
  res.send("Server is running so far...");
});

app.get("/metrics", (req, res) => {
  var object = req.query.object;
  var metric = req.query.metric;
  var radius = req.query.radius;
  if (object == "circle" && metric == "area") {
    var result = radius * radius * Math.PI;
    result = result.toFixed(2);
  } else {
    var result = (4 / 3) * radius * radius * radius * Math.PI;
    result = result.toFixed(2);
  }

  var DisplayContent =
    req.query.metric + " of " + req.query.object + " is " + result;
  res.send(DisplayContent);
  res.send(req.query.DisplayContent);
});

app.listen(8000, console.log(`server runnig on 8000`));
