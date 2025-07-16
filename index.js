const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use("/", (req, res, next) => {
  console.log("first middleware");
  next();
});
// get request hanler
app.get("/contact-us", (req, res, next) => {
  console.log("contact-us middleware");
  res.send(`<h1>
    Contact us!
    </h1>
    <p>Fill out the form below to get in touch.</p>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="password" name="password" placeholder="Your Password" required>
      <button type="submit">Submit</button>
    </form>
    `);
});
// use body-parser middleware to parse form data

app.use(bodyParser.urlencoded());

// post or submit form handler
app.post("/contact-us", (req, res, next) => {
  console.log("contact-us post middleware", req.body);
  res.send(`<h1>Thank you for contacting us ${req.body.name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
