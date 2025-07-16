const express = require("express");
const userRouter = express.Router();

userRouter.use("/", (req, res, next) => {
  console.log("Home page", req.url, req.method);
  res.send(`
    <h1>
      Welcome to AB
    </h1>
    <a href="/host/contact-us">Add home</>
    `);
});

module.exports = userRouter;
