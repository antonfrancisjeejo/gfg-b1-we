const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.write("<h1>Sorry, something went wrong</h1>");
      return res.end();
    }
    res.write(data);
    res.end();
  });
});

server.listen(4000, () => {
  console.log("Server is up and running");
});
