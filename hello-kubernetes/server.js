var express = require("express");

var app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
  res.json(["Hello Kubernetes!"]);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
