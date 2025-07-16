const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

const port = 3000;

// use body-parser middleware to parse form data

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
