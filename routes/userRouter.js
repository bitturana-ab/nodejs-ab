const path = require("path");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("Home page", req.url, req.method);
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

module.exports = userRouter;
