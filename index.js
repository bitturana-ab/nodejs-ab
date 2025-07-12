console.log("first line");
const http = require("http");

const port = 3000;

// http
//   .createServer((req, res) => {
//     console.log(req);
//     // stop server and exit event loop on req
//     process.exit();
//   })
//   .listen(port, () => {
//     console.log(`server is running on port ${port}`);
//   });

http
  .createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // send response
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");

    res.write("<head>Html response</head>");
    res.write("<body><h1>Response of nodejs</h1></body>");
    res.write("</html>");
    res.end(); // end the response
  })
  .listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
