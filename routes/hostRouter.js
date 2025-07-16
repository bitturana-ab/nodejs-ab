const path = require("path");

const express = require("express");
const hostRouter = express.Router();
// get request hanler
hostRouter.get("/contact-us", (req, res, next) => {
  console.log("contact-us middleware");
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});
// post or submit form handler
hostRouter.post("/contact-us", (req, res, next) => {
  console.log("contact-us post middleware", req.body);
  res.sendFile(path.join(__dirname, "../", "views", "contact-post.html"));
});

module.exports = hostRouter;
