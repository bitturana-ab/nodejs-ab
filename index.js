console.log("first line");
const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    console.log(req);
    // stop server and exit event loop on req
    process.exit();
  })
  .listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
