const express = require("express");
const hostRouter = express.Router();
// get request hanler
hostRouter.get("/contact-us", (req, res, next) => {
  console.log("contact-us middleware");
  res.send(`<h1>
    Contact us!
    </h1>
    <p>Fill out the form below to get in touch.</p>
    <form action="/host/contact-us" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="password" name="password" placeholder="Your Password" required>
      <button type="submit">Submit</button>
    </form>
    `);
});
// post or submit form handler
hostRouter.post("/contact-us", (req, res, next) => {
  console.log("contact-us post middleware", req.body);
  res.send(`<h1>Thank you for contacting us ${req.body.name}!</h1>`);
});

module.exports = hostRouter;
