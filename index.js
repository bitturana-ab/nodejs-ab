const express = require("express");

const app = express();

const port = 3000;

app.use("/", (req, res, next) => {
  console.log("first middleware");
  next();
});

app.use("/ab", (req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
