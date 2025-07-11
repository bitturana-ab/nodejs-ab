console.log("first line");
const http = require("http");

http
  .createServer((req, res) => {
    console.log("req: " + req);
    console.log(req);
  })
  .listen(3000);
