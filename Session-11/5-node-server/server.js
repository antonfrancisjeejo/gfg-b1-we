const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/hello") {
    response.write("<h1>This is hello route</h1>");
    response.end();
    return;
  } else if (request.url === "/data") {
    response.write("<h1>This is data route</h1>");
    response.end();
    return;
  }
  response.write("<h1>I'm from server</h1>");
  response.end();
});

server.listen(4000, () => {
  console.log("Server is up");
});
